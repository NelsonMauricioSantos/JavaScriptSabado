function calculoCPF(){

    var cpf = prompt("Digite o seu CPF");

    /* 
    A variavel cpf9 irá armazernar os 9 primeiros digitos do cpf para o 
    cálculo. Para capturar os 9 primeiros estamos usando a função substring e passando para ela 2 parâmetros, 
    que são a posição inicialda captura de dadose a quantidade de dados que devem ser capturados
    */

    //String é uma cadeia de caracteres

    var cpf9 = cpf.substring(0,9);

    var peso10 = 10;
    var peso11 = 11;

    var resultado = 0;
    var resto = 0;

   for(var i = 0; i < 9;  i++){
   
    //console.log(cpf9[i]);
    resultado += cpf9[i] * peso10;
    peso10--;
}

console.log(resultado);

resto = resultado % 11;

if (resto < 2){

    cpf9+=0;
}
 else{

    cpf9+=(11-resto);
 }

 resultado = 0;



 for(var i = 0; i < 10;  i++){
   
    //console.log(cpf9[i]);
    resultado += cpf9[i] * peso11;
    peso11--;
}

console.log(resultado);

resto = resultado % 11;

if (resto < 2){

    cpf9+=0;
}
 else{

    cpf9+=(11-resto);
 }

 console.log(cpf9);

 if(cpf != cpf9){

    alert("CPF INVÁLIDO");
 }
 else{

    alert("CPF CORRETO");
 }


}