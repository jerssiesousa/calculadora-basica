let valor=document.querySelector("[name='txt1']");
// variável para pegar o valor do visor


function digitar(x){

    valor.value += x ;

};
// Funcão pra digitar no próprio DOM


function result(){
    
    let expressao = eval(valor.value);
    valor.value = expressao
};
// Função para pegar o valor no visor(input) passar a string pra uma expressão com operadores e números

function limpar(){

    valor.value = ""
    
};
// Função para limpar o visor

const botao = document.getElementsByName("botao");
const form = document.querySelector("form");
const body = document.querySelector("body");
const darkModeClass = 'dark-mode';
// Constantes para produzir o modo escuro

function changeMode() {
    valor.classList.toggle(darkModeClass);
    form.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    // toggle é usado para retirar e colocar a classe dos elementos que recebem cor

    for(let i = 0; i < botao.length; i++){
        botao[i].classList.toggle(darkModeClass);
    };
    //for usado para pegar todos o elementos input de type:button
}
