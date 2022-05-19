const kmPrice = 0.21;
const discount20 = 0.8;
const discount40 = 0.6;

const notValidAgeMessage = "L'èta inserita non è valida, inserire un numero";
const notValidKmMessage = "La tratta inserita non è valida, inserire un numero";
const dataNotInsert = "Valore non dichiarato";

let userAge;
let kmToBill;
let finalPrice;

userAge = prompt("Inserire l'età del viaggiatore");

if ((parseInt(userAge) < 0) || (isNaN(parseInt(userAge)) || (userAge === ""))) {
    alert(notValidAgeMessage);
    userAge = dataNotInsert;
}

kmToBill = prompt("Inserire i km della tratta prevista");

if ((parseInt(kmToBill) < 0) || (isNaN(parseInt(kmToBill))) || (kmToBill === "")) {
    alert(notValidKmMessage)
    kmToBill = dataNotInsert;
}

let totalPrice = kmPrice * parseInt(kmToBill);

if (parseInt(userAge) <= 18) {
    finalPrice = totalPrice * discount20;
} else if (parseInt(userAge) >= 65){
        finalPrice = totalPrice * discount40;
} else {
    finalPrice = totalPrice;
}

let roundedPrice = Math.round((finalPrice + Number.EPSILON) * 100) / 100;

const spanUserAge = document.getElementById('span-user-age');

if (userAge === dataNotInsert){
    spanUserAge.innerHTML = userAge
} else {
    spanUserAge.innerHTML = userAge + " anni"
}

const spanKm = document.getElementById('span-km');

if (kmToBill === dataNotInsert){
    spanKm.innerHTML = kmToBill
} else {
    spanKm.innerHTML = kmToBill + " km"
}

const spanPrice = document.getElementById('span-price');

if (userAge === dataNotInsert || kmToBill === dataNotInsert){
    spanPrice.innerHTML = "Impossibile calcolare il prezzo"
} else {
    spanPrice.innerHTML = roundedPrice.toFixed(2) + " €";
}




console.log(userAge + "eta")
console.log(kmToBill + "km")
console.log("prezzo" + finalPrice)
