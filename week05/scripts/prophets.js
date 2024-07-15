const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getProphetData(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthdateAndbirthplace = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname} `;
        birthdateAndbirthplace.innerHTML = `Date of birth: ${prophet.birthdate} <br> Palce of birth: ${prophet.birthplace}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Protrait of ${prophet.fullName} of latter-day`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthdateAndbirthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData(url);