// import { mode } from "../webpack.config";
import { displayLoading, hideLoading } from "./app";


const getData = async (lat, lon) => {
    console.log(lat, lon);
    let DATA;
    // let GEO = await getGeoLocation();
    // console.log(GEO);
    try {
        // let geoLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7706c3d5881905dc71d41abe6fc11974&units=imperial`, {mode: 'cors'});
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            console.log(response);
            DATA = await response.json();
            // GEO = await geoLocation.json();
            // console.log(GEO);
            console.log(DATA);
            const {weather, main, wind, name} = DATA;
            let weatherData = {weather, main, wind, name};
            return weatherData;
        }
        
    } catch (err) {
        console.log('rejected: ', err);
    }
};

const getGeoLocation = async (city) => {
    try {
        let geoLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        let GEO = await geoLocation.json();
        console.log(GEO);
        const lat = GEO[0].lat;
        const lon = GEO[0].lon;
        return {lat, lon};
        // const data = await (getData(lat, lon));
        // console.log(data);
        // return data;
    } catch (e) {
        console.log(e, 'rejected');
    }
}

export {
    getGeoLocation,
    getData
}

