var navItems = document.querySelectorAll('.nav-item');
var bodyChildren = document.body.children;

var currentPage = "main";

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

function loadPage(tab) {
    let page = tab.getAttribute("page");
    document.body.classList.add("right-zoom-transition");
    
    setTimeout(() => {
        //whatever

        $('.content').children().each(function () {
            this.classList.add("hidden");
        });

        //updates the page indicator
        Array.from(navItems).forEach((element, index) => {
            element.classList.remove("selected");
        });
        tab.classList.add("selected");

        document.getElementById(page + 'Page').classList.remove("hidden");
        currentPage = page;

        console.log(page + 'Page');
    }, 600);

    setTimeout(() => {
        //whatever
        document.body.classList.remove("right-zoom-transition");
    }, 1800);
}

console.log(navItems);


Array.from(navItems).forEach((element, index) => {
    element.onclick = function() {
        loadPage(element);
        console.log(0);
    }
});
