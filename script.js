const button1 = document.getElementById("ligando");
const button2 = document.getElementById("desligando");
const lamp = document.getElementById("lapagada");

function quebrada (){
    return lamp.src.indexof("quebrada") > -1;
}


function ligar (){

    if(!quebrada ()){
        lamp.src ="img/1 lampada acesa.png";
    }
   
}


function desligar (){
    if(!quebrada ()){
        lamp.src = "img/2 lampada apagada.png";
    }
    
}

function quebrada (){
    lamp.src ="img/3 lampada quebrada.png";
}


button1.addEventListener("click", ligar)
button2.addEventListener("click", desligar)
lamp.addEventListener("dblclick",quebrada)