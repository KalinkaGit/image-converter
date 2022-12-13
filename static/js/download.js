function download(dataURL, imgFormat, imgName) {
    let a = document.createElement('a');
    a.href = dataURL;
    a.download = imgName + '.' + imgFormat;
    a.click();
}