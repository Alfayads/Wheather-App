const cloudImage = document.querySelector('.cloudimg');
const degreeCelsius = document.querySelector('.degreeCelsius');
const locationName = document.querySelector('.location-name');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const searchBar = document.querySelector('.search-bar');
const serchButton = document.querySelector('.search-button');

serchButton.addEventListener('click',()=>{
    let serchResult = searchBar.value;
    checkWhether(serchResult)
})


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "a6baf1134e320d3c5c852cb974c02ddb";

async function checkWhether(value) {
    const responce = await fetch(apiUrl+value + `&appid=${apiKey}`);
    let data = await responce.json();

    locationName.innerHTML = data.name;
    degreeCelsius.innerHTML = data.main.temp;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}Km/h`;
    
}
