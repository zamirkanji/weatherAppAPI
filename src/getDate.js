import moment from "moment";


class MyDate {
    constructor(date, sunrise, sunset, time, timezone) {
        this.date = date,
        this.sunrise = sunrise,
        this.sunset = sunset, 
        this.time = time,
        this.timezone = timezone
    }

    getDate() {
        return moment().format('L');
    }

    addSevenDays() {
        let dayPlus7 = moment().add(7, 'days').calendar();
        return dayPlus7;
    }

    currentLocalTimeString() {
        const myDate = new Date();
        const time = myDate.toLocaleTimeString();
        return time;
    }

    currentLocalDateAndTime () {
        // return date.js.time(); // (Time / Zone: "PDT/EDT etc.") => 10:04 AM
        return moment().format('MMMM Do YYYY, h:mm a');
    }

    getSunriseAndSunset() {
        let sr = this.sunrise * 1000;
        sr = new Date(sr.toLocaleTimeString());
        return sr;
    }
    getSunset() {
        this.sunset 
    }
    getSunset() {

    }

    getTimeZone() {
        var d = new Date((new Date().getTime())-25200*1000)
        return d.toISOString()
    }
}


export {
    MyDate
}