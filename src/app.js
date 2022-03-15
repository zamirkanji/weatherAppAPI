import {getAllData} from "./getData";
import { displayLoading, hideLoading } from "./DOM";
import {displaySVG, showImg, checkWeather} from './img';
import { getLocalStorage, setLocalStorage } from "./localStorage";
// import Weather from "./class";
import { MyDate } from "./getDate";
import { moment } from "moment";
import { displayForecast } from "./DOM";
import { changeHeaderOnScroll } from "./DOM";

const getInputValue = async () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');
    const mainBody = document.querySelector('#main');
    const main = document.querySelector('main');
    const notValidCity = document.querySelector('city-valid');
    const switchTempType = document.querySelector('#switch-temp-type');

    const tempType = switchTempType.value;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if(mainBody.classList.contains('main')) {
            mainBody.classList.remove('main');
            mainBody.classList.add('display');
        }
        if (notValidCity) {
            main.removeChild(notValidCity);
        }
        let v = input.value;
        dataAsync(v, 'imperial');
        setLocalStorage(v, tempType);
    })

    // input.addEventListener('input')
}

const toggleTempType = (() => {
    const input = document.querySelector('#city-input');
    const switchTempType = document.querySelector('#switch-temp-type');
    
    switchTempType.addEventListener('click', e => {
        e.preventDefault();
        const tempType = switchTempType.value;
        let v = input.value;
        console.log(v);
        console.log(e.target);
        if (switchTempType.value === 'F') {
            switchTempType.value = 'C';
            switchTempType.textContent = 'C°';
            //call getdata again but with metric unit type
            setLocalStorage(v, tempType);
            dataAsync(v, 'metric');
        } else { 
            switchTempType.value = 'F';
            switchTempType.textContent = 'F°';
            setLocalStorage(v, tempType);
            dataAsync(v, 'imperial');
        }
    })
})();

setInterval(function(e){ 
    //code goes here that will be run every 1 second. 
    const dateContainer = document.querySelector('.date-container');
    // const forecastDate = document.querySelector('#forecast-date');   
    let myDate = new MyDate();
    dateContainer.textContent = myDate.currentLocalDateAndTime();
}, 1000);


const timeOut = () => {
    const timeOut = setTimeout((displayLoading) => {
       hideLoading();
    },1000)
    return timeOut;
}

const clear = () => clearTimeout(timeOut);

const dataAsync = async (v, tempType) => {
    let c;
    let f;
    //use variable f and check if temptype is f or c (imperial or metric), then pass variable into functions that require

    try {
        c = await getAllData(v, tempType);
        const {name, weather, state, main, wind, visibility, sys, daily, rain, snow, } = c;
        console.log(c);
        const t = timeOut(displayLoading());
        // let d = new Weather(weather, name, wind, main, visibility, sys, daily, sys.sunrise, sys.sunset);
        // getForecastData(daily);
        getName(name, state);
        getTemp(Math.round(main.temp) + '°');
        getWind(Math.round(wind.speed), Math.round(wind.deg));
        getHumidity(main.humidity + '%');
        getFeelsLike(Math.round(main.feels_like) + '°');
        getWeatherType(weather[0].main, weather[0].description);
        getVisibility(visibility, 'miles');
        getPressure(main.pressure);
        // console.log(rain['1h']);
        displayForecast(daily);
        checkWeather(main.temp, weather[0].main, weather[0].description, '#imgIcon', c.snow??['1h'], c.rain??['1h']);
        getCloudCover(c.clouds.all + '%');
        dateForForecast(sys.sunrise, sys.sunset);
        riseSet(sys.sunrise, sys.sunset, c.timezone, c.timezone_offset);
        clear(t);
        return c;
    } catch (err) {
        console.log(err);
    } 
}

const getName = (name, state) => {
    const city = document.querySelector('#city');
    city.textContent = `${name}, ${state}`;
    return name;
}

const getTemp = (t) => {
    const temp = document.getElementById('temp-span');
    temp.textContent = t;
    return t;
}

const getWind = (windSpeed, dir) => {
    const wind = document.getElementById('wind-span');
    // console.log(dir);
    // let direction;
    // if (dir < 11.25 && dir >= 348.75) {
    //     direction === 'N';
    // } else if (dir <= 33.75 && dir >= 11.25) {
    //     direction === 'NNE';
    // } else if (dir <= 56.25 && dir >= 33.75) {
    //     direction === 'NE';
    // } else if (dir <= 78.75 && dir >= 56.25) {
    //     direction === 'ENE';
    // } else if (dir <= 101.75 && dir >= 78.75) {
    //     direction === 'E';
    // } else if (dir <= 123.75 && dir >= 101.25) {
    //     direction === 'ESE';
    // } else if (dir <= 146.25 && dir >= 123.75) {
    //     direction === 'SE';
    // } else if (dir <= 168.75 && dir >= 146.25) {
    //     direction === 'SSE';
    // } else if (dir <= 191.25 && dir >= 168.75) {
    //     direction === 'S';
    // } else if (dir <= 213.75 && dir >= 191.25) {
    //     direction === 'SSW';
    // } else if (dir <= 236.25 && dir >= 213.75) {
    //     direction === 'SW';
    // } else if (dir <= 258.75 && dir >= 236.25) {
    //     direction === 'WSW';
    // } else if (dir <= 281.25 && dir >= 258.75) {
    //     direction === 'W';
    // } else if (dir <= 303.75 && dir >= 281.25) {
    //     direction === 'WNW';
    // } else if (dir <= 326.25 && dir >= 303.75) {
    //     direction === 'NW';
    // } else if (dir <= 348.75 && dir >= 326.25) {
    //     direction === 'NNW';
    // } else {
    //     // console.log(Error);
    // }
    // console.log(direction);
    // wind.textContent = `${windSpeed} mph ${direction}`;
    wind.textContent = `${windSpeed} mph`;
    return windSpeed;
}

const riseSet = (rise, set, tz, timezone_offset) => {
    let sunR = new Date(rise);
    let sunS = new Date(set);
    // const options = {timezone: timezone, timeZoneName: 'long'};
    // console.log(sunR.toLocaleString('en-US', {timeZone: tz}));
    // console.log(sunS.toLocaleTimeString('en-US', {timeZone: tz}));
    // console.log(sunS.getTimezoneOffset(timezone_offset));
    // console.log(sunR.currentLocalDateAndTime())
    // console.log(sunS.toLocaleDateString('en-US'));
}

const dateForForecast = () => {
    const forecastDate = document.querySelector('#forecast-date');   
    let myDate = new MyDate();
    let todaysDate = myDate.getDate();
    let sevenDays = myDate.addSevenDays();
    forecastDate.textContent = `${todaysDate} - ${sevenDays}`;
}
const getHumidity = (h) => {
    const humidity = document.getElementById('humidity-span');
    humidity.textContent = h;
    return h;
}
const getFeelsLike =(f) => {
    const feelsLike = document.getElementById('feels-like-span');
    feelsLike.textContent = f;
    return f;
}
const getWeatherType = (w, d) => {
    const weather = document.querySelector('#weather');
    const weatherDescrip = document.querySelector('#weather-descrip');
    weather.textContent = `${w}, ${d}`;
    // weatherDescrip.textContent = d;
    // showImg(w);
    return w;
}

const getCloudCover = (cc) => {
    const cloudCover = document.querySelector('#cloud-cover-span');
    cloudCover.textContent = cc;
    return cc;
}

const getPressure = (p) => {
    const pressure = document.querySelector('#pressure-span');
    pressure.textContent = p;
    return p;
}

const getVisibility = (v, m) => {
    const visibility = document.querySelector('#visibility-span');
    // const vMiles =  0.00062 / v;
    const vMiles = v / 1609.34;
    visibility.textContent = Math.round(vMiles) + ' ' + m;
    return vMiles;
}

const getForecastData = (daily) => {
    // const d = new Weather(c);
    
    let dailyTemps = [];
    for (const obj of daily) {
        let maxTemp = obj.temp.max;
        let minTemp = obj.temp.min;
        let weatherDescription = [obj.weather[0].main, obj.weather[0].description];
        dailyTemps.push({maxTemp, minTemp, weatherDescription});
    }
    return dailyTemps;
}

export {
    getInputValue,
    displayLoading,
    hideLoading,
    dataAsync,
    timeOut,
    getForecastData
}