function verif() {
  event.preventDefault();

  if (document.f.firstname.value == "") {
    alert("Veuillez entrer votre nom!");
    return;
  }
  if (document.f.email.value.indexOf("@") == -1) {
    alert("veuillez saisir une adresse électronique valide!");
    return;
  }

  if (document.f.address.value == "") {
    alert("Veuillez entrer votre adresse!");
    return;
  }
  if (document.f.city.value == "") {
    alert("Veuillez entrer votre ville!");
    return;
  }
  if (document.f.state.value == "") {
    alert("Veuillez entrer l'etat de votre ville!");
    return;
  }
  if (document.f.tel.value.length != 8) {
    alert("Veuillez entrer un numero valide!");
    return;
  }
  if (!/^\d+$/.test(document.f.tel.value)) {
    alert("Veuillez entrer un numero valide!");
    return;
  }
  if (document.f.cardname.value == "") {
    alert("Veuillez entrer le nom sur la carte!");
    return;
  }
  if (document.f.expmonth.value == "") {
    alert("Veuillez entrer le mois de l'expiration de votre carte!");
    return;
  }
  alert("Votre commande est effectuée avec succes.");
}

function verifNoPayment() {
  event.preventDefault();
  if (document.f.firstname.value == "") {
    alert("Veuillez entrer votre nom!");
    return;
  }
  if (document.f.email.value.indexOf("@") == -1) {
    alert("veuillez saisir une adresse électronique valide!");
    return;
  }

  if (document.f.address.value == "") {
    alert("Veuillez entrer votre adresse!");
    return;
  }
  if (document.f.city.value == "") {
    alert("Veuillez entrer votre ville!");
    return;
  }
  if (document.f.state.value == "") {
    alert("Veuillez entrer l'etat de votre ville!");
    return;
  }
  if (document.f.tel.value.length != 8) {
    alert("Veuillez entrer un numero valide!");
    return;
  }
  if (!/^\d+$/.test(document.f.tel.value)) {
    alert("Veuillez entrer un numero valide!");
    return;
  }
  alert(
    "Votre commande est effectuée avec succes. Un livreur vous appelera dans un délai de 48H"
  );
}

// Aficher totlal
let params = new URL(document.location).searchParams;
let total = params.get("total");
document.querySelector("#total").innerHTML = `<h2>Total : ${total}  DT</h2>`;
