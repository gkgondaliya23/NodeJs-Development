/* Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * * 
*/
let a ='';
for(let i = 1; i<=5;i++)
{
    for(let j = 1; j<=i;j++)
    {
        a += ("* ");
    }
    console.log(a);
    a = '';
}