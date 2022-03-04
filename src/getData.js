import { displayLoading, hideLoading } from "./app";


const getData = async (lat, lon, state, unitType = 'imperial') => {
    let DATA;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${unitType}`, {mode: 'cors'});
        // console.log(response);
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            DATA = await response.json();
            console.log(DATA);
            const {weather, main, wind, name, visibility, sys} = DATA;
            let weatherData = {weather, main, wind, name, visibility, sys, state};
            return weatherData;
        }
    } catch (err) {
        console.log('rejected: ', err);
    }
};


const getForecast = async (lat, lon) => {
    let FORECAST;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=imperial`, {mode: 'cors'});
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            FORECAST = await response.json();
            // const {weather, main, wind, name, visibility} = DATA;
            // let weatherData = {weather, main, wind, name, visibility};
            // return weatherData;
            return FORECAST;
        }
    } catch (err) {
        console.log('rejected: ', err);
    }
};


const getGeoLocation = async (city, unitType = null) => {
    
    try {
        let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        console.log(GEO);
        // const lat = GEO[0].lat;
        // const lon = GEO[0].lon;
        const {lat, lon, state} = GEO[0];
        console.log(state);
        if (!unitType === null) {
            return {lat, lon, state, unitType};
        } else {
            return {lat, lon, state};
        }
    } catch (e) {
        console.log(e, 'rejected');
        const newEl = document.createElement('p');
        const main = document.querySelector('main');
        newEl.textContent = 'Please enter a valid City';
        newEl.classList.add('city-valid');
        main.appendChild(newEl);
    }
}

// const getAllData = async (city, unitType = null) => {
//     let DATA;
//     let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
//     let GEO = geoLocation.json().then(GEO => {
//         const {lat, lon, state} = GEO[0];
//         DATA = {lat, lon, state, unitType};
//         return DATA;
//     }).then(async DATA => {
//         let u;
//         if (!unitType === null) {
//             u = unitType;
//         } else {
//             u = 'imperial';
//         }
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${u}`, {mode: 'cors'});
//         return response;
//     }).then(async response => {
//         DATA = await response.json();
//             console.log(DATA);
//             const {weather, main, wind, name, visibility, sys} = DATA;
//             let weatherData = {weather, main, wind, name, visibility, sys, state};
//             console.log(weatherData);
//             return weatherData;
//     }).catch(e => {
//         console.log(e);
//     });  
// }
const getAllData = async (city, unitType = null) => {
    let DATA;
    let u;
    try {
        let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        const {lat, lon, state} = GEO[0];
        console.log(state);
        console.log(state);
            if (!unitType === null) {
                u = unitType;
            } else {
                u = 'imperial';
            }
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${u}`, {mode: 'cors'});
        DATA = await response.json();
        const {weather, main, wind, name, visibility, sys, timezone} = DATA;
        return {weather, main, wind, name, visibility, sys, timezone, state};
        // let weatherData = {weather, main, wind, name, visibility, sys, state};
        // console.log(weatherData);
        // return weatherData;
    } catch(e) {
        console.log('rejected', e);
    }
}

export {
    getGeoLocation,
    getData,
    getForecast,
    getAllData
}

