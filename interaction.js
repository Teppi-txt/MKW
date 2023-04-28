const subjectsBtn = document.getElementById('subjectBtn');
const subjectPage = document.getElementById('subjectPage');

subjectsBtn.onclick = function() {
    document.body.classList.add("right-zoom-transition");
    setTimeout(() => {
        //whatever
        subjectPage.classList.remove("hidden");
    }, 600);

    setTimeout(() => {
        //whatever
        document.body.classList.remove("right-zoom-transition");
    }, 1800);
}