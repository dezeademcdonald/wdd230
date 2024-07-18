const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temp");
const disc = document.querySelector("#disc");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.315242540194088&lon=-10.803496533190676&units=imperial&appid=c92710c70f69976192fcd3ed083f7db9";

async function getApiData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (erro) {
        console.log(erro);
    }
}

function displayResults(data) {
    temperature.innerHTML = `${data.main.temp}&deg;F`;
    disc.innerHTML = data.weather[0].description;
    let weatherIconScr = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", weatherIconScr);
    weatherIcon.setAttribute("alt", disc);
}

getApiData(url)