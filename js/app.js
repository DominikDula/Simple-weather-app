window.addEventListener("load",() =>{

    let long;
    let lat;
    let temperatureDescription =document.querySelector(".description");
    let temperatureDegree =document.querySelector(".temperature");
    let locationCity =document.querySelector(".city-name");
    let WeatherIcon =document.querySelector(".weather-icon");
    let Innererror = document.querySelector(".error");
    const KELVIN = 273;

    const weather = new Object;




    weather.temperature = {
        unit : "celsius"
    }

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(setPosition,Showerror);
    }

    function setPosition(position){
        lat = position.coords.latitude;
        long = position.coords.longitude;

        getWeather(lat,long);
        getDaily(lat,long);
    }

    function Showerror(error){
        Innererror.style.display = "block";
        Innererror.innerHTML = `${error.message}`;
    }

    function getWeather(lat,long){
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=sk&appid=37fa2633ce3326fbb19b469d4f34d00e`;

        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconid = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        
        
            locationCity.textContent=data.name;
        })
        .then(function(){
            displayWeather();
        })
    }

    function displayWeather(){
        WeatherIcon.innerHTML = `<img class="weather-icon" src="icons/${weather.iconid}.svg" alt="icon">`;
        temperatureDegree.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        temperatureDescription.innerHTML = `<p>${weather.description}</p>`;
        locationCity.innerHTML = `${weather.city}, ${weather.country}`;
        
    }


    let firstDay = document.querySelector(".first-day");
    let secondDay = document.querySelector(".second-day");
    let thirdDay = document.querySelector(".third-day");
    let fourthDay = document.querySelector(".fourth-day");
    let fifthDay = document.querySelector(".fifth-day");
    let sixthDay = document.querySelector(".sixth-day");
    let seventhDay = document.querySelector(".seventh-day");

    let firstHour = document.querySelector(".first-hour");
    let secondHour = document.querySelector(".second-hour");
    let thirdHour = document.querySelector(".third-hour");
    let fourthHour = document.querySelector(".fourth-hour");
    let fifthHour = document.querySelector(".fifth-hour");
    let sixthHour = document.querySelector(".sixth-hour");
    let seventhHour = document.querySelector(".seventh-hour");

    let current = document.querySelector(".current");
    const dailyWeather = new Object;



    function getDaily(lat,long){
        const dailyApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=sk&exclude={part}&appid=37fa2633ce3326fbb19b469d4f34d00e`;
    
        fetch(dailyApi)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            dailyWeather["0 current"] = timeConverter(data.current.dt);
    
            dailyWeather["0 max"] = Math.floor(data.daily["0"].temp.max - KELVIN);
            dailyWeather["0 min"] = Math.floor(data.daily["0"].temp.min - KELVIN);
            dailyWeather["0 day"] = timeConverter(data.daily["0"].dt);
            dailyWeather["0 icon"] = data.daily["0"].weather["0"].icon;
            dailyWeather["0 description"] = data.daily["0"].weather["0"].description;
            dailyWeather["0 hourly"] = Math.floor(data.hourly["0"].temp - KELVIN);
            dailyWeather["0 hourly time"] = hoursConverter(data.hourly["0"].dt);
            dailyWeather["0 hourly icon"] = data.hourly["0"].weather["0"].icon;
            dailyWeather["0 hourly description"] = data.hourly["0"].weather["0"].description;
    
            dailyWeather["1 max"] = Math.floor(data.daily["1"].temp.max - KELVIN);
            dailyWeather["1 min"] = Math.floor(data.daily["1"].temp.min - KELVIN);
            dailyWeather["1 day"] = timeConverter(data.daily["1"].dt);
            dailyWeather["1 icon"] = data.daily["1"].weather["0"].icon;
            dailyWeather["1 description"] = data.daily["1"].weather["0"].description;
            dailyWeather["3 hourly"] = Math.floor(data.hourly["3"].temp - KELVIN);
            dailyWeather["3 hourly time"] = hoursConverter(data.hourly["3"].dt);
            dailyWeather["3 hourly icon"] = data.hourly["3"].weather["0"].icon;
            dailyWeather["3 hourly description"] = data.hourly["3"].weather["0"].description;
    
            dailyWeather["2 max"] = Math.floor(data.daily["2"].temp.max - KELVIN);
            dailyWeather["2 min"] = Math.floor(data.daily["2"].temp.min - KELVIN);
            dailyWeather["2 day"] = timeConverter(data.daily["2"].dt);
            dailyWeather["2 icon"] = data.daily["2"].weather["0"].icon;
            dailyWeather["2 description"] = data.daily["2"].weather["0"].description;
            dailyWeather["6 hourly"] = Math.floor(data.hourly["6"].temp - KELVIN);
            dailyWeather["6 hourly time"] = hoursConverter(data.hourly["6"].dt);
            dailyWeather["6 hourly icon"] = data.hourly["6"].weather["0"].icon;
            dailyWeather["6 hourly description"] = data.hourly["6"].weather["0"].description;
    
            dailyWeather["3 max"] = Math.floor(data.daily["3"].temp.max - KELVIN);
            dailyWeather["3 min"] = Math.floor(data.daily["3"].temp.min - KELVIN);
            dailyWeather["3 day"] = timeConverter(data.daily["3"].dt);
            dailyWeather["3 icon"] = data.daily["3"].weather["0"].icon;
            dailyWeather["3 description"] = data.daily["3"].weather["0"].description;
            dailyWeather["9 hourly"] = Math.floor(data.hourly["9"].temp - KELVIN);
            dailyWeather["9 hourly time"] = hoursConverter(data.hourly["9"].dt);
            dailyWeather["9 hourly icon"] = data.hourly["9"].weather["0"].icon;
            dailyWeather["9 hourly description"] = data.hourly["9"].weather["0"].description;
    
            dailyWeather["4 max"] = Math.floor(data.daily["4"].temp.max - KELVIN);
            dailyWeather["4 min"] = Math.floor(data.daily["4"].temp.min - KELVIN);
            dailyWeather["4 day"] = timeConverter(data.daily["4"].dt);
            dailyWeather["4 icon"] = data.daily["4"].weather["0"].icon;
            dailyWeather["4 description"] = data.daily["4"].weather["0"].description;
            dailyWeather["12 hourly"] = Math.floor(data.hourly["12"].temp - KELVIN);
            dailyWeather["12 hourly time"] = hoursConverter(data.hourly["12"].dt);
            dailyWeather["12 hourly icon"] = data.hourly["12"].weather["0"].icon;
            dailyWeather["12 hourly description"] = data.hourly["12"].weather["0"].description;
    
            dailyWeather["5 max"] = Math.floor(data.daily["5"].temp.max - KELVIN);
            dailyWeather["5 min"] = Math.floor(data.daily["5"].temp.min - KELVIN);
            dailyWeather["5 day"] = timeConverter(data.daily["5"].dt);
            dailyWeather["5 icon"] = data.daily["5"].weather["0"].icon;
            dailyWeather["5 description"] = data.daily["5"].weather["0"].description;
            dailyWeather["15 hourly"] = Math.floor(data.hourly["15"].temp - KELVIN);
            dailyWeather["15 hourly time"] = hoursConverter(data.hourly["15"].dt);
            dailyWeather["15 hourly icon"] = data.hourly["15"].weather["0"].icon;
            dailyWeather["15 hourly description"] = data.hourly["15"].weather["0"].description;
    
            dailyWeather["6 max"] = Math.floor(data.daily["6"].temp.max - KELVIN);
            dailyWeather["6 min"] = Math.floor(data.daily["6"].temp.min - KELVIN);
            dailyWeather["6 day"] = timeConverter(data.daily["6"].dt);
            dailyWeather["6 icon"] = data.daily["6"].weather["0"].icon;
            dailyWeather["6 description"] = data.daily["6"].weather["0"].description;
            dailyWeather["18 hourly"] = Math.floor(data.hourly["18"].temp - KELVIN);
            dailyWeather["18 hourly time"] = hoursConverter(data.hourly["18"].dt);
            dailyWeather["18 hourly icon"] = data.hourly["18"].weather["0"].icon;
            dailyWeather["18 hourly description"] = data.hourly["18"].weather["0"].description;
    
    
    
    
        })
        .then(function(){
            displayDailyWeather();
            displayHourlyWeather();
        })
    }
    
    function displayDailyWeather(){
        let a= [];
            for(let i=0;i<7;i++){
                a.push( `<p>${dailyWeather[`${i.toString()} day`]}</p>
                <img src="icons/${dailyWeather[`${i.toString()} icon`]}.svg" alt="icon">
                <span>${dailyWeather[`${i.toString()} description`]}</span>
                <span>${dailyWeather[`${i.toString()} min`]}°/${dailyWeather[`${i.toString()} max`]}°</span>`);
             
            }

            
        
        current.textContent=`${dailyWeather["0 current"]}`;
        firstDay.innerHTML= a[0];
        secondDay.innerHTML= a[1];
        thirdDay.innerHTML= a[2];
        fourthDay.innerHTML= a[3];
        fifthDay.innerHTML= a[4];
        sixthDay.innerHTML= a[5];
        seventhDay.innerHTML= a[6];

    }  
        
    function displayHourlyWeather(){

        let b= [];
                for(let i=0;i<19;i++){
                    if(i% 3 == 0){
                        b.push(     `<p class="time">${dailyWeather[`${i.toString()} hourly time`]}</p><img src="icons/${dailyWeather[`${i.toString()} hourly icon`]}.svg" alt="icon"><span>${dailyWeather[`${i.toString()} hourly description`]}</span><span>${dailyWeather[`${i.toString()} hourly`]}°</span>`); 
                    }
                }
         
        firstHour.innerHTML= b[0];
        secondHour.innerHTML= b[1];
        thirdHour.innerHTML= b[2];
        fourthHour.innerHTML= b[3];
        fifthHour.innerHTML= b[4];
        sixthHour.innerHTML= b[5];
        seventhHour.innerHTML= b[6];

    }
        
    function timeConverter(UNIX_timestamp){
        function dayOfWeekAsString(dayIndex) {
            return ["Ned","Pon","Ut","Str","Štv","Pia","Sob"][dayIndex] || '';
          }
    
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months[a.getMonth()];
        var date = a.getDate();
        var day =a.getDay();
        var time = dayOfWeekAsString(day)+' '+ date + ' ' + month;
        return time;
      }
    
      function hoursConverter(UNIX_timestamp){
       
    
        var a = new Date(UNIX_timestamp * 1000);
      
        var hours =a.getHours();
        var time = hours+':'+'00';
        return time;
      }

})

// Animation//

let leftArrow =document.querySelector(".fa-arrow-left");
let rightArrow =document.querySelector(".fa-arrow-right");
let hours =document.querySelector(".hours");
let move = -14;
let translatex= -20;

leftArrow.addEventListener("click",()=>{
    if(translatex=== -20)return false;
    hours.style= `transform:translate(${translatex-=move}%, 50%)`;
    
})
rightArrow.addEventListener("click",()=>{
    if(translatex=== -90)return false;
    hours.style= `transform:translate(${translatex+=move}%, 50%)`;

})

