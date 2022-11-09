export function quantize(image, threshold) {
    for (let i = 0; i < image.data.length; i += 4) {
        const mapR = (image.data[i] / 255) * threshold;
        const mapG = (image.data[i + 1] / 255) * threshold;
        const mapB = (image.data[i + 2] / 255) * threshold;
        const closestColor = findClosestColor(mapR, mapG, mapB);
        image.data[i] = closestColor[0];
        image.data[i + 1] = closestColor[1];
        image.data[i + 2] = closestColor[2];
    }

    return image;
}

export function ditherBayer2x2(image, threshold) {
    const thresholdMap = [
        [0, 127],
        [192, 63]
    ];

    for (let i = 0; i < image.data.length; i += 4) {
        const x = i / 4 % image.width;
        const y = Math.floor(i / 4 / image.width);
        const mapR = ((image.data[i] + thresholdMap[x % 2][y % 2]) / 510) * threshold;
        const mapG = ((image.data[i + 1] + thresholdMap[x % 2][y % 2]) / 510) * threshold;
        const mapB = ((image.data[i + 2] + thresholdMap[x % 2][y % 2]) / 510) * threshold;
        const closestColor = findClosestColor(mapR, mapG, mapB);
        image.data[i] = closestColor[0];
        image.data[i + 1] = closestColor[1];
        image.data[i + 2] = closestColor[2];
    }

    return image;
}

export function ditherBayer4x4(image, threshold) {
    const thresholdMap = [
        [15, 135, 45, 165],
        [195, 75, 225, 105],
        [60, 180, 30, 150],
        [240, 120, 210, 90]
    ];

    for (let i = 0; i < image.data.length; i += 4) {
        const x = i / 4 % image.width;
        const y = Math.floor(i / 4 / image.width);
        const mapR = ((image.data[i] + thresholdMap[x % 4][y % 4]) / 510) * threshold;
        const mapG = ((image.data[i + 1] + thresholdMap[x % 4][y % 4]) / 510) * threshold;
        const mapB = ((image.data[i + 2] + thresholdMap[x % 4][y % 4]) / 510) * threshold;
        const closestColor = findClosestColor(mapR, mapG, mapB);
        image.data[i] = closestColor[0];
        image.data[i + 1] = closestColor[1];
        image.data[i + 2] = closestColor[2];
    }

    return image;
}

export function ditherBayer8x8(image, threshold) {
    const thresholdMap = [
        [0, 128, 32, 160, 8, 136, 40, 168],
        [192, 64, 224, 96, 200, 72, 232, 104],
        [48, 176, 16, 144, 56, 184, 24, 152],
        [240, 112, 208, 80, 248, 120, 216, 88],
        [12, 140, 44, 172, 4, 132, 36, 164],
        [204, 76, 236, 108, 196, 68, 228, 100],
        [60, 188, 28, 156, 52, 180, 20, 148],
        [252, 124, 220, 92, 244, 116, 212, 84]
    ];

    for (let i = 0; i < image.data.length; i += 4) {
        const x = i / 4 % image.width;
        const y = Math.floor(i / 4 / image.width);
        const mapR = ((image.data[i] + thresholdMap[x % 8][y % 8]) / 510) * threshold;
        const mapG = ((image.data[i + 1] + thresholdMap[x % 8][y % 8]) / 510) * threshold;
        const mapB = ((image.data[i + 2] + thresholdMap[x % 8][y % 8]) / 510) * threshold;
        const closestColor = findClosestColor(mapR, mapG, mapB);
        image.data[i] = closestColor[0];
        image.data[i + 1] = closestColor[1];
        image.data[i + 2] = closestColor[2];
    }

    return image;
}

export function ditherYliluoma(image, threshold) {

    return image;
}

function findClosestColor(r, g, b) {
    const colorPalette = [
        [255, 255, 255],
        [255, 0, 0],
        [255, 255, 0],
        [0, 255, 0],
        [0, 255, 255],
        [0, 0, 255],
        [0, 0, 0]
    ];

    let best = [255, 255, 255];
    let distanceBest =  Math.sqrt(Math.pow((r - colorPalette[0][0]), 2) + Math.pow((g - colorPalette[0][1]), 2) + Math.pow((b - colorPalette[0][2]), 2));
    for (let i = 1; i < colorPalette.length; i++) {
        const distance = Math.sqrt(Math.pow((r - colorPalette[i][0]), 2) + Math.pow((g - colorPalette[i][1]), 2) + Math.pow((b - colorPalette[i][2]), 2));
        if (distance < distanceBest) {
            best = [colorPalette[i][0], colorPalette[i][1], colorPalette[i][2]];
            distanceBest = distance;
        }
    }

    return best;
}