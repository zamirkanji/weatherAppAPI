import { displayLoading, hideLoading } from "./app";

const getAllData = async (city, unitType = undefined) => {
    let DATA;
    let u;
    try {
        let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        const {lat, lon, state} = GEO[0];
            if (!unitType === undefined) {
                u = unitType;
            } else {
                u = 'imperial';
            }
        
        // let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${u}`, {mode: 'cors'});
        // let forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${u}`, {mode: 'cors'});
        let [response, forecast] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${u}`, {mode: 'cors'}),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${u}`, {mode: 'cors'})
        ]);
        // DATA = await response.json();
        // forecast = await forecast.json();
        DATA = [await response.json(), await forecast.json()];
        console.log(DATA[0]);
        const {clouds, weather, main, wind, name, visibility, sys, timezone} = DATA[0];
        const {list} = DATA[1];
        return {weather, main, wind, name, visibility, sys, timezone, state, list, clouds};
    } catch(e) {
        console.log('rejected', e);
    }
}

export {
    getAllData
}

