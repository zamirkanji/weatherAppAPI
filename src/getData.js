import { displayLoading, hideLoading } from "./app";

const getAllData = async (city, unitType = null) => {
    let DATA;
    let u;
    try {
        let geoLocation = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        const {lat, lon, state} = GEO[0];
            if (!unitType === null) {
                u = unitType;
            } else {
                u = 'imperial';
            }
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=${u}`, {mode: 'cors'});
        DATA = await response.json();
        const {weather, main, wind, name, visibility, sys, timezone} = DATA;
        return {weather, main, wind, name, visibility, sys, timezone, state};
    } catch(e) {
        console.log('rejected', e);
    }
}

export {
    getAllData
}

