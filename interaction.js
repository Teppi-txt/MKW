const subjectsBtn = document.getElementById('subjectBtn');

subjectsBtn.onclick = function() {
    document.body.classList.add("right-zoom-transition");
    setTimeout(() => {
        //whatever
        document.body.classList.remove("right-zoom-transition");
    }, 1200);
}