// pre loader - 
document.addEventListener("DOMContentLoaded", function () {
    // Hide preloader after 2 seconds (2000 milliseconds)
    setTimeout(function () {
        document.getElementById("loadingIndicator").style.display = "none";
    }, 2000);
});


$(".midContainer").scroll(function () {
    let scrollVal = Math.floor($(".midContainer").scrollTop());
    // console.log(scrollVal);
    if (scrollVal > 0 && scrollVal < 453) {
        $("footer ul li ").removeClass("footer-click");
        $("footer ul li ").addClass("footer");
        $("footer ul li a").removeClass("navigator-click");
        $("footer ul li a").addClass("navigator");
        $("#1 a").removeClass("navigator");
        $("#1 a").addClass("navigator-click");
        $("#1").removeClass("footer");
        $("#1").addClass("footer-click");
        $(".downScrollL,.downScrollR").css("transform", "rotate(90deg)");
    }
    if (scrollVal > 453 && scrollVal < 945) {
        $("footer ul li ").removeClass("footer-click");
        $("footer ul li ").addClass("footer");
        $("footer ul li a").removeClass("navigator-click");
        $("footer ul li a").addClass("navigator");
        $("#2 a").removeClass("navigator");
        $("#2 a").addClass("navigator-click");
        $("#2").removeClass("footer");
        $("#2").addClass("footer-click");
        $(".downScrollL").css("transform", "rotate(90deg)");
        $(".downScrollR").css("transform", "rotate(270deg)");
    }
    if (scrollVal > 945 && scrollVal < 1120) {
        $("footer ul li ").removeClass("footer-click");
        $("footer ul li ").addClass("footer");
        $("footer ul li a").removeClass("navigator-click");
        $("footer ul li a").addClass("navigator");
        $("#3 a").removeClass("navigator");
        $("#3 a").addClass("navigator-click");
        $("#3").removeClass("footer");
        $("#3").addClass("footer-click");
        $(".downScrollL,.downScrollR").css("transform", "rotate(270deg)");

    }
});
$(".footer").click(function () {
    $("footer ul li ").removeClass("footer-click");
    $("footer ul li ").addClass("footer");
    $("footer ul li a").removeClass("navigator-click");
    $("footer ul li a").addClass("navigator");

    // $(".navigator").addCLass("navigator");
    let id = $(this).attr("id");
    $("#" + id + " a").removeClass("navigator");
    $("#" + id).removeClass("footer");
    $("#" + id).addClass("footer-click");
    $("#" + id + " a").addClass("navigator-click");

});

$(".img").mouseenter(function () {
    $(".last1").addClass("last-1");
    $(".last2").addClass("last-2");
    $(".name").addClass("name-1");
});

$(".img").mouseleave(function () {
    $(".last1").removeClass("last-1");
    $(".last2").removeClass("last-2");
    $(".name").removeClass("name-1");
});
$(".let").mouseenter(function () {
    $(this).css("animation", "letter 0.6s ease-out 1 alternate");
});
setInterval(function () {
    $(".let").css("animation", "none");
}, 2000);

// Time ----- 

function countDown() {
    let dt = new Date();
    let hrs = dt.getHours();
    let ap = "";
    if (dt.getHours() >= 12) {
        ap = "pm";
        hrs = dt.getHours() - 12;
    }
    else {
        ap = "am";
        hrs = dt.getHours();
    }
    let mins = dt.getMinutes();
    let secs = dt.getSeconds();
    $("#time").text(hrs + ":" + mins + ":" + secs + " " + ap);
}
setInterval(countDown, 1000);

// Date ------
function getDate() {
    var options = {
        day: "numeric"
    };
    const today = new Date();
    const date = today.toLocaleDateString("en-US", options);
    return date;
}
function getDay() {
    var options = {
        weekday: "long"
    };
    const today = new Date();
    const date = today.toLocaleDateString("en-US", options);
    return date;
}
function getMonth() {
    var options = {
        month: "long"
    };
    const today = new Date();
    const date = today.toLocaleDateString("en-US", options);
    return date;
}
$("#date").text(getDay() + ", " + getDate() + " " + getMonth());

// Weather ----- 

fetch('https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=c931035e8ef7ccea5ad27c6b2a8f7f9b')
    .then(response => response.json())
    .then(data => {
        var temp = data["main"]["temp"];
        var des = data["weather"][0]["description"];
        const icon = data["weather"][0]["icon"];
        const iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        //  console.log(temp+des);
        //  console.log(icon);

        $(".deg").text(`Pune: ` + "  " + temp + ` °C`)
        $(".des").html(des + `<img src="` + iconurl + `" alt="">`)
    });

// Socialss ==== 
var id = "";
$(".social").mouseenter(function () {
    id = $(this).attr("id");
    $("#" + id + " a img").css("animation", "rot 0.6s ease-in-out");
    $("#" + id + " a img").css("transform", "scale(0.8)");
});

$(".social").mouseleave(function () {
    let id = $(this).attr("id");
    $("#" + id + " a img").css("animation", "none");
    $("#" + id + " a img").css("transform", "scale(1)");
});
social = ["instagram", "faceBook", "discord", "twitter"];

setInterval(function () {
    let i = Math.floor(Math.random() * 4);
    $("#" + social[i] + " a img").css("animation", "bnc 0.5s ease-in-out");
}, 1500);

setInterval(function () {
    $(".social a img").css("animation", "none");
}, 2200);

setInterval(function () {
    $("#login").css("animation", "pop 0.5s ease-in-out");
}, 3000);

setInterval(function () {
    $("#login").css("animation", "none");
}, 3700);

// Project section ------ 

$(".projectBox").scroll(function () {
    let scrollVal = $(".projectBox").scrollLeft();
    // console.log(scrollVal);
});
$("#lB").click(function () {
    let scrollVal = $(".projectBox").scrollLeft();
    scrollVal -= 522;
    $(".projectBox").scrollLeft(scrollVal);
    $(".proInner").css("animation", "slideleft 0.5s ease-in-out");
    let interval = setInterval(function () {
        $(".proInner").css("animation", "none");
        clearInterval(interval);
    }, 500);
});

$("#rB").click(function () {
    let scrollVal = $(".projectBox").scrollLeft();
    scrollVal += 522;
    $(".projectBox").scrollLeft(scrollVal);
    $(".proInner").css("animation", "slideRight 0.5s ease-in-out");
    let interval = setInterval(function () {
        $(".proInner").css("animation", "none");
        clearInterval(interval);
    }, 500);
});


// skills -----

$(".midContainer").scroll(function () {
    let scrollVal = Math.floor($(".midContainer").scrollTop());
    if (scrollVal > 280 && scrollVal < 903) {
        $("#fadeUp1,#fadeUp2,#fadeUp3").css("animation", "fadeUp 1s ease-in-out forwards");
        $("#fadeLeft1,#fadeLeft2,#fadeLeft3").css("animation", "fadeLeft 1s ease-in-out forwards");
        $("#fadeRight1,#fadeRight2,#fadeRight3").css("animation", "fadeRight 1s ease-in-out forwards");
        $(".skillsInner h1").css("animation", "fadeUpIn 1s ease-in-out forwards");
    } else {
        $("#fadeUp1,#fadeUp2,#fadeUp3").css("animation", "none");
        $("#fadeLeft1,#fadeLeft2,#fadeLeft3").css("animation", "none");
        $("#fadeRight1,#fadeRight2,#fadeRight3").css("animation", "none");
        $(".skillsInner h1").css("animation", "none");
    }

});

$(".midContainer").scroll(function () {
    let scrollVal = Math.floor($(".midContainer").scrollTop());
    // console.log(scrollVal);
    if (scrollVal > 900) {
        $(".projectsInner h1").css("animation", "fadeUpIn 1s ease-in-out forwards");
        $(".projectBox").css("animation", "popUpIn 1s ease-in-out forwards");
    } else {
        $(".projectsInner h1").css("animation", "none");
        $(".projectBox").css("animation", "none");
    }

});
// $(".hi").css("color","green");

// Project scroll button ---

$(".scrl").click(function () {
    $(".scrl").removeClass("scrlAct");
    $(this).addClass("scrlAct");
    $(".proInner").css("animation", "fadeUp 0.5s ease-in-out");
    let interval = setInterval(function () {
        $(".proInner").css("animation", "none");
        clearInterval(interval);
    }, 500);
});


$("#resume").click(function () {
    $("#resumeCon").removeClass("display");
});
$("#resumeD").click(function () {
    $("#resumeCon").addClass("display");
});

$("#resume").click(function () {
    $("#resumeCon").removeClass("display");
});
$("#resumeD").click(function () {
    $("#resumeCon").addClass("display");
});


$("#lB").click(function () {
    $("#left").css("filter", "invert(1)");
    $("#left").css("transform", "scale(0.8)");
    let interval = setInterval(function () {
        $("#left").css("filter", "invert(0.6)");
        $("#left").css("transform", "scale(1)");
        clearInterval(interval);
    }, 200);
});

$("#rB").click(function () {
    $("#right").css("filter", "invert(1)");
    $("#right").css("transform", "scale(0.8)");
    let interval = setInterval(function () {
        $("#right").css("filter", "invert(0.6)");
        $("#right").css("transform", "scale(1)");
        clearInterval(interval);
    }, 200);
});


// new code --- 
// login user - 
let loginBtn = document.getElementById('login');
let loginUser = document.getElementById('loginUser');
loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
});
loginUser.addEventListener('click', async (e) => {
    e.preventDefault();
    document.getElementById('loadingIndicator').style.display = 'block';
    let action = loginBtn.innerText.toLowerCase();
    await authenciate(action);
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById('loadingIndicator').style.display = 'none';
    $("#proPopB" + '105').click();
});

// register user - 
let registerUser = document.getElementById('registerUser');
registerUser.addEventListener('click', async (e) => {
    e.preventDefault();
    document.getElementById('loadingIndicator').style.display = 'block';
    let action = registerUser.innerText.toLowerCase();
    await authenciate(action);
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById('loadingIndicator').style.display = 'none';
    $("#proPopB" + '104').click();
});
// logout user - 

async function logoutUser(e) {
    document.getElementById('loadingIndicator').style.display = 'block';
    let action = e.innerText.toLowerCase();
    console.log(action);
    await authenciate(action);
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById('loadingIndicator').style.display = 'none';
}
// buttonC
// add comment - 
async function addChat(e) {
    document.getElementById('loadingIndicator').style.display = 'block';
    let action = e.innerText.toLowerCase();
    // console.log(action);
    await authenciate(action);
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById('loadingIndicator').style.display = 'none';
}



async function authenciate(action) {
    if (action) {
        let auth = new Auth(action);
        await auth.execute();
    } else {
        return 'error';
    }
    // console.log(action);
}

class Auth {
    constructor(action) {
        this.apiUrl = 'https://script.google.com/macros/s/AKfycbzP5Y2KhNxE3Al6xy2pVEfw4Qo31EU8uJkltRY6JSaa4gfWwClESaTAIbSvrWue5VEPKw/exec';
        this.action = action;
        this.username;
        this.password;
        this.isAuth = false;
        this.user;
        this.commentsArr = [];
    }

    async execute() {
        if (this.action === 'register') {
            if (await this.register()) {
                // this.displayComments();
                alert('Registration successfull you now can login to see comments')
                return;
            } else {
                alert('Try different username /password (it must containe some characters) ');
            }
        } else if (this.action === 'login') {
            if (await this.login()) {
                this.displayComments();
            } else {
                alert('Enter valid creadentials');
            }
        } else if (this.action === 'comment') {
            if (await this.addChat()) {
                this.displayComments();
            } else {
                alert("Error occured please login to add comment");
            }
        } else if (this.action === 'logout') {
            if (await this.logout()) {
                this.removeComments();
            } else {
                alert("Error occured");
            }
        }

    }

    removeComments() {
        let commentDiv = document.getElementById('comments');
        commentDiv.classList.remove('commentsLog');
        commentDiv.innerHTML = '';
        let rightContainer = document.getElementById('rightContainer');
        let logoutDiv = document.getElementById('logout');
        rightContainer.removeChild(logoutDiv);
        let loginDiv = document.createElement('div');
        loginDiv.className = 'login';
        let h3 = document.createElement('h3');
        h3.innerText = 'Login to see comments!';
        let btnDiv = document.createElement('div');
        btnDiv.className = 'btn';
        let form = document.createElement('form');
        let marqueeL = document.createElement('marquee');
        marqueeL.direction = 'right';
        marqueeL.innerText = '→';
        marqueeL.behavior = '';
        let button = document.createElement('button');
        button.id = 'login';
        button.innerText = 'Login';
        let marqueeR = document.createElement('marquee');
        marqueeR.direction = 'left';
        marqueeR.innerText = '←';
        marqueeR.behavior = '';
        form.appendChild(marqueeL);
        form.appendChild(button);
        form.appendChild(marqueeR);
        btnDiv.appendChild(form);
        loginDiv.appendChild(h3);
        loginDiv.appendChild(btnDiv);
        commentDiv.appendChild(loginDiv);


    }

    displayComments() {
        let commentDiv = document.getElementById('comments');
        commentDiv.classList.add('commentsLog');
        commentDiv.innerHTML = '';
        let cmt = document.createElement('div');
        cmt.id = 'cmt';
        let h3 = document.createElement('h3');
        h3.innerText = 'Keep the comments short and sweet';
        cmt.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.innerText = 'Welcome @' + this.username;
        let form = document.createElement('form');
        form.id = 'commentForm';
        let input = document.createElement('input');
        input.id = 'cUsername';
        input.type = 'hidden';
        input.value = this.username;
        let pass = document.createElement('input');
        pass.id = 'cPass';
        pass.type = 'hidden';
        pass.value = this.password;
        let textarea = document.createElement('textarea');
        textarea.cols = '30';
        textarea.rows = '2';
        textarea.id = 'commentInput';
        textarea.setAttribute('requried', 'true');
        let buttonDiv = document.createElement('div');
        buttonDiv.id = 'buttons';
        let buttonC = document.createElement('button');
        buttonC.id = 'buttonC';
        buttonC.setAttribute('onclick', 'addChat(this)');
        buttonC.innerText = 'Comment';
        let buttonR = document.createElement('button');
        buttonR.id = 'buttonR';
        buttonR.type = 'reset';
        buttonR.innerText = 'Reset';
        buttonDiv.appendChild(buttonC);
        buttonDiv.appendChild(buttonR);
        form.appendChild(input);
        form.appendChild(pass);
        form.appendChild(textarea);
        form.appendChild(buttonDiv);
        commentDiv.appendChild(cmt);
        commentDiv.appendChild(h4);
        commentDiv.appendChild(form);
        for (let i = 0 ; i <this.commentsArr.length; i++) {
            let comment = this.commentsArr[i];
            let postDiv = document.createElement('div');
            postDiv.className = 'post';
            let postTableDiv = document.createElement('div');
            postTableDiv.className = 'comment postTable';
            let p = document.createElement('p');
            p.innerText = comment.comment;
            let nameDiv = document.createElement('div');
            nameDiv.className = 'name';
            nameDiv.innerText = '- ' + comment.username;
            postTableDiv.appendChild(p);
            postTableDiv.appendChild(nameDiv);
            postDiv.appendChild(postTableDiv);
            commentDiv.appendChild(postDiv);
        }
        let rightContainer = document.getElementById('rightContainer');
        let outerDiv = document.createElement('div');
        outerDiv.id = 'logout';

        // Create an anchor element with an href attribute
        let anchorElement = document.createElement('a');
        anchorElement.id = 'logoutUser';

        // Create the inner div with class 'logout'
        let innerDiv = document.createElement('div');
        innerDiv.className = 'logout';
        innerDiv.id = 'logoutUser';
        innerDiv.setAttribute('onclick', 'logoutUser(this)');

        // Set the text content of the inner div
        innerDiv.textContent = 'Logout';

        // Append the inner div to the anchor element
        anchorElement.appendChild(innerDiv);

        // Append the anchor element to the outer div
        outerDiv.appendChild(anchorElement);
        rightContainer.append(outerDiv);
        var myForm = document.getElementById("commentForm");

        myForm.addEventListener("submit", function (event) {
            // Prevent the default form submission
            event.preventDefault();
        });

    }

    async logout() {
        this.username = '';
        this.password = '';
        this.isAuth = false;
        this.user = '';
        this.commentsArr = [];
        return true;
    }

    async addChat() {
        this.username = document.getElementById('cUsername').value;
        this.password = document.getElementById('cPass').value;
        let comment = document.getElementById('commentInput');
        let data = {
            action: 'addChat',
            username: this.username,
            password: this.password,
            chat: comment.value
        };
        let jres = await this.makePostRequest(data);
        let res = JSON.parse(jres);
        // comment.value = ' ';
        if (res.status) {
            this.user = res.data;
            this.commentsArr = res.comments;
            return true;
        } else {
            return false;
        }

    }

    isAuthenciated() {
        let data = {
            action: 'auth',
            username: this.username,
            password: this.password,
        };
        let res = JSON.parse(this.makePostRequest(data));
        if (res.status) {
            this.user = res.data;
            // this.fetchComments();
            return true;
        } else {
            return false;
        }

    }

    async login() {
        this.username = document.getElementById('usernameL').value;
        this.password = document.getElementById('passwordL').value;
        let data = {
            action: 'login',
            username: this.username,
            password: this.password,
        };
        let jres = await this.makePostRequest(data);
        let res = JSON.parse(jres)
        if (res.status) {
            this.isAuth = true;
            this.user = res.data;
            this.commentsArr = res.comments;
            return true;
        } else {
            return false;
        }

    }

    async register() {
        this.username = document.getElementById('usernameR').value;
        this.password = document.getElementById('passwordR').value;
        const alphabetRegex = /[a-zA-Z]/;
        let passCheck = alphabetRegex.test(this.password);
        if(!passCheck){
            return false;
        }
        if(this.username==='' || this.password ==='' ){
            return false;
        }
        let data = {
            action: 'register',
            username: this.username,
            password: this.password,
        };
        let jres = await this.makePostRequest(data);
        let res = JSON.parse(jres);
        if (res.status) {
            this.isAuth = true;
            this.user = res.data;
            this.commentsArr = res.comments;
            return true;
        } else {
            return false;
        }

    }

    getComments() {
        return this.commentsArr;
    }

    async fetchComments() {
        let data = {
            action: 'comments',
            username: this.username,
            password: this.password,
        };
        let jres = await this.makePostRequest(data);
        let res = JSON.parse(jres);
        if (res.status) {
            this.commentsArr = res.data.comments;
            return true;
        } else {
            console.log("error getting comments");
            return false;
        }
    }

    handleErrors(response) {
        if (!response.status) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    async makeGetRequest() {
        return await fetch(this.apiUrl)
            .then(this.handleErrors)
            .then(data => {
                this.display(JSON.stringify(data));
                console.log('GET Request Successful:', data);
            })
            .catch(error => {
                console.error('GET Request Failed:', error);
            });
    }

    async makePostRequest(postData) {
        return await fetch(this.apiUrl, {
            method: 'POST',
            contentType: "application/json", // Set the content type if applicable
            // payload: JSON.stringify(postData),
            header: {
                'contentType': "text/plain;charset=utf-8",
            },
            body: JSON.stringify(postData),
        })
            .then(this.handleErrors)
            .then(data => {
                // this.display(JSON.stringify(data));
                console.log('POST Request Successful:', data);
                return JSON.stringify(data);
            })
            .catch(error => {
                console.error('POST Request Failed:', error);
            });
    }
}


// async function trail() {
//     let auth = new Auth('login');
//     let res = await auth.execute();
//     console.log(res);
// }
// trail();