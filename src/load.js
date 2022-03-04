import {getLocalStorage} from './localStorage';


const load = () => {
    window.addEventListener('DOMContentLoaded', e => {
        console.log(window.clientInformation);
    })
}

export default load