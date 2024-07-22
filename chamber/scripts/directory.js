const baseUrl = "https://dezeademcdonald.github.io/wdd230/";
const linksUrl = "https://dezeademcdonald.github.io/wdd230/chamber/data/members.json";

async function getUrl() {
    const response = await fetch(linksUrl);
    if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayCompanies(data.companies);
    }
}

const displayCompanies = (companies) => {

    companies.forEach((company) => {
        const card = document.createElement("section");
        const hThree = document.createElement("h3");
        const para = document.createElement("p");
        const img = document.createElement("img");
        const anchor = document.createElement("a");
        const membership = document.createElement("p");
        const main = document.querySelector("main")

        img.setAttribute("src", `https://dezeademcdonald.github.io/wdd230/${company.image}`);
        img.setAttribute("alt", company.name);
        img.setAttribute("loading", "lazy");
        anchor.setAttribute("href", company.url);


        hThree.textContent = company.name;
        para.textContent = company.address;
        membership.textContent = company.membership;
        anchor.textContent = company.url;

        card.appendChild(img);
        card.appendChild(hThree);
        card.appendChild(membership);
        card.appendChild(para);
        card.appendChild(anchor);

        main.appendChild(card);
    });
}

getUrl();
