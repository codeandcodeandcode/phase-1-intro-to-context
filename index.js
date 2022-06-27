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