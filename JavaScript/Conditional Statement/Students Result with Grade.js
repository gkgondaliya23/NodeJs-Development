/* Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
Student Name	Marks           Range       Grade
David	        80              <60	        F
Vinoth	        77              <70	        D
Divya	        88              <80	        C
Ishitha	        95              <90	        B
Thomas	        68              <100	    A
*/

let student = [["David",80],["Vinoth",77],["Divya",88],["Ishita",95],["Thomas",68]];
let avgmarks = 0;
for(let i = 0; i< student.length; i++)
{
    avgmarks += student[i][1];
}
let avg = avgmarks / student.length;
console.log("Average Marks: " + avg);
if(avg< 60)
    console.log("Grade F");
else if(avg< 70)
    console.log("Grade D");
else if(avg< 80)
    console.log("Grade C");
else if(avg< 90)
    console.log("Grade B");
else 
    console.log("Grade A");
