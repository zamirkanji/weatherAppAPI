import getData from "./getData";

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



export default getInputValue