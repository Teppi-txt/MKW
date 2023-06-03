var subject_template_data = {
    englishlanguageandliterature : [
        ["10 Point Plan", "A template to design an Individual Oral 10 point plan used during presentation"],
        ["Text", "test file since there are not enough"]
    ],
    englishliterature : [

    ]
};

var subject_name = localStorage.getItem("current-subject");
var subject_name_nospace = (subject_name.replace(/\s/g, '')).toLowerCase();
console.log(subject_name_nospace);
$('#subject-name-display').html(localStorage.getItem("current-subject"));

var subject_data = subject_template_data[subject_name_nospace];

for (let template = 0; template < subject_data.length; template++) {
    $('#file-grid').append(
        createTemplateHTML(template, subject_data[template][0], subject_data[template][1], subject_name_nospace)
    );
    console.log("Template named " + subject_data[template][0] + " that is " + subject_data[template][1])
}

function createTemplateHTML(id, name, description, subject) {
    return '<div class="file-display">\n<h1>' + name + '</h1>\n<p class="description">' + description + '</p>\n<a class="download-file" href="/templates/' + subject + '/' + id + '.png" download>\n<i class="fa fa-download"></i>\n<p>Download Template</p>\n</a>\n</div>';
}