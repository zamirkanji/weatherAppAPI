class Weather {
    constructor({weather, name, wind, main, visibility}) {
        this.weather = weather,
        this.name = name, 
        this.wind = wind, 
        this.main = main,
        this.visibility = visibility
    }

    log() {
        console.log('test' + this.weather);
    }
    getName = (name) => {
        const city = document.querySelector('#city');
        city.textContent = name;
        return name;
    } 
    getTemp = (t) => {
        const temp = document.getElementById('temp-span');
        temp.textContent = t;
        return t;
    }
    getWind = (windSpeed) => {
        const wind = document.getElementById('wind-span');
        wind.textContent = windSpeed;
        return windSpeed;
    }
    getHumidity = (h) => {
        const humidity = document.getElementById('humidity-span');
        humidity.textContent = h;
        return h;
    }
    getFeelsLike = (f) => {
        const feelsLike = document.getElementById('feels-like-span');
        feelsLike.textContent = f;
        return f;
    }
    getWeatherType = (w) => {
        const weather = document.querySelector('#weather');
        weather.textContent = w;
        // displaySVG(w);
        showImg(w);
        return w;
    }
    getVisibility (v) {
        const visibility = document.querySelector('#visibility');
        const vMiles = v / 0.0006213712;
        visibility.textContent = vMiles;
        return vMiles;
    }

    getItem (data, el) {
        const element = document.querySelector(`${el}`);
        element.textContent = data;
    }
}







//USING CLASS WEATHER
// const dataAsync = async (v) => {
//     try {
//         let c;
//         getGeoLocation(v).then(async geo => {
//             c = await getData(geo['lat'], geo['lon']);
//             console.log(c);
//             return c;
//         }).then(c => {
//             const t = timeOut(displayLoading())
//             const weather = new Weather(c)
//             return c;
//         })
//     }catch (err) {
//         console.log(err);
//     }
    
// }



export default Weather;