const baseUrl = "https://dezeademcdonald.github.io/wdd230/";
const linksUrl = "https://dezeademcdonald.github.io/wdd230/data/links.json";

async function getLinks() {

    const response = await fetch(linksUrl);
    if (response.ok) {
        const data = response.json;
        console.log(data);
        //displayLinks(data);
    }
}


getLinks();