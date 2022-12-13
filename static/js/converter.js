function isValidFormat(format) {
    switch (format) {
        case 'png':
        case 'webp':
        case 'jpg':
        case 'jpeg':
        case 'bmp':
        case 'gif':
            return true;
        default:
            return false;
    }
}

function convert(img, imgName, format) {
    if (!isValidFormat(format))
        return;

    canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let imgObj = new Image();
    imgObj.src = img;
    imgObj.onload = function () {
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        let dataURL = canvas.toDataURL('image/' + format);
        download(dataURL, format, imgName);
    }
}
