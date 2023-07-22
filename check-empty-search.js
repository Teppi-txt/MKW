var form = $("#search-form");
form.submit(function(e){
    e.preventDefault();
});
var searchBtn = $(".search-submit");

searchBtn.on("click", function() {
    console.log(0);
    if (form.contents("input").val().trim() == "") {
        form.addClass("shake");
        setTimeout(() => {
            //whatever
            form.removeClass("shake");
        }, 300);
    }
} );