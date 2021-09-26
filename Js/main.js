
function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //console.log( document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}





function redirecionar(){
    //window.location.href ="https://beerorcoffee.com/";
    window.open ("https://beerorcoffee.com/");

}

function trocar(){
    alert( "Troca texto");

}

/*
function soma (n1, n2){
    return n1 + n2;
}
var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true;
    }else{
        validar = false
    }
    return validar;
}
var idade =prompt("Qual a sua idade");
validaIdade(idade);
console.log(validaIdade(idade));
*/



/*
var d =new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth());
Essa é outra estrutura de repetição com for
var count;
for(count=0; count <= 5; count++){
     alert(count)
}
*/


/*Apresenta um laço de repetição
var count =0;
while (count <= 5){
    console.log(count);
    alert(count);
    count  ++;
}
*/



/*var idade = prompt("Qual a sua idade");Faz uma pergunta ao usuário
if(idade >= 14){
    alert("Maior de idade");
}else{
    alert("menor de idade")
};
*/



/*
var frutas = [{nome:"maça", cor:"vermelho" } , { nome:"uva", cor:"roxa"}]
console.log(frutas);
alert (frutas[1].nome);
*/



/* Apresenta um dicionário. Com nome e cor 
var fruta = {nome:"maça", cor:"vermelho"}
console.log(fruta);
alert (fruta.cor)
*/


//var lista =["maça", "pêra", "laranja"];



/*
console.log(lista);
console.log(lista.join(" - ")); Altera o espaçamente entre os itens da lista 
console.log(lista.toString()); Apresenta a lista de modo "String" de texto
console.log(lista.reverse());   O item adicionado por ultimo passa para o primeiro da lista
console.log(lista.length); "length" Mostra a quantidade de itens contidos na lista 
*/


/*
lista.pop("uva"); Retirar um item da lista
lista.push("uva"); Adicionar intem a lista 
alert(lista[1]); Mostra como alerta um item da lista
*/



/*
var nome = "Diego Henrique "; Declaraçãoes de Variáveis
var n1 =14;
var n2 =10;
var frase = "Japão é o melhor time do mundo";
alert( nome + " tem " + idade + " anos" );
alert(idade + idade2);
console.log(nome); Apresenta no Console o nome da variável
console.log(n1 * n2);efetua a multiplicação de variáveis 
console.log(lista.toLowerCase()); Apresenta um erro que tem a ser corrigido
alert(frase.replace("Japão", "Brasil")); "replace"Troca um nome ja existente no alert
*/