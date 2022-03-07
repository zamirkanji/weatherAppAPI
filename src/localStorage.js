const LOCAL = window.localStorage;

const setLocalStorage = (value, tempType) => {
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