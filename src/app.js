import getData from "./getData";

const getInputValue = () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');
    const mainBody = document.querySelector('#main');

    form.addEventListener('submit', async (e) => {
        if(mainBody.classList.contains('main')) {
            mainBody.classList.remove('main');
            mainBody.classList.add('display');
        }
        e.preventDefault();
        let v = input.value;
        Data(v);
        
    })
}

const displayLoading = () => {
    const loader = document.querySelector('#loader');
    loader.classList.remove('display');
    loader.classList.add('ripple');
}

const hideLoading = () => {
    const loader = document.querySelector('#loader');
    const mainBody = document.querySelector('#main');
    loader.classList.remove('ripple');
    loader.classList.add('display');
    mainBody.classList.remove('display');
    mainBody.classList.add('main');
}

// const timeOut = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

const timeOut = () => {
    const timeOut = setTimeout((displayLoading) => {
       hideLoading();
    },1000)
    return timeOut
}

const clear = () => clearTimeout(timeOut);

// const Data = async (v) => {
//     let t;
//     let c = getData(v).then(data => {
//         return data;
//     }).then(data => {
//         t = timeOut(displayLoading());
        
//         console.log(data); 
//         return data;
//     }).then(data => {
//         clear(t);
//         const {main, weather, name, wind} = data;
//         console.log(main, weather);
//             getName(name);
//             getTemp(main.temp);
//             getWind(wind.speed);
//             return {data};
//     }) 
//     .catch(c => {
//         console.log(c);
//     });
    
// }


const Data = async (v) => {
    try {
        let c = await getData(v);
        const t = timeOut(displayLoading());
        getName(c.name);
        getTemp(c.main.temp);
        getWind(c.wind.speed);
        clear(t);
        return c;
    }catch (err) {
        console.log(err);
    }
    
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