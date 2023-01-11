/* Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
Sample numbers : -5, -2, 6, 0, -1
Output : 6 
*/
let a = -5, b = -2, c = 6, d = 10, e = -1
if(a>b && a>c && a>d && a>e)
    console.log (a + " is Largest Number.");
else if(b>c && b>d && b>e)
    console.log (b + " is Largest Number.");
else if(c>d && c>e)
    console.log (c + " is Largest Number.");
else if(d>e)
    console.log (d + " is Largest Number.");
else
    console.log (e + " is Largest Number.");