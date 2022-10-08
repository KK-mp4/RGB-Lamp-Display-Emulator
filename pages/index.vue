<script setup lang="ts">
useHead({ title: "Generator" });

const textureResolution = ref("16x16");
const src = ref("");
let textureSize = 16;
const maxSize = ref(512);
let inputUrl;

async function Draw() {
  const img = new Image();
  img.src = inputUrl;
  await new Promise((resolve) => {
    img.onload = () => resolve(1);
  });

  let imgWidth = img.width;
  let imgHeight = img.height;

  if (imgWidth > 512) {
    imgWidth = 512;
  }

  if (imgHeight > 512) {
    imgHeight = 512;
  }

  const imgCanvas = document.createElement("canvas");
  imgCanvas.width = imgWidth;
  imgCanvas.height = imgHeight;
  const imgContext = imgCanvas.getContext("2d");
  imgContext.drawImage(img, 0, 0, img.width, img.height);

  // Loading textures
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

  for (let i = 0; i < imgHeight; i++) {
    for (let j = 0; j < imgWidth; j++) {
      const color = imgContext.getImageData(j, i, 1, 1).data;

      if (color[0] >= 128) {
        ctx.drawImage(R_On, j * 3 * textureSize, i * 3 * textureSize);
        ctx.drawImage(R_On, j * 3 * textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(R_On, j * 3 * textureSize, (i * 3 * textureSize) + textureSize * 2);
      } else {
        ctx.drawImage(R_Off, j * 3 * textureSize, i * 3 * textureSize);
        ctx.drawImage(R_Off, j * 3 * textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(R_Off, j * 3 * textureSize, (i * 3 * textureSize) + textureSize * 2);
      }

      if (color[1] >= 128) {
        ctx.drawImage(G_On, j * 3 * textureSize + textureSize, i * 3 * textureSize);
        ctx.drawImage(G_On, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(G_On, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize * 2);
      } else {
        ctx.drawImage(G_Off, j * 3 * textureSize + textureSize, i * 3 * textureSize);
        ctx.drawImage(G_Off, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize);
        ctx.drawImage(G_Off, j * 3 * textureSize + textureSize, (i * 3 * textureSize) + textureSize * 2);
      }

      if (color[2] >= 128) {
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
}

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

async function ResolutionChane() {
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
    <a class="mb-5 text-xs text-blue-400 underline" href="https://github.com/KK-mp4/RGB-Lamp-Display-Emulator#readme" target="_blank">More info in GitHub</a>
    <p class="mb-1 text-sm text-gray-300">Lamp texture resolution:</p>
    <select v-model="textureResolution" class="w-64 mb-5 rounded-lg border h-7 bg-gray-700 border-gray-600 text-gray-400" @change="ResolutionChane()">
      <option value="1x1">1x1</option>
      <option value="2x2">2x2</option>
      <option value="4x4">4x4</option>
      <option value="8x8">8x8</option>
      <option value="16x16">16x16</option>
    </select>
    <p class="mb-1 text-sm text-gray-300">PNG or JPG ({{ maxSize }}x{{ maxSize }}px max)</p>
    <input class="block text-sm text-gray-400 rounded-lg border cursor-pointer focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" type="file" accept=".png, .jpg" @change="UploadImg($event)">
    <div
      class="w-full h-full mt-5 flex justify-center"
      style="image-rendering: pixelated"
    >
      <img :src="src" class="w-[75%]" />
    </div>
  </div>
</template>

<style>
#canvas {
  border: 1px solid white;
}
</style>
