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

//Added allWagesFor function
function allWagesFor(obj) {
    let dates = obj.timeInEvents;
    let total = 0;
    dates.forEach(d=>{
     total += wagesEarnedOnDate(obj, d.date);
    })
    return total;
 }

 //Added findEmployeeByFirstName function
function findEmployeeByFirstName(arr, name) {
    let f = arr.find(a=>a.firstName === name)
    if(f) return f;
    return undefined;
}

//Added calculatePayroll function
function calculatePayroll(arr) {
    let s = 0;
    arr.forEach(a=>s+=allWagesFor(a))
    return s;

    
}
