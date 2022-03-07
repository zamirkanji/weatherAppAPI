import rain from './amcharts_weather_icons_1.0.0/animated/rainy-3.svg';
import heavyRain from './amcharts_weather_icons_1.0.0/animated/rainy-6.svg';
import snow from './amcharts_weather_icons_1.0.0/animated/snowy-3.svg';
import heavySnow from './amcharts_weather_icons_1.0.0/animated/snowy-6.svg';
import cloudy from './amcharts_weather_icons_1.0.0/animated/cloudy.svg';
import partlyCloudy from './amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg';
import clear from './amcharts_weather_icons_1.0.0/animated/day.svg';
import clearNight from './amcharts_weather_icons_1.0.0/animated/night.svg';

import sunny from './img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg';
import rainy from './img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg';

import getTimeAndDate from './getDate';



const checkWeather = (temp, weather, description, qSelect) => {
    // let d = getTimeAndDate();
    console.log(description);
    const imgIcon = document.querySelector(`${qSelect}`);
    if (weather === 'Snow') {
        if (description === 'heavy snow') {
            imgIcon.src = heavySnow;
        }
    }
    if (weather === 'Clouds') {
        if (description === 'few clouds') {
            imgIcon.src = partlyCloudy;
        }
        if (description === 'overcast clouds') {
            imgIcon.src = cloudy;
        }
        if (description === 'scattered clouds') {
            imgIcon.src = partlyCloudy;
        }
        if (description === 'broken clouds') {
            imgIcon.src = partlyCloudy;
        }
    }
    if (weather === 'Rain') {

    }
    if (weather === 'Clear') {
        if (description === 'clear sky') {
            imgIcon.src = clear;
        }
    }
    if (weather === 'Mist') {
        imgIcon.src = cloudy;
    }
}


const showImg = (weatherType) => {
    const mainContainer = document.querySelector('.main-container');
    const sunnyImg = new Image();
    // if (weatherType === 'Rain') {
    //     sunnyImg.src = rainy;
    //     document.body.classList.remove('body-default');
    //     document.body.classList.add('background-rain');
    //     // document.body.style.background = 'url(./img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg) no-repeat center cover';
    //     // document.body.classList.add('background');
    // }
    // // sunnyImg.src = sunny;
    mainContainer.appendChild(sunnyImg)
}

export {
    // displaySVG, 
    showImg,
    checkWeather
}