const apiKey = 'fb90ddba203138a1c4dd99d8d8ab229a'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchInput = document.querySelector('[data-search-input]')
const searchButton = document.querySelector('[data-search-button]')
const weatherImg = document.querySelector('[data-weather-img]')



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 200){
    let data = await response.json()
     
    document.querySelector('[data-temperature]').innerText = Math.round(data.main.temp) + '°c';
    document.querySelector('[data-city]').innerText = data.name;
    document.querySelector('[data-humidity]').innerText = Math.round(data.main.humidity) + '%';
    document.querySelector('[data-wind]').innerText = data.wind.speed + ' km/h'; 

    if(data.weather[0].main === 'Clouds'){weatherImg.src = '/images/clouds.png'}
    else if(data.weather[0].main === 'Clear'){weatherImg.src = '/images/clear.png'}
    else if(data.weather[0].main === 'Drizzle'){weatherImg.src = '/images/drizzle.png'}
    else if(data.weather[0].main === 'Mist'){weatherImg.src = '/images/mist.png'}
    else if(data.weather[0].main === 'Rain'){weatherImg.src = '/images/rain.png'}
    else if(data.weather[0].main === 'Snow'){weatherImg.src = '/images/snow.png'}

    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'

    }
    else if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }


    console.log(data);
}
 searchButton.addEventListener('click', () => {
    checkWeather(searchInput.value)
 })