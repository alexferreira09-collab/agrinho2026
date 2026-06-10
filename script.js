// CONTADOR
let contador = 0;

const contadorElemento = document.getElementById("contador");

document
.getElementById("contadorBtn")
.addEventListener("click", function(){

    contador++;

    contadorElemento.textContent = contador;

});

// MODO ESCURO
document
.getElementById("darkModeBtn")
.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});

// AUMENTAR FONTE
let tamanhoFonte = 16;

document
.getElementById("fonteBtn")
.addEventListener("click", function(){

    tamanhoFonte += 2;

    document.body.style.fontSize = tamanhoFonte + "px";

});

// BOTÃO VOLTAR AO TOPO
const topoBtn = document.getElementById("topoBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topoBtn.style.display = "block";

    }else{

        topoBtn.style.display = "none";

    }

};

// VOLTAR AO TOPO
topoBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});