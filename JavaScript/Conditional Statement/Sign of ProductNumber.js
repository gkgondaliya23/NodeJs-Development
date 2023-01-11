/* Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -
*/

let a = 3, b = -7, c = 2;
if (a > 0 && b > 0 && c > 0)
    console.log("The sign is +");
else if(a<0 && b<0 && c<0)
    console.log("The sign is -");
else if(a>0 && b<0 && c<0)
    console.log("The sign is +");
else if(a<0 && b>0 && c<0)
    console.log("The sign is +");
else
    console.log("The sign is -");
