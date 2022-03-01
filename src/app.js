import {getData, getGeoLocation} from "./getData";
import { displayLoading, hideLoading } from "./DOM";
import {displaySVG, showImg} from './img';

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



// const timeOut = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

const timeOut = () => {
    const timeOut = setTimeout((displayLoading) => {
       hideLoading();
    },1000)
    return timeOut
}

const clear = () => clearTimeout(timeOut);

// const Data = async (v) => {
//     let t;
//     let c = getData(v).then(data => {
//         return data;
//     }).then(data => {
//         t = timeOut(displayLoading());
        
//         console.log(data); 
//         return data;
//     }).then(data => {
//         clear(t);
//         const {main, weather, name, wind} = data;
//         console.log(main, weather);
//             getName(name);
//             getTemp(main.temp);
//             getWind(wind.speed);
//             return {data};
//     }) 
//     .catch(c => {
//         console.log(c);
//     });
    
// }


const dataAsync = async (v) => {
    try {
        let c;
        getGeoLocation(v).then(async geo => {
            c = await getData(geo['lat'], geo['lon']);
            console.log(c);
            return c;
        }).then(c => {
            const t = timeOut(displayLoading());
            getName(c.name);
            getTemp(Math.round(c.main.temp) + '°');
            getWind(Math.round(c.wind.speed) +'mph');
            getHumidity(c.main.humidity + '%');
            getFeelsLike(c.main.feels_like + '°');
            getWeatherType(c.weather[0].main);
            clear(t);
            // displaySVG(c);
            return c;
        })
    }catch (err) {
        console.log(err);
    }   
}

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

const getWind = (windSpeed) => {
    const wind = document.getElementById('wind-span');
    wind.textContent = windSpeed;
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

export {
    getInputValue,
    displayLoading,
    hideLoading
}