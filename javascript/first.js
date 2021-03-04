// primo esercizio mail

var emailAccepted = ["lorenzo.antonelli89@gmail.com", "alessandro.venti@gmail.com", "martino.scalvini@gmail.com", "olga.demina@gmail.com", "gianluca.lomarco@gmail.com"];
var emailReq = prompt("Scrivi la tua email");

for (var i = 0; i < emailAccepted.length; i++) {
  var email
  if (emailAccepted[i] == emailReq) {
    console.log("La mail " + emailAccepted[i] + " è corretta.");
  }else {
    console.log("La mail non è corretta.");
  }
}

// secondo esercizio i Dadi

var lorenzo = Math.round(Math.random() * (6-1) + 1);
var pc = Math.round(Math.random() * (6-1) + 1);

if (lorenzo > pc) {
        console.log("Lorenzo: " + lorenzo + " Computer: " + pc + " Lorenzo vince!");

      } else if (lorenzo == pc) {
        console.log("Lorenzo: " + lorenzo + " Computer: " + pc + " Pareggio!");

      } else {
        console.log("Lorenzo: " + lorenzo + " Computer: " + pc + " Computer vince!");
      }
