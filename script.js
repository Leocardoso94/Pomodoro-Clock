var num, 
num2 = 0,
operacao=[], txt = "",
dot = false,
view = "",
conta = 0,
resultado = 0;
$(document).ready(function() {
 function clear() {
   $("h4").text("0");
   txt = "";
   dot = false;
 }
 function operacoes() {
   conta++;
   if (conta>=2){
     calcular();
     console.log(num2);
   }else{
     num2 = $("h4").text(); 
   }
   view += txt + operacao[operacao.length - 1];
   clear(); 
   $('p').text(view); 
 }
 function calcular() { 
  var n = 1;
  if(conta >= 2){
    var n =2;
  }
  num = Number(txt);
  num2 = Number(num2);
  if (operacao[operacao.length - n] == "+") {
   resultado = (num + num2);
 }
 if (operacao[operacao.length - n] == "/") {
   if (num === 0) {
     resultado = ("Impossível");
   } else {
     resultado = (num2 / num);
   }
 }
 if (operacao[operacao.length - n] == "X") {
   resultado = (num2 * num);
 }
 if (operacao[operacao.length - n] == "-") {
   resultado = (num2 - num);
 }
 $("h4").text(resultado);
 num2 = resultado;
}
$(".btn").on("click", function() {
 switch ($(this).text()) {
   case "1":
   case "2":
   case "3":
   case "4":
   case "5":
   case "6":
   case "7":
   case "8":
   case "9":
   case "0":
   num = $(this).text();
   txt += num;
   $("h4").text(txt);
   break;
   case "AC":
   case "CE":
   clear();
   $('p').text("");
   operacao = [];
   txt = "";
   view = "";
   num = 0;
   resultado = 0;
   num2 = 0;
   conta = 0;
   sum = false;
   break;
 }
});
$(".btnDot").on("click", function() {
 if (dot === false) {
   txt = $("h4").text();
   txt += ".";
   dot = true;
   $("h4").text(txt);
 }
});
$(".btnSum").on("click", function() {
 operacao.push("+");
 operacoes();
});
$(".btnSub").on("click", function() {
 operacao.push("-");
 operacoes();
});
$(".btnMult").on("click", function() {
 operacao.push("X");
 operacoes();
});
$(".btnDiv").on("click", function() {
 operacao.push("/");
 operacoes();
});
$(".btnIgual").on("click", function() { 
 console.log(num2);
 console.log("num "+num);
 view +=txt;
 $('p').text(view);
 conta = 0;
 calcular();  
});
});