import {getLocalStorage} from './localStorage';
import { changeHeaderOnScroll } from './DOM';
import getTimeAndDate from './getDate';
import { dataAsync } from './app';
import {Date} from './getDate';
import { displayLoading, hideLoading } from './DOM';
import { timeOut } from './app';

const load = () => {
    const input = document.querySelector('#city-input');
    const switchTempType = document.querySelector('#switch-temp-type');
    let cityTemp = getLocalStorage();
    
    window.addEventListener('load', async e => {
        let tempType;
        if (cityTemp === null) {
            return;
        } else {
            try { 
                console.log(cityTemp);
                if (cityTemp === undefined || cityTemp === null) {
                    throw console.error();
                } else {
                    cityTemp = JSON.parse(cityTemp);
                    input.value = cityTemp.city;
                    switchTempType.textContent = cityTemp.FC + '°';
                    if (cityTemp.FC === 'F') {
                        tempType = 'imperial';
                    } else {
                        tempType = 'metric'
                    }
                    await dataAsync(cityTemp.city, tempType);
                }
                // console.log(window.clientInformation);
            } catch (e) {
                console.log(e);
            }
        }
        
    })
}



export default load