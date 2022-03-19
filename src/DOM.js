import { getForecastData } from "./app";
import { checkWeather } from "./img";

class Element {
    constructor() {
        
    }
}

const displayForecast = (daily) => {
    const forecastDay = document.querySelectorAll('.forecastDay');
    let tempArray = getForecastData(daily);
    console.log(tempArray);

    forecastDay.forEach((el, index) => {
        console.log(el.firstChild.id);
        tempArray.forEach((temp, index2) => {
            if (index === index2) {
                // console.log(temp.weatherDescription[0], temp.weatherDescription[1]);
                checkWeather(undefined, temp.weatherDescription[0], temp.weatherDescription[1], `#${el.firstChild.id}`, undefined, undefined);
                // el.textContent = `${temp.maxTemp}/${temp.minTemp}`;
            }
        })
    })
}

const changeHeaderOnScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.header').style.opacity = '.5';
    } else {
        document.querySelector('.header').style.opacity = '1';
    }
};

const selectElement = (selector, removeOrAdd, specificClass) => {
    const item = document.querySelector(`${selector}`);
    item.classList.removeOrAdd(`${specificClass}`);
    return item;
} 


const displayLoading = () => {
    const loader = document.querySelector('#loader');
    const header = document.querySelector('header');
    const main = document.querySelector('#main');
    if (!main.classList.contains('display')) {
        main.classList.add('display');
    }
    // if (!main.classList.contains('visibility')) {
    //     main.classList.add('visibility');
    // }
    header.classList.add('display');
    loader.classList.remove('display');
    loader.classList.add('ripple');
    // loader.classList.add('lds-default');
}

const hideLoading = () => {
    const loader = document.querySelector('#loader');
    const mainBody = document.querySelector('#main');
    const cityContainer = document.querySelector('#city-container');
    const titleContainer = document.querySelector('.title-container');
    const header = document.querySelector('header');
    const main = document.querySelector('#main');

    if (main.classList.contains('display')) {
        main.classList.remove('display');
    }
    loader.classList.remove('ripple');
    loader.classList.add('display');
    header.classList.remove('display');
    cityContainer.classList.remove('display');
    cityContainer.classList.add('city-container');
    mainBody.classList.remove('display');
    mainBody.classList.add('main');
}

export {
    displayLoading,
    hideLoading,
    selectElement,
    changeHeaderOnScroll,
    displayForecast
}