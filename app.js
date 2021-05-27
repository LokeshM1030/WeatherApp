const weatherAPI = {
        key: "YOUR KEY",
        baseUrl:"YOUR URL "
}

const searchInputBox = document.getElementById('input-box');
// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {

        if(event.keyCode== 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weatherDetails').style.display ="block";
        }
});



// Get Weather Report

function getWeatherReport(city){
        fetch(`${weatherAPI.baseUrl}?q=${city}&appid=${weatherAPI.key}&units=metric`)
        .then(weather => {
                return weather.json();

        }).then(showWeatherReport);
}


// Show Weather Report
function showWeatherReport(weather){
        console.log(weather);


        let city = document.getElementById('city');
        city.innerText= `${weather.name}, ${weather.sys.country}`;

        let temp =document.getElementById('temp');
        temp.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

        let temp_min =document.getElementById('min-max');
        temp_min.innerHTML= `${Math.round(weather.main.temp_min)}&deg;C (min)/${Math.round(weather.main.temp_max)}&deg;C (max)`;

        let weatherType= document.getElementById('weather');
        weatherType.innerText= `${weather.weather[0].main}`;

        let date = document.getElementById('date');
        let todayDate = new Date();
        date.innerText = dateManage(todayDate);

       

        if(weatherType.textContent == 'Clear'){
                document.body.style.backgroundImage = "url('images/clear.jpg')";
        }
        else if(weatherType.textContent == 'Clouds'){
                document.body.style.backgroundImage = "url('images/cloud.jpg')";
        }
        else if(weatherType.textContent == 'Thunderstorm'){
                document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        }
        else if(weatherType.textContent == 'Rain'){
                document.body.style.backgroundImage = "url('images/rain.jpg')";
        }
        else if(weatherType.textContent == 'Snow'){
                document.body.style.backgroundImage = "url('images/Snow.jpg')";
        }
}
// Date manage

function dateManage(dateArg){
        let days= ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        
        let year =dateArg.getFullYear();
        let month = months[dateArg.getMonth()];
        let date = dateArg.getDate();
        let day = days[dateArg.getDay()];

        return `${date} ${month} ${day}, ${year} `;
}
