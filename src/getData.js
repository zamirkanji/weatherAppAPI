import { displayLoading, hideLoading } from "./app";

const getAllData = async (city, unitType) => {
    const weatherDescrip = document.querySelector('header');
    let DATA;
    // let u;
    try {
        if (weatherDescrip.querySelector('#cityInvalid')) {
            let p = document.querySelector('#cityInvalid');
            weatherDescrip.removeChild(p);
        }
        let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        const {lat, lon, state} = GEO[0];
        let [response, forecast] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${unitType}`, {mode: 'cors'}),
            // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${unitType}`, {mode: 'cors'})
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=7706c3d5881905dc71d41abe6fc11974&units=${unitType}`, {mode: 'cors'})
            // fetch('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=7706c3d5881905dc71d41abe6fc11974')
        ]);
        DATA = [await response.json(), await forecast.json()];
        console.log(DATA[0]);
        console.log(DATA[1]);
        const {clouds, weather, main, wind, name, visibility, sys, rain, snow} = DATA[0];
        const {daily, timezone, timezone_offset} = DATA[1];
        return {weather, main, wind, name, visibility, sys, timezone, timezone_offset, state, daily, clouds, rain, snow};
    } catch(e) {
        console.log('rejected', e);
        if (weatherDescrip.querySelector('#cityInvalid') != null) {
            return;
        }
        cityInvalidText();
    }
}

function cityInvalidText () {
    const p = document.createElement('p');
        p.classList.add('text');
        p.id = 'cityInvalid';
        p.textContent = 'Please enter a valid city';
        weatherDescrip.appendChild(p);
}

export {
    getAllData
}

