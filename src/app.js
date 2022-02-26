import getData from "./getData";

const g = async() => {
    let x = await getData();
    console.log(x);
    return x;
}

const getInputValue = () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#city-input');
    const submitBtn = document.querySelector('#submit-btn');
    const city = document.querySelector('#city');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let v = input.value;
        let c = await getData(v);
        city.textContent = c.name;
    })
}

// const getCity = async (v) => {
//     const city = document.querySelector('#city');
//     let x = await g();
//     console.log(x.name);
//     city.textContent = x.name;
// }

// getCity();

// const getCity = async () => {
//     let x =  await getData();
//     console.log(x);
//     // x.then(r => {
//     //     console.log(r);

//     //     console.log(r.weather);
//     //     console.log(r.main);
//     //     console.log(r.name);
//     // })
//     // .catch(rej => {
//     //     console.log('error', rej);
//     // })
// }

// getCity();

export {
    getInputValue,
}