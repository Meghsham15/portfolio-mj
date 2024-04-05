const proj = [
    {
        id: 101,
        link: "https://meghsham15.github.io/hotel/",
        img: "./img/hotel.png",
        name: "Hotel Website",
        des:"Responsive website for advertisement of a hotel situated near a beach",
        link:"https://meghsham15.github.io/hotel/"
    },
    {
        id: 102,
        link: "https://meghsham15.github.io/songs-project-/",
        img: "./img/music.png",
        name: "Music Website",
        des:"In this project i have created music website which plays music produced by my friend.",
    },
    {
        id: 103,
        link: "https://github.com/Meghsham15/journal-website",
        img: "./img/Journal.png",
        name: "Journal Website",
        des:"Journal website with some basic mongo skills used in it",
    },
    {
        id: 106,
        link: "https://meghsham15.github.io/react-books-app/",
        img: "./img/reactBookList.png",
        name: "React Booklist App",
        des:"React booklist app with some basic react skills",
    },
    {
        id: 107,
        link: "https://github.com/Meghsham15/portfolio-nodejs",
        img: "./img/portfolioNode.png",
        name: "Nodejs Portfolio",
        des:"Node js app with Mongodb and oauth skills",
    },
    {
        id: 108,
        link: "https://meghsham15.github.io/react-todo/",
        img: "./img/keeperApp.png",
        name: "React Todo App",
        des:"React js Todo app",
    },
    {
        id: 109,
        link: "https://github.com/Meghsham15/chat-app/tree/main",
        img: "./img/RTCA.png",
        name: "Real time chat App",
        des:"Real time chat app using socket.io in nodejs",
    },
    {
        id: 110,
        link: "https://meghsham15.github.io/react-portfolio/",
        img: "./img/portfolioNode.png",
        name: "Reactjs portfolio",
        des:"Portfolio created using reactjs",
    },
]

let projectDiv = document.getElementById('projectSlide');
for (let i = 0; i < proj.length; i++) {
    let div = document.createElement('div');
    div.id = proj[i].id;
    div.className = 'projectContent';
    let a = document.createElement('a');
    a.className = 'proInner';
    let imgdiv = document.createElement('div');
    imgdiv.className = 'proImg';
    let img = document.createElement('img');
    img.src = proj[i].img;
    imgdiv.appendChild(img);
    let namediv = document.createElement('div');
    namediv.className = 'proInfo';
    let head = document.createElement('h2');
    head.innerText = proj[i].name;
    namediv.appendChild(head);
    a.appendChild(imgdiv);
    a.appendChild(namediv);
    div.appendChild(a);
    projectDiv.appendChild(div);

}

// pop up - 
let popDiv = document.getElementById('projectPop');
for (let i = 0; i < proj.length; i++) {
    let e = proj[i];
    // Create the main container div
    var proPopContainer = document.createElement('div');
    proPopContainer.id = 'proPop' + e.id;
    proPopContainer.className = 'proPop display';

    // Create the popMain div
    var popMainDiv = document.createElement('div');
    popMainDiv.className = 'popMain';

    // Create the image element
    var imgElement = document.createElement('img');
    imgElement.src = e.img;
    imgElement.alt = '';

    // Create the h1 element
    var h1Element = document.createElement('h1');
    h1Element.textContent = e.name;

    // Create the h3 element
    var h3Element = document.createElement('h3');
    h3Element.textContent = e.des;

    // Create the webLink div
    var webLinkDiv = document.createElement('div');
    webLinkDiv.className = 'webLink';

    // Create the h4 element inside webLinkDiv
    var h4Element = document.createElement('h4');
    h4Element.textContent = 'Website Link -';

    // Create the anchor element inside webLinkDiv
    var anchorElement = document.createElement('a');
    anchorElement.target = '_blank';
    anchorElement.href = e.link;
    anchorElement.textContent = e.link;

    // Append the h4 and anchor elements to webLinkDiv
    webLinkDiv.appendChild(h4Element);
    webLinkDiv.appendChild(anchorElement);

    // Append img, h1, h3, and webLinkDiv to popMainDiv
    popMainDiv.appendChild(imgElement);
    popMainDiv.appendChild(h1Element);
    popMainDiv.appendChild(h3Element);
    popMainDiv.appendChild(webLinkDiv);

    // Create the proPopB101 anchor element
    var proPopB101Anchor = document.createElement('a');
    proPopB101Anchor.id = 'proPopB' + e.id;
    proPopB101Anchor.className = 'proPopB';

    // Create the p element inside proPopB101Anchor
    var pElement = document.createElement('p');
    pElement.textContent = '⨯';

    // Append the p element to proPopB101Anchor
    proPopB101Anchor.appendChild(pElement);

    // Append popMainDiv and proPopB101Anchor to proPopContainer
    proPopContainer.appendChild(popMainDiv);
    proPopContainer.appendChild(proPopB101Anchor);

    popDiv.appendChild(proPopContainer);
}


// carosel - 
class Carosel {
    constructor() {
        this.projIds = this.getIds();
        this.id = this.projIds[0];
        this.length = this.projIds.length - 1;
    }

    getIds() {
        let idArr = [];
        for (let i = 0; i < proj.length; i++) {
            for (let key in proj[0]) {
                if (key === 'id') {
                    idArr.push(proj[i]['id']);
                }
            }
        }
        return idArr;
    }

    right() {

        if (this.id === 101) {
            let pos = 1;
            console.log(pos + ' ' + this.projIds[pos]);
            window.location.href = '#' + this.projIds[pos];
            this.id = this.projIds[pos];
            return;
        }
        if (this.id === this.projIds[this.length]) {
            let pos = 0;
            console.log(pos + ' ' + this.projIds[pos]);
            window.location.href = '#' + this.projIds[pos];
            this.id = this.projIds[pos];
            return;
        }

        for (let i = 0; i <= this.length; i++) {
            if (this.id === this.projIds[i]) {
                let pos = i + 1;
                console.log(pos + ' ' + this.projIds[pos]);
                window.location.href = '#' + this.projIds[pos];
                this.id = this.projIds[pos];
                return;
            }
        }

    }

    left() {
        if (this.id === 101) {
            let pos = this.length;
            console.log(pos + ' ' + this.projIds[pos]);
            window.location.href = '#' + this.projIds[pos];
            this.id = this.projIds[pos];
            return;
        }
        if (this.id === this.projIds[this.length]) {
            let pos = this.length - 1;
            console.log(pos + ' ' + this.projIds[pos]);
            window.location.href = '#' + this.projIds[pos];
            this.id = this.projIds[pos];
            return;
        }

        for (let i = 0; i <= this.length; i++) {
            if (this.id === this.projIds[i]) {
                let pos = i - 1;
                console.log(pos + ' ' + this.projIds[pos]);
                window.location.href = '#' + this.projIds[pos];
                this.id = this.projIds[pos];
                return;
            }
        }


    }

}

// carosel - 

let trl = new Carosel();
// console.log(trl.getIds());
$("#lB").click(function () {
    trl.left();
    $(".proInner").css("animation", "slideleft 0.5s ease-in-out");
    let interval = setInterval(function () {
        $(".proInner").css("animation", "none");
        clearInterval(interval);
    }, 500);
});

$("#rB").click(function () {
    trl.right();
    $(".proInner").css("animation", "slideRight 0.5s ease-in-out");
    let interval = setInterval(function () {
        $(".proInner").css("animation", "none");
        clearInterval(interval);
    }, 500);
});



