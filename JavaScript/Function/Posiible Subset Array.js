// JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function subSet(arr, size)
{
    let res = [];
    let result;
    for(let i = 0; i < Math.pow(2, arr.length); i++)
    {
        result = [];
        x = arr.length - 1;
        do{
            if((i & (1 << x)) !== 0)
            {
                result.push(arr[x]);
            }
        }while(x--);
        if(result.length >= size)
            res.push(result);
    }

    return res;
 }
 console.log(subSet([1, 2, 3], 2));