const LOCAL = window.localStorage;

// window.localStorage.clear();

const setLocalStorage = (value, tempType) => {
    if (LOCAL.length > 0) {
        let getFirstItem = LOCAL.getItem('cityTemp');
        console.log(getFirstItem);
    }
    let cityTemp = {city: value, FC: tempType};
    cityTemp = JSON.stringify(cityTemp);
    return LOCAL.setItem('cityTemp', cityTemp);
}

const getLocalStorage = (value) => {
    const key = LOCAL.key(0);
    return LOCAL.getItem(key);
}

export {
    setLocalStorage,
    getLocalStorage
}