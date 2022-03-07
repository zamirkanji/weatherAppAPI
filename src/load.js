import {getLocalStorage} from './localStorage';
import { changeHeaderOnScroll } from './DOM';
import getTimeAndDate from './getDate';
import { dataAsync } from './app';

const load = () => {
    const input = document.querySelector('#city-input');
    window.addEventListener('DOMContentLoaded', e => {
        let cityTemp = getLocalStorage();
        if (cityTemp === undefined || cityTemp === null) {
            return;
        } else {
            cityTemp = JSON.parse(cityTemp);
            input.value = cityTemp.city;
            dataAsync(cityTemp.city, cityTemp.FC);
        }
        // console.log(window.clientInformation);
        // getTimeAndDate();
    })
}

export default load