const skill=document.getElementById("skill");
const exp=document.getElementById("exp");
const edu=document.getElementById("edu");
const sk=document.getElementById("sk");
const ex=document.getElementById("ex");
const eu=document.getElementById("eu");

function check(){
    console.log("hello");
}

sk.onclick=()=>{
    skill.hidden=false;
    exp.hidden=true;
    edu.hidden=true;
};

ex.onclick=()=>{
    skill.hidden=true;
    exp.hidden=false;
    edu.hidden=true;
};

eu.onclick=()=>{
    skill.hidden=true;
    exp.hidden=true;
    edu.hidden=false;
};