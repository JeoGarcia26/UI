var span1 = document.getElementsByClassName("ch1")[0];
var span2 = document.getElementsByClassName("ch2")[0];
var span3 = document.getElementsByClassName("ch3")[0];
var span4 = document.getElementsByClassName("ch4")[0];

var ele1 = document.getElementsByClassName("c1")[0]       
var ele2 = document.getElementsByClassName("c2")[0]        
var ele3 = document.getElementsByClassName("c3")[0]        
var ele4 = document.getElementsByClassName("c4")[0] 

function ativarBtn(){
    if(sc == 0)
        document.getElementsByClassName("btnTop")[0].style.display = "none";
    else
        document.getElementsByClassName("btnTop")[0].style.display = "block";
}

function mostra1(){
    span1.style.background = "rgba(255, 255, 255, 0.5)";
    ele1.style.display="flex"        
    ele2.style.display = ele3.style.display = ele4.style.display="none"        
    span2.style.background = span3.style.background = span4.style.background = "transparent"     
}
function mostra2(){
    span2.style.background = "rgba(255, 255, 255, 0.5)";
    ele2.style.display="flex"        
    ele1.style.display = ele3.style.display = ele4.style.display = "none"        
    span1.style.background = span3.style.background = span4.style.background = "transparent"     
}

function mostra3(){
    span3.style.background = "rgba(255, 255, 255, 0.5)";
    ele3.style.display="flex"        
    span1.style.background = span2.style.background = span4.style.background = "transparent"     
    ele1.style.display = ele2.style.display = ele4.style.display="none"              
}

function mostra4(){
    span4.style.background = "rgba(255, 255, 255, 0.5)"; 
    span1.style.background = span2.style.background = span3.style.background = "transparent"     
    ele4.style.display="flex"       
    ele1.style.display = ele2.style.display = ele3.style.display="none"              
            
}
//Code to show or Hidden menu!

let btnShow = document.getElementsByClassName("btnShow")[0];
let listaElem = document.getElementById("lista");
let itensShow = document.getElementById("itensShow");
let botoes = document.getElementsByClassName("oneTouch");
btnShow.addEventListener("click",()=>{
    if(itensShow.style.display=="flex"){
        itensShow.style.display = "none";
    }
    else{
        itensShow.style.display = "flex";
    }
})
botoes.forEach((bt) =>{
    bt.addEventListener("click", oculta);
});
function oculta(){
    itensShow.style.display ="none";
}


