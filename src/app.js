import {getData, getGeoLocation, getForecast} from "./getData";
import { displayLoading, hideLoading } from "./DOM";
import {displaySVG, showImg} from './img';
import Weather from "./class";

const getInputValue = async () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');
    const mainBody = document.querySelector('#main');

    form.addEventListener('submit', async (e) => {
        if(mainBody.classList.contains('main')) {
            mainBody.classList.remove('main');
            mainBody.classList.add('display');
        }
        e.preventDefault();
        let v = input.value;
        dataAsync(v);
    })
}

const timeOut = () => {
    const timeOut = setTimeout((displayLoading) => {
       hideLoading();
    },1000)
    return timeOut
}

const clear = () => clearTimeout(timeOut);


const dataAsync = async (v) => {
    try {
        let c;
        let f;
        getGeoLocation(v).then(async geo => {
            c = await getData(geo['lat'], geo['lon']);
            f = await getForecast(geo['lat'], geo['lon']);
            console.log(c);
            console.log(f);
            return c;
        }).then(c => {
            const t = timeOut(displayLoading());
            getName(c.name);
            getTemp(Math.round(c.main.temp) + '°');
            // getWind(Math.round(c.wind.speed) +'mph');
            getWind(Math.round(c.wind.speed), Math.round(c.wind.deg));
            getHumidity(c.main.humidity + '%');
            getFeelsLike(c.main.feels_like + '°');
            getWeatherType(c.weather[0].main);
            getVisibility(c.visibility);
            clear(t);
            // displaySVG(c);
            return c;
        })
    } catch (err) {
        console.log(err);
    }   
}


//USING CLASS WEATHER
// const dataAsync = async (v) => {
//     try {
//         let c;
//         getGeoLocation(v).then(async geo => {
//             c = await getData(geo['lat'], geo['lon']);
//             console.log(c);
//             return c;
//         }).then(c => {
//             const t = timeOut(displayLoading())
//             const weather = new Weather(c)
//             return c;
//         })
//     }catch (err) {
//         console.log(err);
//     }
    
// }


const getName = (name) => {
    const city = document.querySelector('#city');
    city.textContent = name;
    return name;
}

const getTemp = (t) => {
    const temp = document.getElementById('temp-span');
    temp.textContent = t;
    return t;
}

const getWind = (windSpeed, dir) => {
    console.log(dir);
    const wind = document.getElementById('wind-span');
    let direction;
    if (dir <= 11.25 && dir >= 348.75) {
        direction === 'N';
    } else if (dir <= 236.25 && dir >= 213.75) {
        direction === 'SW';
    } else if (dir <= 213.75 && dir >= 191.25) {
        direction === 'SSW';
    } else {
        console.log(Error);
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
const getWeatherType = (w) => {
    const weather = document.querySelector('#weather');
    weather.textContent = w;
    // displaySVG(w);
    showImg(w);
    return w;
}

const getVisibility = (v) => {
    const visibility = document.querySelector('#visibility-span');
    const vMiles = 0.00062 / v;
    visibility.textContent = vMiles;
    return vMiles;
}

export {
    getInputValue,
    displayLoading,
    hideLoading
}