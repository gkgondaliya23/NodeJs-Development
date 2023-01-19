//  Write a JavaScript program to get the length of a JavaScript object.
const StudentDetail = {
    name: "Girish Gondaliya",
    Sclass: "XII",
    rollNo: 57,
    result: 50.67,
    grade: "A+"
};
Object.objSize =  (Myobj) => {
    let objsize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key))
            objsize++;
    }
    return objsize;
}
let Osize = Object.objSize(StudentDetail);
console.log("Number of Object is : " + Osize);