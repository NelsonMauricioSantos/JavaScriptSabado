// O comando abaixo diz que o documento html deve obter a tag h1 e
// mudar o seu texto para "mudei o texto"
// document.getElementsByTagName("h1")[0].innerHTML="mudei o texto";


//nome = prompt("Digite o seu nome");
//console.log(nome);
//document.getElementsByTagName("h1")[0].innerHTML=nome;


/*  
var é utilizado para declaração de variáveis globais,
enquanto que o let é utilizado para declarações de forma de bloco.

Se você fizer um a declaração de variável usando um var dentro de um if,for, while...
esta variável será vista fora desta estrutura. já a declaração com let dentro destes
blocos não será vistas fora deles. Mas se você fizer uma declaração usando let ou var fora
dos blocos, estas serrão vistas por todo o código.




var idade = 10;
let email = "joão@terra.com.br";


if(10==10){
    
    var nome = "Pedro";
    let sobrenome = "Oliveira";
    
}

console.log(nome);
console.log(sobrenome);
*/

//document.getElementById("saida").innerHTML="Mensagem";
//document.getElementById("saida").style.backgroundColor="yellow";
//document.getElementById("saida").style.color="red";



var tag = document.getElementById("saida");

tag.innerHTML  = "Novo texto";
tag.style.backgroundColor = "green";
tag.style.color = "yellow";