var GetStartBtn = document.getElementById("getstart-btn");
var InitialPos = document.getElementsByTagName('html')[0].scrollTop;
var FinalPos = document.getElementsByClassName('games_section')[0].offsetTop;

//Intervals
function Scroll(){
    document.getElementsByTagName('html')[0].scrollTop = lerp(document.getElementsByTagName('html')[0].scrollTop, FinalPos, 0.05) + 1;
}

//events...
GetStartBtn.onclick = function(){
    InitialPos = document.getElementsByTagName('html')[0].scrollTop;
    FinalPos = document.getElementsByClassName('games_section')[0].offsetTop;
    
    setInterval(Scroll, 1000/60);
    setTimeout(StopIntervals, 2000);
}

function lerp(a, b, t){
    return (1-t)*a+b*t;
}

function StopIntervals(){
    for(let i=0; i<100; i++){
        clearInterval(i);
    }
}