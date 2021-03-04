// primo esercizio mail

var emailAccepted = ["lorenzo.antonelli89@gmail.com", "alessandro.venti@gmail.com", "martino.scalvini@gmail.com", "olga.demina@gmail.com", "gianluca.lomarco@gmail.com"];
var email = prompt("Scrivi la tua email");

for (var i = 0; i < emailAccepted.length; i++) {
  if (emailAccepted[i] == email) {
    console.log("La mail " + emailAccepted[i] + " è corretta.");
  }else {
    console.log("La mail non è corretta.");
  }
}
