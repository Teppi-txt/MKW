var subject_template_data = {
    englishlanguageandliterature : [
        ["10 Point Plan", "A template to design a 10 point plan for the Individual Oral in english, including the global issue, field of inquiry, and individual points."]
    ],
    englishliterature : [
        ["10 Point Plan", "A template to design a 10 point plan for the Individual Oral in english, including the global issue, field of inquiry, and individual points."]
    ],
    geography : [
        ["Key Terms Glossary", "A template for documenting key terms of historical or geographic definitions."],
        ["Case Study Review Template", "A template for a case study."]
    ],
    psychology : [
        ["Case Study Review Template", "Template for taking notes on psychology experiments and case studies."]
    ],
    biology : [
        ["Review Template", "Biology revision and note-taking template."]
    ],
    chemistry : [
        ["Organic Chemistry Note-taking page", "Template for taking notes on organic chemistry topics."]
    ],
    designtechnology  : [
        ["Prototype Sketch Template", "Template for designing, sketching, and annotating a prototype."]
    ],
    computerscience  : [
        ["Truth Table Template", "Template for completing truth tables for logic gate diagrams and algorithms."],
        ["Pseudocode Template", "Template for writing pseudocode algorithms for practicing Paper 1 and 2 questions."],
        ["Trace Table Template", "Template for completing trace tables for logic gate diagrams and algorithms."]
    ],
    psychology  : [
        ["Psychology Review Sheet", "Template for review psychology case studies and oganising results."]
    ],
    mathapplicationandanalysis : [
        ["Graphing paper", "Template for graphing and analysing different functions or data sets."],
        ["Trigonometric graphing paper", "Template for graphing and analysing different geometric scenarios."]
    ],
    mathapplicationandinterpretations : [
        ["Graphing paper", "Template for graphing and analysing different functions or data sets."],
        ["Trigonometric graphing paper", "Template for graphing and analysing different geometric scenarios."]
    ],
    film : [
        ["Storyboard Template", "Template for detailing and creating storyboards for film production."]
    ]
};

var subject_name = localStorage.getItem("current-subject");
var subject_name_nospace = (subject_name.replace(/\s/g, '')).toLowerCase();
console.log(subject_name_nospace);
$('#subject-name-display').html(localStorage.getItem("current-subject"));

var subject_data = subject_template_data[subject_name_nospace];

//checks if there are any files to be loaded in the folder
if (subject_data.length != null) {
    $('.empty-page').addClass("hidden")
    for (let template = 0; template < subject_data.length; template++) {
        $('#file-grid').append(
            createTemplateHTML(template, subject_data[template][0], subject_data[template][1], subject_name_nospace)
        );
        console.log("Template named " + subject_data[template][0] + " that is " + subject_data[template][1])
    }    
}


function createBlankHTML() {
    return '<h1>No resources available :<</h1>';
}

function createTemplateHTML(id, name, description, subject) {
    return '<div class="file-display">\n<h1>' + name + '</h1>\n<p class="description">' + description + '</p>\n<a class="download-file" href="../templates/' + subject + '/' + (id + 1) + '.png" download>\n<i class="fa fa-download"></i>\n<p>Download Template</p>\n</a>\n</div>';
}