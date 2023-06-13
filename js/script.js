// Definisco le città e la distanza in km 

const cities = {
  springfield: {km: 10},
  shelbyville: {km: 50},
  san_andreas: {km: 100},
  sin_city: {km: 150},
  quahog: {km: 200},
  marte: {km: 54600000}
};


  // Calcolo il prezzo del biglietto in base all'età e alla destinazione

  function calculatePrice() {
  let city = document.getElementById("city").value;
  let ageGroup = document.getElementById("age-group").value;
  let km = 0;
  let kmPrice = 0.21;
  let totalPrice = 0;
  
  if (city !== "") {
  let cityData = cities[city];
  km = cityData.km;
  totalPrice = km * kmPrice;
  }
  
  let discountedPrice = totalPrice;
  let invalidInput = false;
  
  if (ageGroup === "minorenne") {
  discountedPrice = totalPrice - (totalPrice * 0.2);
  } else if (ageGroup === "over-65") {
  discountedPrice = totalPrice - (totalPrice * 0.4);
  }
  
  let output = document.getElementById("ticket-price");
  output.innerHTML = discountedPrice.toFixed(2) + " €";
  
  let name = document.getElementById("nome").value;

  
  let offer = ageGroup === "minorenne"? "Tariffa Minorenni" : ageGroup === "over-65"? "Tariffa Over 65" : "Tariffa Standard";
  let carriage = Math.floor(Math.random() * 10) + 1;
  let code = Math.floor(Math.random() * 100000) + 1;

  if (!isNaN(name)) {
    alert("Il campo 'Nome e Cognome' non accetta valori numerici.");
    invalidInput = true;
  }
 
  if (name === "" || city === "" || ageGroup === "") {
    alert("Per favore, inserisci tutti i campi richiesti.");
    invalidInput = true;
  }

if (!invalidInput) {
document.getElementById("ticket-offer-field").innerHTML = offer;
document.getElementById("ticket-carriage-field").innerHTML = carriage;
document.getElementById("ticket-code-field").innerHTML = code;
document.getElementById("ticket-price").innerHTML = discountedPrice.toFixed(2) + " €";
document.getElementById("ticket-name-field").innerHTML = name;
}

}
  
  // Aggiungo un event listener al button Genera
  
  document.querySelector(".btn-primary").addEventListener("click", calculatePrice);
  
  // Aggiungo un event listener al button Annulla

  document.querySelector(".btn-danger").addEventListener("click", function () {
  document.getElementById("nome").value = "";
  document.getElementById("city").value = "";
  document.getElementById("age-group").value = "";
  document.getElementById("ticket-offer-field").innerHTML = "";
  document.getElementById("ticket-carriage-field").innerHTML = "";
  document.getElementById("ticket-code-field").innerHTML = "";
  document.getElementById("ticket-price").innerHTML = "";
  document.getElementById("ticket-name-field").innerHTML = "";
  });