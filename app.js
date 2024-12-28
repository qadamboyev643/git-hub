let api_key = "cd67fef8a2fcc88a494e79d263534282"

let cityName = document.querySelector(".city-name")
let degree = document.querySelector(".degree")
let weatherInfo = document.querySelector(".weather-info")
let cordinats = document.querySelector(".cordinats")

let lat = 41
let lon = 60
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

fetch(url)
.then((res) =>{
    return res.json()
})
.then((data) =>{
    let {name, main, weather, coord} = data

    cityName.innerHTML = name
    degree.innerHTML = Math.floor(main.temp - 273) + "c"
    weatherInfo.innerHTML = weather[0].description
    cordinats.innerHTML = `Kordinatalari: ${coord.lat} : ${coord.lon}`


    console.log(name);
    
    console.log(data);
    
})

