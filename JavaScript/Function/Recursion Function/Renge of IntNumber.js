// Write a JavaScript program to get the integers in range (x, y).
// Anonymous Function
RangeNum = function (s_num, e_num) {
    if (e_num - s_num === 2)
        return [s_num + 1];
    else {
        let list = RangeNum(s_num, e_num - 1);
        list.push(e_num - 1);
        return list;
    }
}

console.log(RangeNum(2, 8));