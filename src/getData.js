import { displayLoading, hideLoading } from "./app";

const getData = async (city) => {
    // displayLoading();
    let DATA;
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            console.log(response);
            DATA = await response.json();
            const {weather, main, wind, name} = DATA;
            let weatherData = {weather, main, wind, name};
            return weatherData;
        }

    } catch (err) {
        console.log('rejected: ', err);
    }
};

export default getData

