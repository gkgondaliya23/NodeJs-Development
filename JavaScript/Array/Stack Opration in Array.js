// Array Stack Opration
const arr =[];
function LastInsert(val)
{
    arr.push(val);
}
let LastDelete = () => arr.pop();
let FirstInsert = (val) => arr.unshift(val);
let FirstDelete = () => arr.shift();
let Display = () => console.log(arr);
LastInsert(100);
LastInsert(200);
LastInsert(300);
LastInsert(400);
Display();
FirstInsert(10);
Display();
LastDelete();
Display();
FirstDelete()
Display();