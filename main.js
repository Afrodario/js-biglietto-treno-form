const passengerName = document.getElementById("input-name");
const ticketName = document.getElementById("psg-name");

const generate = document.getElementById("generate");

generate.addEventListener("click",
    function() {
        ticketName.innerHTML = passengerName.value;
    }
)