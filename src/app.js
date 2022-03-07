import {getData, getGeoLocation, getForecast, getAllData} from "./getData";
import { displayLoading, hideLoading } from "./DOM";
import {displaySVG, showImg, checkWeather} from './img';
import { getLocalStorage, setLocalStorage } from "./localStorage";
import Weather from "./class";
// import {moment} from 'moment';
import { moment } from "moment";

const getInputValue = async () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');
    const mainBody = document.querySelector('#main');
    const main = document.querySelector('main');
    const notValidCity = document.querySelector('city-valid');
    const switchTempType = document.querySelector('#switch-temp-type');

    const tempType = switchTempType.value;

    form.addEventListener('submit', async (e) => {
        if(mainBody.classList.contains('main')) {
            mainBody.classList.remove('main');
            mainBody.classList.add('display');
        }
        if (notValidCity) {
            main.removeChild(notValidCity);
        }
        e.preventDefault();
        let v = input.value;
        setLocalStorage(v, tempType);
        dataAsync(v);
    })
}

const toggleTempType = (() => {
    const input = document.querySelector('#city-input');
    const btnTemp = document.querySelector('#switch-temp-type');
    btnTemp.addEventListener('click', e => {
        let v = input.value;
        console.log(v);
        e.preventDefault();
        console.log(e.target);
        if (btnTemp.value === 'F') {
            btnTemp.value = 'C';
            btnTemp.textContent = 'C°';
            //call getdata again but with metric unit type
            dataAsync(v, 'metric');
        } 
        if (btnTemp.value === 'C') {
            btnTemp.value = 'F';
            btnTemp.textContent = 'F°';
            // dataAsync(v);
        }
    })
})();

// const timeOut = () => {
//     const timeOut = setTimeout((displayLoading) => {
//        hideLoading();
//     },1000)
//     return timeOut;
// }

const timeOut = () => {
    const timeOut = setTimeout(async (displayLoading) => {
        await displayLoading;
        hideLoading();
    },1000)
    return timeOut;
}

const clear = () => clearTimeout(timeOut);

const dataAsync = async (v, tempType = undefined) => {
    let c;
    let f;
    try {
        c = await getAllData(v, tempType);
        const {name, weather, state, main, wind, visibility, sys} = c;
        console.log(c);
        const t = timeOut(displayLoading());
        getForecastData(c.list);
        getName(c.name, c.state);
        getTemp(Math.round(c.main.temp) + '°');
        getWind(Math.round(c.wind.speed), Math.round(c.wind.deg));
        getHumidity(c.main.humidity + '%');
        getFeelsLike(Math.round(c.main.feels_like) + '°');
        getWeatherType(c.weather[0].main, c.weather[0].description);
        getVisibility(c.visibility);
        getPressure(c.main.pressure);
        checkWeather(c.main.temp, c.weather[0].main, c.weather[0].description, '#imgIcon');
        getCloudCover(c.clouds.all + '%');
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
    let direction;
    if (dir <= 11.25 && dir >= 348.75) {
        direction === 'N';
    } else if (dir <= 236.25 && dir >= 213.75) {
        direction === 'SW';
    } else if (dir <= 213.75 && dir >= 191.25) {
        direction === 'SSW';
    } else {
        // console.log(Error);
    }
    wind.textContent = `${windSpeed}mph ${direction}`;
    return windSpeed;
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
    showImg(w);
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

const getVisibility = (v) => {
    const visibility = document.querySelector('#visibility-span');
    const vMiles = 0.00062 / v;
    visibility.textContent = vMiles;
    return vMiles;
}

const getForecastData = (list) => {
    // const d = new Weather(c);
    list.forEach(item => {
        // console.log(item);

    })

}

export {
    getInputValue,
    displayLoading,
    hideLoading,
    dataAsync
}