import getData from "./getData";

let d = getData();

const getInputValue = () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');
    const submitBtn = document.querySelector('#submit-btn');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const v = input.value;
        console.log(v);
    })
}

const getCity = async () => {
    let x =  await getData();
    console.log(x);
    // x.then(r => {
    //     console.log(r);

    //     console.log(r.weather);
    //     console.log(r.main);
    //     console.log(r.name);
    // })
    // .catch(rej => {
    //     console.log('error', rej);
    // })
}

getCity();

export {
    getInputValue,
    getCity
}