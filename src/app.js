import getData from "./getData";

const getInputValue = () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let v = input.value;
        Data(v);
        
    })
}

const displayLoading = () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.remove('display');
    }, 3000);
}

const hideLoading = () => {
    const loader = document.getElementById('loader');
    const mainBody = document.querySelector('#main');
    loader.classList.add('display');
    mainBody.classList.remove('display');
}

const Data = async (v) => {
    let c = getData(v).then(data => {
        hideLoading();
        console.log(data); 
        const {main, weather, name, wind} = data;
        console.log(main, weather);
            getName(name);
            getTemp(main.temp);
            getWind(wind.speed);
    })   
    .catch(c => {
        console.log(c);
    });
    
}

const getName = (name) => {
    const city = document.querySelector('#city');
    city.textContent = name;
    return name;
}

const getTemp = (t) => {
    const temp = document.getElementById('temp');
    temp.textContent = t;
    return t;
}

const getWind = (windSpeed) => {
    const wind = document.getElementById('wind');
    wind.textContent = windSpeed;
    return windSpeed;
}

export {
    getInputValue,
    displayLoading,
    hideLoading
}