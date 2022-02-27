import { displayLoading, hideLoading } from "./app";

const getData = async (city) => {
    // displayLoading();
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7706c3d5881905dc71d41abe6fc11974`, {mode: 'cors'});
        if(!response.ok) {
            throw new Error(response.status);
        } 
        return await response.json();
    } catch (err) {
        console.log('rejected: ', err);
    }
};

export default getData

