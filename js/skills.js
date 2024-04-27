const skills = [
    {
        id: "fadeRight1",
        name: "HTML",
        img:"./img/html.png"
    },
    {
        id: "fadeUp1",
        name: "CSS",
        img:"./img/css.png"
    },
    {
        id: "fadeLeft1",
        name: "JavaScript",
        img:"./img/js.png"
    },
    // 6
    {
        id: "fadeRight2",
        name: "Motoko",
        img:"./img/motoko.png"
    },
    {
        id: "fadeUp2",
        name: "ICP Blockchain",
        img:"./img/icp.png"
    },
    {
        id: "fadeLeft2",
        name: "Node JS",
        img:"./img/nodejs.png"
    },
    {
        id: "fadeRight3",
        name: "Mongodb",
        img:"./img/mongo.png"
    },
    {
        id: "fadeUp3",
        name: "React Js",
        img:"./img/reactjs.png"
    },
    // 9
    {
        id: "fadeLeft3",
        img:"./img/api.png",
        name: "Rest API"
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