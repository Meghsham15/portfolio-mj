const skills = [
    {
        id: "fadeRight1",
        img: "./img/html.png",
        name: "HTML"
    },
    {
        id: "fadeUp1",
        img: "./img/css.png",
        name: "CSS"
    },
    {
        id: "fadeLeft1",
        img: "./img/js.png",
        name: "JavaScript"
    },
    // 6
    {
        id: "fadeRight2",
        img: "./img/jquery.png",
        name: "JQuery"
    },
    {
        id: "fadeUp2",
        img: "./img/mongo.png",
        name: "mongoDB"
    },
    {
        id: "fadeLeft2",
        img: "./img/sql.png",
        name: "SQL"
    },
    // 9
    {
        id: "fadeRight3",
        img: "./img/api.png",
        name: "Rest API"
    },
    {
        id: "fadeUp3",
        img: "./img/cpp.png",
        name: "Basic C/CPP"
    },
    {
        id: "fadeLeft3",
        img: "./img/nodejs.png",
        name: "Node JS"
    },
    ////////////
];


let skillDiv = document.getElementById('skillDiv');
for (let i = 0; i < skills.length; i++) {
    let div = document.createElement('div');
    div.className = 'skill';
    let subdiv = document.createElement('div');
    subdiv.id = skills[i].id;
    subdiv.className = 'skl';
    let img = document.createElement('img');
    img.className = 'let';
    img.src = skills[i].img;
    subdiv.appendChild(img);
    let heading = document.createElement('h3');
    heading.innerText = skills[i].name;
    subdiv.appendChild(heading);
    div.appendChild(subdiv);
    skillDiv.appendChild(div);
}

$(".let").mouseenter(function () {
    $(this).css("animation", "letter 0.6s ease-out 1 alternate");
});
// $(".let").mouseleave(function () {
//     setInterval(function () {
//         $(this).css("animation", "none");
//     }, 400);
// });
setInterval(function () {
    $(".let").css("animation", "none");
}, 2000);