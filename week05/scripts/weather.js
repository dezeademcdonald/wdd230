const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=c92710c70f69976192fcd3ed083f7db9"


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconscr = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let disc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconscr);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc = `${disc}`;
}


apiFetch(url)

