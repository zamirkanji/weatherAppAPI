class Element {
    constructor() {
        
    }
}

const displayLoading = () => {
    const loader = document.querySelector('#loader');
    loader.classList.remove('display');
    loader.classList.add('ripple');
}

const hideLoading = () => {
    const loader = document.querySelector('#loader');
    const mainBody = document.querySelector('#main');
    const cityContainer = document.querySelector('#city-container');
    loader.classList.remove('ripple');
    loader.classList.add('display');
    cityContainer.classList.remove('display');
    cityContainer.classList.add('city-container');
    mainBody.classList.remove('display');
    mainBody.classList.add('main');
}

export {
    displayLoading,
    hideLoading
}