
let progressline =0;

function clicsbtn1(){
	progressline=progressline+1;	
    progress(progressline);
}
function clicsbtn2(){
	progressline=progressline+3;
    progress(progressline);
}
function clicsbtn3(){
	progressline=progressline+7;
    progress(progressline);
}


function progress(prog){
if (prog>100) {prog=100}	
$(".progress-bar").attr("style", "width: " + prog + "%");
}

function init() {  
$(".progress-bar").attr("style", "width: 0%");  
}

$(document).ready(init); 