function verificar () {
   var resultado = document.getElementById('resultado').innerHTML
   if (resultado.length <= 0){
    document.getElementById('resultado').innerHTML = 0
   }
}
function parar() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById = resultado.length
    verificar()
}
function insert(num){
    
    var resultado = document.getElementById('resultado').innerHTML

    if (resultado.length <= 13){
        if(resultado == 0){
        resultado = ''
       }
        document.getElementById('resultado').innerHTML = resultado + num
    } 
    verificar()
}

function apagar(){
    document.getElementById('resultado').innerHTML = '0';
    verificar()
}
function deletar(){
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado >= 1){
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
    verificar()
}

function calcular(){
    try{
    var resultado = document.getElementById('resultado').innerHTML
  if (resultado.length >= 1){
    document.getElementById('resultado').innerHTML = eval(resultado)
  }verificar()}
    catch(error){
        resultado = 0
    }}
