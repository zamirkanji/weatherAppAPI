import { displayLoading, hideLoading } from "./app";

const getAllData = async (city, unitType) => {
    let DATA;
    // let u;
    try {
        let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        const {lat, lon, state} = GEO[0];
        let [response, forecast] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${unitType}`, {mode: 'cors'}),
            // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${unitType}`, {mode: 'cors'})
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=7706c3d5881905dc71d41abe6fc11974&units=${unitType}`, {mode: 'cors'})
        ]);
        DATA = [await response.json(), await forecast.json()];
        console.log(DATA[0]);
        console.log(DATA[1]);
        const {clouds, weather, main, wind, name, visibility, sys, timezone, rain, snow} = DATA[0];
        const {daily} = DATA[1];
        return {weather, main, wind, name, visibility, sys, timezone, state, daily, clouds, rain, snow};
        //rain and snow are measured in mm
    } catch(e) {
        console.log('rejected', e);
    }
}

export {
    getAllData
}

