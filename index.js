// Your code here
// Added createEmployeeRecords dunction 
function createEmployeeRecords(arr) {
    let lgArr = [];
    arr.forEach(a => {
        let t = createEmployeeRecord(a)
        lgArr.push(t)
    });
    return lgArr;
}

// Added createEmployeeRecords dunction 
function createEmployeeRecords(arr) {
    let lgArr = [];
    arr.forEach(a => {
        let t = createEmployeeRecord(a)
        lgArr.push(t)
    });
    return lgArr;
}

// Added createTimeInEvent function 
function createTimeInEvent(obj, dt) {
    let d = dt.split(" ");
    let to = {
        type: "TimeIn",
        hour: parseInt(d[1]),
        date: d[0],
    }
    obj.timeInEvents.push(to)
    return obj;
}

//Added createTimeOutEvent function
function createTimeOutEvent(obj, dt) {
    let d = dt.split(" ");
    let to = {
        type: "TimeOut",
        hour: parseInt(d[1]),
        date: d[0],
    }
    obj.timeOutEvents.push(to)
    return obj;
}

//Added hoursWorkedOnDate func
function hoursWorkedOnDate(obj, dt) {
    let a  = obj.timeInEvents.find(a=>a.date === dt);
    let b  = obj.timeOutEvents.find(a=>a.date === dt);
    return (b.hour - a.hour) / 100;
}

//Added wagesEarnedOnDate function
function wagesEarnedOnDate(obj, dt) {
    let c = Math.floor(hoursWorkedOnDate(obj, dt) * obj.payPerHour);
    return c;
}
