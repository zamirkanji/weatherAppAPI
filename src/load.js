import {getLocalStorage} from './localStorage';
import { changeHeaderOnScroll } from './DOM';
import getTimeAndDate from './getDate';

const load = () => {
    window.addEventListener('DOMContentLoaded', e => {
        console.log(window.clientInformation);
        // console.log(document.body.clie)
        // window.onscroll(changeHeaderOnScroll())
        getTimeAndDate();
    })
}

export default load