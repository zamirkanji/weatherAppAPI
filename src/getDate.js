const getTimeAndDate = () => {
    const myDate = new Date();
    const time = myDate.toLocaleTimeString();
    const date = myDate.toLocaleDateString();
    console.log(time, date);
    return {time, date};
} 

export default getTimeAndDate