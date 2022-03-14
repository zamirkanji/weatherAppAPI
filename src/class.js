// import { MyDate } from "./getDate";

// class Weather {
//     constructor({weather, name, wind, main, visibility, sys, daily, sunrise, sunset}) {
//         this.weather = weather,
//         this.name = name, 
//         this.wind = wind, 
//         this.main = main,
//         this.visibility = visibility,
//         this.sys = sys,
//         this.daily = daily,
//         this.sunrise = sunrise,
//         this.sunset = sunset
//     }

//     log() {
//         console.log('test' + this.weather);
//     }
//      getName (name, state)  {
//         const city = document.querySelector('#city');
//         city.textContent = `${name}, ${state}`;
//         return name;
//     }
    
//      getTemp (t)  {
//         const temp = document.getElementById('temp-span');
//         temp.textContent = t;
//         return t;
//     }
    
//      getWind  (windSpeed, dir)  {
//         const wind = document.getElementById('wind-span');
//         // console.log(dir);
//         // let direction;
//         // if (dir < 11.25 && dir >= 348.75) {
//         //     direction === 'N';
//         // } else if (dir <= 33.75 && dir >= 11.25) {
//         //     direction === 'NNE';
//         // } else if (dir <= 56.25 && dir >= 33.75) {
//         //     direction === 'NE';
//         // } else if (dir <= 78.75 && dir >= 56.25) {
//         //     direction === 'ENE';
//         // } else if (dir <= 101.75 && dir >= 78.75) {
//         //     direction === 'E';
//         // } else if (dir <= 123.75 && dir >= 101.25) {
//         //     direction === 'ESE';
//         // } else if (dir <= 146.25 && dir >= 123.75) {
//         //     direction === 'SE';
//         // } else if (dir <= 168.75 && dir >= 146.25) {
//         //     direction === 'SSE';
//         // } else if (dir <= 191.25 && dir >= 168.75) {
//         //     direction === 'S';
//         // } else if (dir <= 213.75 && dir >= 191.25) {
//         //     direction === 'SSW';
//         // } else if (dir <= 236.25 && dir >= 213.75) {
//         //     direction === 'SW';
//         // } else if (dir <= 258.75 && dir >= 236.25) {
//         //     direction === 'WSW';
//         // } else if (dir <= 281.25 && dir >= 258.75) {
//         //     direction === 'W';
//         // } else if (dir <= 303.75 && dir >= 281.25) {
//         //     direction === 'WNW';
//         // } else if (dir <= 326.25 && dir >= 303.75) {
//         //     direction === 'NW';
//         // } else if (dir <= 348.75 && dir >= 326.25) {
//         //     direction === 'NNW';
//         // } else {
//         //     // console.log(Error);
//         // }
//         // console.log(direction);
//         // wind.textContent = `${windSpeed} mph ${direction}`;
//         wind.textContent = `${windSpeed} mph`;
//         return windSpeed;
//     }
    
//      riseSet (rise, set, tz, timezone_offset)  {
//         let sunR = new Date(rise);
//         let sunS = new Date(set);
//         // const options = {timezone: timezone, timeZoneName: 'long'};
//         console.log(sunR.toLocaleString('en-US', {timeZone: tz}));
//         console.log(sunS.toLocaleTimeString('en-US', {timeZone: tz}));
//         console.log(sunS.getTimezoneOffset(timezone_offset));
//         // console.log(sunR.currentLocalDateAndTime())
//         // console.log(sunS.toLocaleDateString('en-US'));
//     }
    
//     dateForForecast ()  {
//         const forecastDate = document.querySelector('#forecast-date');   
//         let myDate = new MyDate();
//         let todaysDate = myDate.getDate();
//         let sevenDays = myDate.addSevenDays();
//         forecastDate.textContent = `${todaysDate} - ${sevenDays}`;
//     }
//     getHumidity (h)  {
//         const humidity = document.getElementById('humidity-span');
//         humidity.textContent = h;
//         return h;
//     }
//      getFeelsLike (f)  {
//         const feelsLike = document.getElementById('feels-like-span');
//         feelsLike.textContent = f;
//         return f;
//     }
//      getWeatherType (w, d)  {
//         const weather = document.querySelector('#weather');
//         const weatherDescrip = document.querySelector('#weather-descrip');
//         weather.textContent = `${w}, ${d}`;
//         // weatherDescrip.textContent = d;
//         // showImg(w);
//         return w;
//     }
    
//      getCloudCover (cc)  {
//         const cloudCover = document.querySelector('#cloud-cover-span');
//         cloudCover.textContent = cc;
//         return cc;
//     }
    
//      getPressure  (p) {
//         const pressure = document.querySelector('#pressure-span');
//         pressure.textContent = p;
//         return p;
//     }
    
//      getVisibility  (v, m) {
//         const visibility = document.querySelector('#visibility-span');
//         // const vMiles =  0.00062 / v;
//         const vMiles = v / 1609.34;
//         visibility.textContent = Math.round(vMiles) + ' ' + m;
//         return vMiles;
//     }
    
//      getForecastData  (daily) {
//         // const d = new Weather(c);
//         const forecastDay = document.querySelectorAll('.forecastDay');
//         let dailyTemps = [];
//         for (const obj of daily) {
//             let maxTemp = obj.temp.max;
//             let minTemp = obj.temp.min;
//             let weatherDescription = [obj.weather[0].main, obj.weather[0].description];
//             dailyTemps.push({maxTemp, minTemp, weatherDescription});
//         }
//         console.log(dailyTemps);
//         return dailyTemps;
//     }

//     setItem (data, el) {
//         const element = document.querySelector(`${el}`);
//         element.textContent = data;
//     }
// }



// export default Weather;