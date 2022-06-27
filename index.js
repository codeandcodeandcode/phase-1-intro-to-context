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
