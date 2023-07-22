var logo = document.querySelectorAll('.logo');
//detect when subjects are clicked
Array.from(logo).forEach((element, index) => {
    element.onclick = function() {
        history.back()
    }
});

