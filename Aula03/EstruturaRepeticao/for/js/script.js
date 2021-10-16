function for1(){

    for(var i = 1 ; i <= 10 ; i++ )
        console.log(i);
}

function for2(){

    var numero = prompt("Digite um valor para a tabuada");

        for(var p = 1 ; p <= 10; p++){

            console.log(numero + " x " + p + " = " + (numero*p)) ;
            //exibir o resoltado na página html, vamos  usar uma div como base

            document.getElementsByTagName("div")[0].innerHTML+=numero + " x " + p + " = " + (numero*p)+"<br>";
        
        }

}

function for3(){

// vamos fazer uma referencia a tag body para criar
//novos elementos html dentro dela

var body = document.body;
//vamos construir uma tag h1 e adicioná-la no body
var h1 = document.createElement("h1");
//vamos adiconar um texto ao h1
h1.innerHTML = "Estrutura de Repetição";
//adiconar o h1 ao body
body.appendChild(h1);

for(var item = 1 ; item <= 20 ; item++){

        var div = document.createElement("div");

        //adicionar estilo de formatação as divs
        var canal =11*item;

        div.style.backgroundColor="rgb(100,100,"+canal+")";
        div.style.width=(100*item)+ "px";
        div.style.height="100px";
        div.style.margin="10px";

        //adicionar a div ao body
        body.appendChild(div);
}














}












// 2x1=2
// 2x2=4
// 2x3=6