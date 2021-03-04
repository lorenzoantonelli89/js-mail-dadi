// primo esercizio mail e esercizio dadi che funziona solo se la mail è corretta.

var myCheckEmail = document.getElementById('checkmail');
var myPlayGame = document.getElementById('playgame')

var emailAccepted = ["lorenzo.antonelli89@gmail.com", "alessandro.venti@gmail.com", "martino.scalvini@gmail.com", "olga.demina@gmail.com", "gianluca.lomarco@gmail.com"];
var emailReq = prompt("Scrivi la tua email");
var emailAccessoConsentito = false;

for (var i = 0; i < emailAccepted.length; i++) {
  if (emailAccepted[i] == emailReq) {
    emailAccessoConsentito = true;
    break;
  }
}

if (emailAccessoConsentito) {
  console.log("Congratulazioni la mail " + emailReq + " è corretta, preparati a giocare.");
  myCheckEmail.innerHTML = "Congratulazioni la mail " + emailReq + " è corretta, preparati a giocare."
  var lorenzo = Math.ceil(Math.random() * 6);
  var pc = Math.ceil(Math.random() * 6);

  if (lorenzo > pc) {
          console.log("Lorenzo: " + lorenzo + " Computer: " + pc + " Lorenzo vince!");
          myPlayGame.innerHTML = "Lorenzo: " + lorenzo + " Computer: " + pc + " Lorenzo vince!"
        } else if (lorenzo == pc) {
          console.log("Lorenzo: " + lorenzo + " Computer: " + pc + " Pareggio!");
          myPlayGame.innerHTML = "Lorenzo: " + lorenzo + " Computer: " + pc + " Pareggio!"
        } else {
          console.log("Lorenzo: " + lorenzo + " Computer: " + pc + " Computer vince!");
          myPlayGame.innerHTML = "Lorenzo: " + lorenzo + " Computer: " + pc + " Computer vince!"
        }
}else {
  console.log("Non puoi giocare, la mail non è corretta.");
  myCheckEmail.innerHTML = "Non puoi giocare, la mail non è corretta."

}
