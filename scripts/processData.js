var data = {
    tags: [{
        tag: ".NET"
    },
    {
        tag: "C#"
    },
    {
        tag: "SAP B1"
    }
        /*{
            tag: "ASP.NET"
        },
        {
            tag: "Javascript"
        },
        {
            tag: "JAVA"
        },
        {
            tag: "MySQL"
        }*/
    ],
    Institutes: [{
        Institute: "Alura"
    },
    {
        Institute: "Udemy"
    },
    {
        Institute: "Coursera"
    }
    ],
    courses: [{
        coursesPeriodo: "Março, 2024",
        coursesDetails: {
            coursesTitle: "C# - Aplicando Princípios SOLID na prática",
            coursesTag: [
                ".NET",
                "C#",
                "Programação"
            ],
            coursesInstitution: "Udemy",
            coursesCertification: "http://ude.my/UC-6d989509-247d-43da-9cba-6636af507c07"
        }
    },
    /* {
         coursesPeriodo: "Março, 2022",
         coursesDetails: {
             coursesTitle: "Curso Web API ASP .NET Core Essencial (.NET 6)",
             coursesTag: [
                 ".NET",
                 "C#",
                 "ASP.NET",
                 "Programação"
             ],
             coursesInstitution: "Udemy",
             coursesCertification: "#"
         }
     },
     {
         coursesPeriodo: "Abril, 2022",
         coursesDetails: {
             coursesTitle: "Linguagem de programação C# - Avançado",
             coursesTag: [
                 "C#",
                 ".NET",
                 "Programação"
             ],
             coursesInstitution: "Udemy",
             coursesCertification: "#"
         }
     },*/
    {
        coursesPeriodo: "Março, 2024",
        coursesDetails: {
            coursesTitle: "SAP Crystal Reports - Do Básico ao Avançado",
            coursesTag: [
                "SAP B1",
                "Crystal Reports"
            ],
            coursesInstitution: "Udemy",
            coursesCertification: "http://ude.my/UC-699cd351-acb6-43af-94cf-e6e42bd9c6cb"
        }
    }
    ]
};

//Coloca dados na tela
let FilterInstitution = document.querySelector("#FilterInstitution");
data.Institutes.forEach(obj => {
    FilterInstitution.innerHTML += `<spam class="filterIBtn">${obj.Institute}</spam>`;
});

let FilterTag = document.querySelector("#FilterCourse");
data.tags.forEach(obj => {
    FilterTag.innerHTML += `<spam class="filterCBtn">${obj.tag}</spam>`;
});

let Courses = document.querySelector("#resultCourses");
data.courses.forEach(obj => {
    Courses.innerHTML += `<table class="courses">
    <tr>
      <td class="coursesPeriodo">${obj.coursesPeriodo}</td>
        <td class="coursesDetails">
            <p class="coursesTitle">${obj.coursesDetails.coursesTitle}</p>
            <p class="coursesTag"><b>Tags: </b>${obj.coursesDetails.coursesTag.join(" | ")}</p>
            <p class="coursesInstitution"><b>Instituição:</b> ${obj.coursesDetails.coursesInstitution}</p>
            <a href="${obj.coursesDetails.coursesCertification}" class="coursesCertification">Certificado</a>
        </td>
    </tr>
</table>`;
});


var elementosSelecionados = [];
var elementosSelecionadosCurso = [];


var divs = document.querySelectorAll('.filterIBtn');
divs.forEach(function (div) {
    div.addEventListener('click', function () {
        //var test = document.querySelectorAll('.filterIBtn');
        /*test.forEach(function(div) {
            div.style.border = '';
        });*/

        var divClicada = event.target;

        if (divClicada.style.border == '1px solid rgb(0, 102, 255)') {
            divClicada.style.border = '';

            var index = elementosSelecionados.indexOf(divClicada);
            if (index !== -1) {
                elementosSelecionados.splice(index, 1);
            }
        } else {
            divClicada.style.border = '1px solid #0066FF';

            elementosSelecionados.push(divClicada);
        }

        let Courses = document.querySelector("#resultCourses");
        Courses.innerHTML = "";

        if (elementosSelecionados.length) {
            elementosSelecionados.forEach(obj2 => {

                data.courses.forEach(obj => {
                    if (obj.coursesDetails.coursesInstitution == obj2.textContent) {

                        Courses.innerHTML += `<table class="courses">
            <tr>
              <td class="coursesPeriodo">${obj.coursesPeriodo}</td>
                <td class="coursesDetails">
                    <p class="coursesTitle">${obj.coursesDetails.coursesTitle}</p>
                    <p class="coursesTag"><b>Tags: </b>${obj.coursesDetails.coursesTag.join(" | ")}</p>
                    <p class="coursesInstitution"><b>Instituição:</b> ${obj.coursesDetails.coursesInstitution}</p>
                    <a href="${obj.coursesDetails.coursesCertification}" class="coursesCertification">Certificado</a>
                </td>
            </tr>
        </table>`;
                    }
                });
            });
        } else {
            data.courses.forEach(obj => {

                Courses.innerHTML += `<table class="courses">
        <tr>
          <td class="coursesPeriodo">${obj.coursesPeriodo}</td>
            <td class="coursesDetails">
                <p class="coursesTitle">${obj.coursesDetails.coursesTitle}</p>
                <p class="coursesTag"><b>Tags: </b>${obj.coursesDetails.coursesTag.join(" | ")}</p>
                <p class="coursesInstitution"><b>Instituição:</b> ${obj.coursesDetails.coursesInstitution}</p>
                <a href="${obj.coursesDetails.coursesCertification}" class="coursesCertification">Certificado</a>
            </td>
        </tr>
    </table>`;

            });
        }


    });
});




var divs = document.querySelectorAll('.filterCBtn');
divs.forEach(function (div) {
    div.addEventListener('click', function () {

        var divClicada = event.target;

        if (divClicada.style.border == '1px solid rgb(0, 102, 255)') {
            divClicada.style.border = '';

            var index = elementosSelecionadosCurso.indexOf(divClicada);
            if (index !== -1) {
                elementosSelecionadosCurso.splice(index, 1);
            }
        } else {
            divClicada.style.border = '1px solid #0066FF';

            elementosSelecionadosCurso.push(divClicada);
        }

        let Courses = document.querySelector("#resultCourses");
        Courses.innerHTML = "";
        if (elementosSelecionadosCurso.length) {
        elementosSelecionadosCurso.forEach(obj2 => {
            data.courses.forEach(obj => {
                if (obj.coursesDetails.coursesTag.includes(obj2.textContent)) {

                    Courses.innerHTML += `<table class="courses">
            <tr>
              <td class="coursesPeriodo">${obj.coursesPeriodo}</td>
                <td class="coursesDetails">
                    <p class="coursesTitle">${obj.coursesDetails.coursesTitle}</p>
                    <p class="coursesTag"><b>Tags: </b>${obj.coursesDetails.coursesTag.join(" | ")}</p>
                    <p class="coursesInstitution"><b>Instituição:</b> ${obj.coursesDetails.coursesInstitution}</p>
                    <a href="${obj.coursesDetails.coursesCertification}" class="coursesCertification">Certificado</a>
                </td>
            </tr>
        </table>`;
                }
            });
        });
    }else{
        data.courses.forEach(obj => {

            Courses.innerHTML += `<table class="courses">
                <tr>
                <td class="coursesPeriodo">${obj.coursesPeriodo}</td>
                    <td class="coursesDetails">
                        <p class="coursesTitle">${obj.coursesDetails.coursesTitle}</p>
                        <p class="coursesTag"><b>Tags: </b>${obj.coursesDetails.coursesTag.join(" | ")}</p>
                        <p class="coursesInstitution"><b>Instituição:</b> ${obj.coursesDetails.coursesInstitution}</p>
                        <a href="${obj.coursesDetails.coursesCertification}" class="coursesCertification">Certificado</a>
                    </td>
                </tr>
            </table>`;

        });
    }


    });
});