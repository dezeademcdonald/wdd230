const baseUrl = "https://dezeademcdonald.github.io/wdd230/";
const linksUrl = "https://dezeademcdonald.github.io/wdd230/data/links.json";
const section = document.querySelector("#card-list");

async function getLinks(url) {
    const response = await fetch(linksUrl);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.weeks);
}

function displayLinks(weeks) {

    weeks.forEach(week => {
        const weekUl = document.createElement("ul");
        const weekLi = document.createElement("li");
        const anchorDisc = document.createElement("span");

        anchorDisc.textContent = week.weeks;

        weekLi.appendChild(anchorDisc);
        weekUl.appendChild(weekLi);

        week.links.forEach(link => {
            const anchor = document.createElement("a");
            const ulLink = document.createElement("ul");
            const liLink = document.createElement("li");

            anchor.setAttribute("href", link.url);
            anchor.textContent = link.tile;

            liLink.appendChild(anchor);
            ulLink.appendChild(liLink);
            weekUl.appendChild(ulLink);

        });

        section.appendChild(weekUl);
    });


}
getLinks(baseUrl);