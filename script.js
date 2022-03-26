let valor=document.querySelector("[name='txt1']");

function digitar(x){

    valor.value += x ;

};

function result(){
    
    let expressao = eval(valor.value);
    valor.value = expressao
};

function limpar(){

    valor.value = ""
    
};

const botao = document.getElementsByName("botao");
const form = document.querySelector("form");
const body = document.querySelector("body");
const darkModeClass = 'dark-mode';


function changeMode() {
    valor.classList.toggle(darkModeClass);
    form.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);

    for(let i = 0; i < botao.length; i++){
        botao[i].classList.toggle(darkModeClass);
    };
}
