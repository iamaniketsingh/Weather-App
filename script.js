const key = "c3894e69d3e1ca98391dc50d5fac89a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search-btn");
var weatherImage = document.querySelector(".weather-picture");

async function checkWeather(city){
const response = await fetch(apiUrl + city +`&appid=${key}`);
var data = await response.json();
console.log(data);

document.querySelector(".city-name").innerHTML = data.name;
document.querySelector(".temp-num").innerText = parseInt(data.main.temp);
document.querySelector(".humidity-num").innerText = parseInt(data.main.humidity)+"%";
document.querySelector(".Wind-Speed").innerText = parseInt(data.wind.speed) + "km/h";
if(data.weather[0].main=="Clouds"){
    weatherImage.src= "images/clouds.png";
}
else if (data.weather[0].main == "Clear"){
    weatherImage.src= "images/clear.png";}
else if (data.weather[0].main == "Mist"){
   weatherImage.src= "images/mist.png";}
else if (data.weather[0].main == "Rain"){
    weatherImage.src= "images/rain.png";}
else if (data.weather[0].main == "Snow"){
        weatherImage.src= "images/snow.png";}   
else if (data.weather[1].main == "Humidity"){
        weatherImage.src= "images/humidity.png";}         
}


searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})
