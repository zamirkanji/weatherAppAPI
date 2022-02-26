const getData = async () => {
    let DATA;
    try {
        let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7706c3d5881905dc71d41abe6fc11974', {mode: 'cors'});
        DATA = await response.json();
        console.log(DATA);
        // return DATA;
    } catch (e) {
        console.log('rejected: ', e);
    }
    return DATA;
};

export default getData

