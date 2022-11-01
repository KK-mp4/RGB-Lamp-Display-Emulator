<script setup lang="ts">
useHead({ title: "Generator" });

const textureResolution = ref("16x16"); // Lamp texture resolution
const src = ref("");  // DataURL of processed image
let textureSize = 16; // Lamp texture resolution
const maxSize = ref(512); // Displays maximum size for image depending on texture size
let inputUrl; // DataURL of uploaded image
let isLoading = ref(false); // Controls loading animation

// Canvas needed for animated favicon
let faviCanvas = document.createElement("canvas");
faviCanvas.width = 16;
faviCanvas.height = 16;
let favictx = faviCanvas.getContext("2d");

// Rendering function
async function Draw() {
  const start = Date.now();
  setLoadFavicon();
  isLoading.value = true;

  const img = new Image();
  img.src = inputUrl;
  await new Promise((resolve) => {
    img.onload = () => resolve(1);
  });

  let imgWidth = img.width;
  let imgHeight = img.height;

  // Limits input image to max size depending on selected rs lamp res
  if (imgWidth > 512) {
    imgWidth = 512;
  }

  if (imgHeight > 512) {
    imgHeight = 512;
  }

  const imgCanvas = document.createElement("canvas");
  imgCanvas.width = imgWidth;
  imgCanvas.height = imgHeight;
  const imgContext = imgCanvas.getContext("2d", { willReadFrequently: true });
  imgContext.drawImage(img, 0, 0, img.width, img.height);

  // Loading of lamp textures
  const R_Off = new Image();
  R_Off.src = "./" + textureResolution.value + "/ROff.png";
  await new Promise((resolve) => {
    R_Off.onload = () => resolve(1);
  });

  const R_On = new Image();
  R_On.src = "./" + textureResolution.value + "/ROn.png";
  await new Promise((resolve) => {
    R_On.onload = () => resolve(1);
  });

  const G_Off = new Image();
  G_Off.src = "./" + textureResolution.value + "/GOff.png";
  await new Promise((resolve) => {
    G_Off.onload = () => resolve(1);
  });

  const G_On = new Image();
  G_On.src = "./" + textureResolution.value + "/GOn.png";
  await new Promise((resolve) => {
    G_On.onload = () => resolve(1);
  });

  const B_Off = new Image();
  B_Off.src = "./" + textureResolution.value + "/BOff.png";
  await new Promise((resolve) => {
    B_Off.onload = () => resolve(1);
  });

  const B_On = new Image();
  B_On.src = "./" + textureResolution.value + "/BOn.png";
  await new Promise((resolve) => {
    B_On.onload = () => resolve(1);
  });

  const canvas = document.createElement("canvas");
  canvas.width = imgWidth * 3 * textureSize;
  canvas.height = imgHeight * 3 * textureSize;
  const ctx = canvas.getContext("2d");

  // Generation of output
  const threshold = 128;
  const imgRGBA = imgContext.getImageData(0, 0, imgWidth, imgHeight);
  for (let i = 0; i < imgHeight; i++) {
    for (let j = 0; j < imgWidth; j++) {
      if (imgRGBA.data[((i * imgWidth) + j) * 4] >= threshold) {
        ctx.drawImage(R_On, j * 3 * textureSize, i * 3 * textureSize);
        ctx.drawImage(R_On, j * 3 * textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(R_On, j * 3 * textureSize, (i * 3 * textureSize) + textureSize * 2);
      } else {
        ctx.drawImage(R_Off, j * 3 * textureSize, i * 3 * textureSize);
        ctx.drawImage(R_Off, j * 3 * textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(R_Off, j * 3 * textureSize, (i * 3 * textureSize) + textureSize * 2);
      }

      if (imgRGBA.data[(((i * imgWidth) + j) * 4) + 1] >= threshold) {
        ctx.drawImage(G_On, j * 3 * textureSize + textureSize, i * 3 * textureSize);
        ctx.drawImage(G_On, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(G_On, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize * 2);
      } else {
        ctx.drawImage(G_Off, j * 3 * textureSize + textureSize, i * 3 * textureSize);
        ctx.drawImage(G_Off, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(G_Off, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize * 2);
      }

      if (imgRGBA.data[(((i * imgWidth) + j) * 4) + 2] >= threshold) {
        ctx.drawImage(B_On, j * 3 * textureSize + (textureSize * 2), i * 3 * textureSize);
        ctx.drawImage(B_On, j * 3 * textureSize + (textureSize * 2), (i * 3 * textureSize) + textureSize);
        ctx.drawImage(B_On, j * 3 * textureSize + (textureSize * 2), (i * 3 * textureSize) + textureSize * 2);
      } else {
        ctx.drawImage(B_Off, j * 3 * textureSize + (textureSize * 2), i * 3 * textureSize);
        ctx.drawImage(B_Off, j * 3 * textureSize + (textureSize * 2), (i * 3 * textureSize) + textureSize);
        ctx.drawImage(B_Off, j * 3 * textureSize + (textureSize * 2), (i * 3 * textureSize) + textureSize * 2);
      }
    }
  }

  src.value = canvas.toDataURL();
  isLoading.value = false;
  setNormalFavicon();
  console.log(Date.now() - start + "ms - Calculation time");
}

// Sets favicon to normal rs lamps while it generates an image
async function setLoadFavicon() {
  const img = new Image();
  img.src = "./faviconLoad.ico";
  await new Promise((resolve) => {
    img.onload = () => resolve(1);
  });

  favictx.drawImage(img, 0, 0, 16, 16);

  let favicon = document.getElementById("favicon");
  favicon.setAttribute("href", faviCanvas.toDataURL());
	history.replaceState(null, null, window.location.hash == "#1" ? "#0" : "#1");
}

// Sets favicon to lit rs lamps
async function setNormalFavicon() {
  const img = new Image();
  img.src = "./favicon.ico";
  await new Promise((resolve) => {
    img.onload = () => resolve(1);
  });

  favictx.drawImage(img, 0, 0, 16, 16);

  let favicon = document.getElementById("favicon");
  favicon.setAttribute("href", faviCanvas.toDataURL());
	history.replaceState(null, null, window.location.hash == "#1" ? "#0" : "#1");
}

// Uploads image to DataURL
async function UploadImg(event) {
    if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event) => { // called once readAsDataURL is completed
        inputUrl = event.target.result;
        Draw();
        }
        console.log("Image loaded: " + inputUrl);
    }
}

// Calls Draw function on resolution/dithering/threshold change
async function ResolutionChange() {
  if (textureResolution.value === "1x1") {
    textureSize = 1;
    maxSize.value = 8192;
  }
  else if (textureResolution.value === "2x2") {
    textureSize = 2;
    maxSize.value = 4096;
  }
  else if (textureResolution.value === "4x4") {
    textureSize = 4;
    maxSize.value = 2048;
  }
  else if (textureResolution.value === "8x8") {
    textureSize = 8;
    maxSize.value = 1024;
  }
  else {
    textureSize = 16;
    maxSize.value = 512;
  }

  if (inputUrl) {
    Draw();
  }
}
</script>

<template>
  <div class="flex justify-center flex-wrap pt-2 flex-col items-center">
    <p class="text-lg text-gray-300">RGB Lamp Display Emulator by KK</p>
    <a class="text-xs text-blue-400 underline" href="https://github.com/KK-mp4/RGB-Lamp-Display-Emulator#readme" target="_blank">More info in GitHub</a>
    <a class="mb-5 text-xs text-blue-400 underline" href="https://kk-mp4.github.io/Lamp-Display-Emulator/" target="_blank" rel="noopener noreferrer">Monochrome 1 bit version</a>
    <p class="mb-1 text-sm text-gray-300">Lamp texture resolution:</p>
    <select v-model="textureResolution" class="w-64 mb-5 rounded-lg border h-7 bg-gray-700 border-gray-600 text-gray-400" @change="ResolutionChange()">
      <option value="1x1">1x1</option>
      <option value="2x2">2x2</option>
      <option value="4x4">4x4</option>
      <option value="8x8">8x8</option>
      <option value="16x16">16x16</option>
    </select>
    <p class="mb-1 text-sm text-gray-300">PNG or JPG ({{ maxSize }}x{{ maxSize }}px max)</p>
    <input class="block text-sm text-gray-400 rounded-lg border cursor-pointer focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" type="file" accept=".png, .jpg" @change="UploadImg($event)">
    <img v-if="isLoading" class="animate-spin h-7 w-7 top-52 absolute" src="/load.png" />
    <div class="w-full h-full mt-5 flex justify-center" style="image-rendering: pixelated">
      <img :src="src" class="w-[75%]" />
    </div>
  </div>
</template>
