console.log("olá mundo");

document.write("Hello world:");

var mensagem = "olá mundo";
console.log(mensagem);

document.querySelectorAll(".class")[0]

function mostraAlert() {
Alert('Funciona!');
}

var	botao	=	document.querySelector("#botaoEnviar");

var textoInteiro = "10";
var inteiro = parseInt(textoInteiro);

var	textoFloat	=	"10.22";
var	float	=	parseFloat(textoFloat);



// String com string
var s1 = "Caelum";
var s2 = "Inovação";
console.log(s1 + s2);

// String	com	outro	tipo	de	dado

var	num1	=	2;
var	num2	=	3;
var	nome	=	"Caelum"
//	O	que	ele	imprimirá?
//	Exemplo	1:
console.log(num1	+	nome	+	num2);	//	imprime	2Caelum3
//	Exemplo	2:
console.log(num1	+	num2	+	nome);	//	imprime	5Caelum
//	Exemplo	3:
console.log(nome	+	num1	+	num2);	//	imprime	Caelum23
//	Exemplo	4:
console.log(nome	+	(num1	+	num2));	//	imprime	Caelum5
//	Exemplo	5:
console.log(nome	+	num1	*	num2);	//	imprime	Caelum6
//	A	multiplicação	tem	precedência
