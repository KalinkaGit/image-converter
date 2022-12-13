function handleFile(file) {
    if (file.type.match(/image.*/)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            $("#img").attr("src", reader.result);
            $("#img").show();
            $("#drop-area").hide();
            $("#convert-btn").show();
            $("#convert-format-select").show();
        };
    }
}

$(document).ready(function () {
    $("#drop-area").on('click', function () {
        $("#file").click();
    });

    $("#drop-area").on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).stop().animate({backgroundColor: '#0d1b2a'}, 200);
    });

    $("#drop-area").on('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).stop().animate({backgroundColor: '#1b263b'}, 200);
    });

    $("#drop-area").on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let file = e.originalEvent.dataTransfer.files[0];
        handleFile(file);
    });

    $("#file").change(function () {
        handleFile(this.files[0]);
    });

    $("#convert-btn").on('click', function () {
        let format = $("#convert-format-select").val();
        let img = $("#img").attr("src");
        let imgName = $("#file").val().split('\\').pop().split('/').pop().split('.')[0];
        convert(img, imgName, format);
    });
});