/* Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
        var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
Sample Output:  name,sclass,rollno
 */

// const StudentDetail = {
//     name:"Girish Gondaliya",
//     Sclass:"XII",
//     rollNo: 57,
// };
// // console.log(StudentDetail);
// console.log("Name : "+StudentDetail.name);
// console.log("Std : "+StudentDetail.Sclass);
// console.log("Roll no : "+StudentDetail.rollNo);


// Delete Roll no property

const StudentDetail = {
    name:"Girish Gondaliya",
    Sclass:"XII",
    rollNo: 57,
};
// console.log(StudentDetail);
console.log(StudentDetail);
delete StudentDetail.rollNo;
console.log(StudentDetail);
