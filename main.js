let passengerName = document.getElementById("input-name");
let ticketName = document.getElementById("psg-name");

let kmNumber = document.getElementById("input-km");
let ticketPrice = document.getElementById("psg-price");

let ticketSeat = document.getElementById("psg-seat");
let ticketCode = document.getElementById("psg-code");

const pricePerKM = 0.21;

let generate = document.getElementById("generate");

generate.addEventListener("click",
    function() {

        ticketName.innerHTML = passengerName.value;

        let totalPrice = (kmNumber.value * pricePerKM);
        ticketPrice.innerHTML = totalPrice.toFixed(2) + "€";

        let carNumber = Math.floor(Math.random() * 9) + 1;
        ticketSeat.innerHTML = carNumber;

        let codePR = Math.floor(Math.random() * (99999 - 90000 + 1) + 90000);
        ticketCode.innerHTML = codePR;
    }
)