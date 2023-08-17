const BASE_URL="http://api.openweathermap.org/data/2.5/weather?units=metric"
const API_KEY="c5668d97d86079c1a6ce60f654e44993"
// const City = "mumbai"
var City;
var data = "";
async function weather(){
    const responce = await fetch(BASE_URL + `&appid=${API_KEY}` + `&q=${City}`);

    data = await responce.json();
    console.log(data);
}


// weather()
var userInputField = document.getElementById("city");
var submitButton = document.getElementById("search");

var wea;
function weathername(){
    wea = data.weather[0].main;
    document.getElementById('wcity1').innerText = wea;
}
var hum;
function humadityf(){
    hum = data.main.humidity;
    // console.log(hum)
    document.getElementById('hper').innerText =`${hum} %`;
}
var win;
function windf(){
    win = data.wind.speed;
    // console.log(win)
    document.getElementById('wper').innerText =`${win} Km/h`;

}
var temp;
function tempf(){
    temp = data.main.temp;
    // console.log(win)
    document.getElementById('wtemp1').innerText =`${temp} ℃`;

}
var icon;
function iconf(){
    icon = data.weather[0].icon;
    // console.log(win)
    document.getElementById('wimg').innerHTML =`<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="search" id="wimg1">`;

    // console.log(icon)

}

submitButton.addEventListener("click", function() {
   

  City = userInputField.value;
  weather();


  setTimeout(function() {
    // console.log(City);
 
    weathername();
    humadityf();
    windf();
    tempf();
    iconf();
  }, 2000);



});