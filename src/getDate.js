class Date {
    constructor(date, sunrise, sunset, time, timezone) {
        this.date = date,
        this.sunrise = sunrise,
        this.sunset = sunset, 
        this.time = time,
        this.timezone = timezone
    }

    getDate() {
        return this.date;
    }

    currentLocalTimeString() {
        const myDate = new Date();
        const time = myDate.toLocaleTimeString();
        return time;
    }

    getSunriseAndSunset() {
        // let sun = [this.sunrise, this.sunset];
    
        // // const milliseconds = 1575909015 * 1000 // 1575909015000
        // sun = sun.map(i => i * 1000);
        // console.log(sun);
    
        // sunriseUnix = new Date(sun[0]);
        // sunsetUnix = new Date(sun[1]);
        // sunriseUnix = new Date(sun[0]).toLocaleTimeString();
        // sunsetUnix = new Date(sun[1]).toLocaleTimeString();
        // sun = [sunriseUnix, sunsetUnix];
    
        // // sunrise = sunriseUnix.toLocaleString('en-US');
        // // sunset = sunsetUnix.toLocaleString("en-US", {timeZoneName: "short"});
        // // sun = [sunrise, sunset];
        // console.log(sun);

        let sr = this.sunrise * 1000;
        sr = new Date(sr.toLocaleTimeString());
        return sr;
    }
    getSunset() {

    }

    getTimeZone() {
        var d = new Date((new Date().getTime())-25200*1000)
        return d.toISOString()
    }
}


// const getTimeAndDate = () => {
//     const myDate = new Date();
//     const time = myDate.toLocaleTimeString();
//     const date = myDate.toLocaleDateString();
//     return {time, date};
// } 

// const getPST = () => {
//     const myDate = new Date();
//     const pst = new Date(myDate.to)
// }

// export default getTimeAndDate