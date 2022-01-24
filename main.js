let passengerName = document.getElementById("input-name");
let ticketName = document.getElementById("psg-name");

let kmNumber = document.getElementById("input-km");
let ticketPrice = document.getElementById("psg-price");

let ticketSeat = document.getElementById("psg-seat");
let ticketCode = document.getElementById("psg-code");

let passengerAge = document.getElementById("input-age");

let ticketOffer = document.getElementById("psg-offer");

let ticketActive = document.getElementById("ticket-in");

const pricePerKM = 0.21;

let generate = document.getElementById("generate");
let cancel = document.getElementById("cancel");

generate.addEventListener("click",
    function() {

        if (passengerName.value == "" || kmNumber.value == "" || passengerAge.value == "scegli") {
            alert("Si prega di inserire tutti i dati richiesti.")
        } else {

        ticketActive.classList.remove("d-none");
        ticketActive.classList.add("active");

        ticketName.innerHTML = passengerName.value;

        if (passengerAge.value == "minorenne") {
            let basePrice = kmNumber.value * pricePerKM;
            let discountPrice = ((kmNumber.value * pricePerKM) * 20) / 100;
            ticketPrice.innerHTML = (basePrice - discountPrice).toFixed(2) + "€";
            ticketOffer.innerHTML = "Sconto 20% minorenni";
        } else if (passengerAge.value == "over-65") {
            let basePrice = kmNumber.value * pricePerKM;
            let discountPrice = ((kmNumber.value * pricePerKM) * 40) / 100;
            ticketPrice.innerHTML = (basePrice - discountPrice).toFixed(2) + "€";
            ticketOffer.innerHTML = "Sconto 40% Over 65";
        }
        else {
            let basePrice = kmNumber.value * pricePerKM;
            ticketPrice.innerHTML = basePrice.toFixed(2) + "€";
            ticketOffer.innerHTML = "Tariffa standard";
        }

        let carNumber = Math.floor(Math.random() * 9) + 1;
        ticketSeat.innerHTML = carNumber;

        let codePR = Math.floor(Math.random() * (99999 - 90000 + 1) + 90000);
        ticketCode.innerHTML = codePR;

        }
    }
)

cancel.addEventListener ("click",
    function() {
        passengerName.value = "";
        kmNumber.value = "";
        passengerAge.value = "";
    }
)
