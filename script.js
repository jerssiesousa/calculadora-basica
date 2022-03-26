let input=document.querySelector("[name='txt1']");

function digitar(x){

    input.value += x ;

}

function result(){
    
    let expressao = eval(input.value);
    input.value = expressao
}
function limpar(){

    input.value = ""
    
}