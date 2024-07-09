const visitDisplay = document.querySelector('#visit');

let numVisits = Number(window.localStorage.getItem("numVisits - Is")) || 0;

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
}

else {
    visitDisplay.textContent = "This is your first visit. 🥳 Welcome!";
}

numVisits++;

localStorage.setItem("numVisits-Is", numVisits);