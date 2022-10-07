function pickRandom(){

   var sorteador = Math.round(Math.random()*1);

return sorteador;

};

var coroa = document.querySelector("button.coroa");
var cara = document.querySelector("button.cara");


function verificaCoroa(){
  if(pickRandom() === 0){
    alert("Parabéns! Você está com sorte!");
  } else{
    alert("Você não acertou, sinto muito...")
  }
};

function verificaCara(){
    if(pickRandom() === 1){
      alert("Parabéns! Você está com sorte!");
    } else{
      alert("Você não acertou, sinto muito...");
    }
  };

coroa.addEventListener("click",verificaCoroa);
cara.addEventListener("click",verificaCara);