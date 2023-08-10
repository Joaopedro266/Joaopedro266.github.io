function calcular() {
   var inputmedia = parseFloat(document.getElementById("media").value);
   var inputvitorias = parseFloat(document.getElementById("vitorias").value);
   var resultadinho = document.getElementById("resultado");
   if(inputmedia > 28) {
      resultadinho.innerText = "Va fazer algo da vida vagabundo";
   }
   else{
      var mediazinha = inputvitorias / inputmedia;
         if (mediazinha < 0.5){
            resultadinho.innerText = "Sua media deu menos que 0.5 logo voce é analfabeto, anta, azêmola, bronco, cavalgadura, estulto, estúpido, idiota, ignorante, imbecil, inepto, lerdaço, néscio, palerma, parvo, tapado, teimoso, tolo, toupeira, armação de serrador";
         }
         else {
            resultadinho.innerText = "Sua média de vitórias é = " + mediazinha.toFixed(1) + " de 1.0 por semana";
         }
   }

}
   
function botaocampeao(nome) {
   document.getElementById("resultadoperso").innerText = "Seu resultado de personalidade é = " + nome;
}
   
