import {getLocalStorage} from './localStorage';
import { changeHeaderOnScroll } from './DOM';
import getTimeAndDate from './getDate';
import { dataAsync } from './app';
import {Date} from './getDate';

const load = () => {
    const input = document.querySelector('#city-input');
    const switchTempType = document.querySelector('#switch-temp-type');
    const dateContainer = document.querySelector('.date-container');
    window.addEventListener('DOMContentLoaded', e => {
        let cityTemp = getLocalStorage();
        let tempType;
        let date = new Date();
        if (cityTemp === undefined || cityTemp === null) {
            return;
        } else {
            // dateContainer.textContent = date.currentLocalDate();
            cityTemp = JSON.parse(cityTemp);
            input.value = cityTemp.city;
            switchTempType.textContent = cityTemp.FC + '°';
            if (cityTemp.FC === 'F') {
                tempType = 'imperial';
            } else {
                tempType = 'metric'
            }
            dataAsync(cityTemp.city, tempType);
        }
        console.log(window.clientInformation);
        // getTimeAndDate();
    })
}

export default load