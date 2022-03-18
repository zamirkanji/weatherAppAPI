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
import { getLocalStorage } from './localStorage';

const checkTempType = () => {
    let tt = getLocalStorage();
    tt = JSON.parse(tt);
    tt = tt.FC;
    // console.log(tt);
    return tt;
}

const displaySnowAmount = (a, tt) => {
    if (tt === 'F') {
        let snowInches = a / 25.4;
        snowInches = `${Math.round(snowInches * 100) / 100} inches`;
        console.log(snowInches);
        return snowInches;
    }
    if (tt === 'C') {
        let snowMM = a;
        snowMM = snowMM + 'mm'
        return snowMM;
    }
}

const displayRainAmount = (a, tt) => {
    if (tt === 'F') {
        let rainInches = a / 25.4;
        rainInches = `${Math.round(rainInches * 100) / 100} inches`;
        return rainInches;
    }
    if (tt === 'C') {
        let rainMM = a;
        rainMM = rainMM + 'mm'
        return rainMM;
    }
}

const checkWeather = (temp, weather, description, qSelect, snowAmount, rainAmount) => {
    // let d = getTimeAndDate();
    // console.log(temp, rainAmount);
    console.log(qSelect);
    let dataTrue; 
    if (!snowAmount === undefined) {
        dataTrue = true;
    } else {
        dataTrue = false;
    }
    if (!rainAmount === undefined) {
        dataTrue = true;
    } else {
        dataTrue = false;
    }
    // console.log(description);
    // console.log(snowAmount);
    const imgIcon = document.querySelector(`${qSelect}`);
    const amountContainer = document.querySelector('#amount-container'); 
    let tt = checkTempType();
    if (weather === 'Snow') {
        if (dataTrue) {
            let a = displaySnowAmount(snowAmount, tt);
            // a = Math.round(a * 100) / 100;
            amountContainer.textContent = `It has snowed ${a} in the last Hour`;
        }

        if (description === 'heavy snow') {
            imgIcon.src = heavySnow;
        }
        if (description === 'snow') {
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
        let a = displayRainAmount(rainAmount, tt);
        // console.log(rainAmount);
        a = Math.round(a * 100) / 100;
        amountContainer.textContent = `It has rained ${a} in the last Hour`;

        if (description === 'light rain') {
            imgIcon.src = rain;
        }
        if (description === 'moderate rain') {
            imgIcon.src = heavyRain;
        }
        if (description === 'heavy intensity rain') {
            imgIcon.src = heavyRain;
        }

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