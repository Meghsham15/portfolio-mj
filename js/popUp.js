import projects from "./popPro.js";
let length = projects.length;

for (let i = 0;i<length;i++){
    $("#"+projects[i].id).click(function(){
        $("#proPop"+projects[i].id).removeClass("display");
    });
    $("."+projects[i].id).click(function(){
        if(projects[i].id === 104){
            $("#proPopB"+'105').click();
        }
        if(projects[i].id === 105){
            $("#proPopB"+'104').click();
        }
        $("#proPop"+projects[i].id).removeClass("display");
    });
    $("#proPopB"+projects[i].id).click(function(){
        $("#proPop"+projects[i].id).addClass("display");
    });

}



