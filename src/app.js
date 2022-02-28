import {getData, getGeoLocation} from "./getData";
import { displayLoading, hideLoading } from "./DOM";
// import {displaySVG} from './img.js';

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
        // let c = await getGeoLocation(v);
        // console.log(c);
        getGeoLocation(v).then(async geo => {
            console.log(geo);
            c = await getData(geo['lat'], geo['lon']);
            console.log(c);
            return c;
        }).then(c => {
            const t = timeOut(displayLoading());
            getName(c.name);
            getTemp(Math.round(c.main.temp) + '°');
            getWind(Math.round(c.wind.speed) +'mph');
            getHumidity(c.main.humidity + '%');
            clear(t);
            // displaySVG(c);
            return c;
        })
    }catch (err) {
        console.log(err);
    }
    
}
//async class that has getname, gettemp, etc as methods
// class Data {
    
//     constructor() {

//     }
//     getName = (name) => {
//         const city = document.querySelector('#city');
//         city.textContent = name;
//         return name;
//     }
    
//     getTemp = (t) => {
//         const temp = document.getElementById('temp');
//         temp.textContent = t;
//         return t;
//     }
    
//     getWind = (windSpeed) => {
//         const wind = document.getElementById('wind');
//         wind.textContent = windSpeed;
//         return windSpeed;
//     }
//     getHumidity = (humidity) => {
//         const wind = document.getElementById('wind');
//         wind.textContent = humidity;
//         return humidity;
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

export {
    getInputValue,
    displayLoading,
    hideLoading
}