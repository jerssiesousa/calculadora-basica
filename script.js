function digitar(x){

    let input=document.querySelector("[name='txt1']");
    input.value += x ;

}

function result(){
    let input=document.querySelector("[name='txt1']");
    let expressao = eval(input.value);
    input.value = expressao
}
function limpar(){
    console.log('Limpar')
}