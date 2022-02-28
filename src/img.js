

// import rain from './animated/rainy-3.svg';

import sunny from './img/julien-flutto-ZEDjKAuS8u0-unsplash.jpg';

// const displaySVG = ({cityName, wind, main}) => {
//     return console.log(wind);
// }



// export {displaySVG}


const showImg = () => {
    const mainContainer = document.querySelector('.main-container');
    const sunnyImg = new Image();
    sunnyImg.src = sunny;
    mainContainer.appendChild(sunnyImg)
}