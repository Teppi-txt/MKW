var download_button_interactive = $("#download-button-feature");
download_button_interactive.on("click", function () {
    download_button_interactive.removeClass("unchecked");
    download_button_interactive.children().each(function () {
        this.classList.add("transparent");
    });

    setTimeout(() => {
        $("#check").removeClass("transparent");
    }, 150);
    console.log(0);
})
