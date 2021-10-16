var cor = prompt("Digite uma cor, que pode ser \n Vermelho, Verde, Azul, Amarelo, Preto, Cinza");

var fundo = "";

/*
Para transformar os caracteres em maiúsculo ou minúsculo podemos usar os seguintes
comandos:
toUpperCase() -> para letras maiúsculas
toLowerCase() -> para  letras minúsculas
*/
cor = cor.toLowerCase();


switch(cor){
    case "vermelho":
        fundo="red";
        break;
    
    case "verde":
        fundo="green";
        break;

    case "azul":
        fundo="blue";
        break;   

    case "amarelo":
        fundo="yellow";
         break;   

case "preto":
        fundo="black";
        break; 


case "cinza":
        fundo="gray";
        break; 

default:
    fundo="white";
    break;
    }   
document.body.style.backgroundColor=fundo; 

