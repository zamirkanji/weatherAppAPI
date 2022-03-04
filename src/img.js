

import rain from './amcharts_weather_icons_1.0.0/animated/rainy-3.svg';
import snow from './amcharts_weather_icons_1.0.0/animated/snowy-3.svg';
import heavySnow from './amcharts_weather_icons_1.0.0/animated/snowy-6.svg';
import cloudy from './amcharts_weather_icons_1.0.0/animated/cloudy.svg';
import clear from './amcharts_weather_icons_1.0.0/animated/day.svg';
import clearNight from './amcharts_weather_icons_1.0.0/animated/night.svg';

import sunny from './img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg';
import rainy from './img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg'

// const displaySVG = (weatherType) => {
//     console.log(weatherType);
//     // const iconSVG = document.querySelector('#iconSVG');
//     const imgSVG = document.querySelector('#iconSVG');
//     // const icon = new Image();
//     if (weatherType === 'Rain') {
//         imgSVG.src = rain;
//     }
//     // appendChild(icon);
// }



// export {displaySVG}

const checkWeather = (temp, weather, time) => {
    const imgIcon = document.querySelector('#imgIcon');
    if (weather === 'Snow') {
        imgIcon.src = snow;
    } else if (weather === 'Clouds') {
        imgIcon.src = cloudy;
    } else if (weather === 'Clear') {
        imgIcon.src = clearNight;
    } else {
        return;
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