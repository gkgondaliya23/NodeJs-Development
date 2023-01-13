//*** Array ***


// The Array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under a single variable name, 
// and has members for performing common array operations.


// *** Description ***

// => In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

    // --> JavaScript arrays are resizable and can contain a mix of different data types.
    //     (When those characteristics are undesirable, use typed arrays instead.)

    // --> JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
    //     but must be accessed using nonnegative integers (or their respective string form) as indexes.

    // --> JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and
    //     the last element is at the value of the array's length property minus 1.

    // --> JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects
    //     create shallow copies, rather than deep copies).


//  =>  Relationship between length and numerical properties
       
//     --> A JavaScript array's length property and numerical properties are connected.
       
//     --> Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called.
       
//     --> Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.


// let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// arr.length = 100;
// console.log(typeof arr);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr["10"]);
// arr[50] = 550;
// arr[49] = undefined;
// arr[3.1] = 60;
// console.log(arr);


// let arr = ["ten", 11, "twelve", 13, 14, "15", 16, "17"];
// console.log(arr);

// The length property of an Array object represents the number of elements in that array

// console.log(arr.length);
// arr.length = 100;
// console.log(arr);
// console.log(arr.length);
// arr[9] = undefined;
// arr[5] = undefined;
// arr[5] = 20;
// arr[3.1] = 3.1;
// arr["A"] = "a";
// console.log(arr);
// console.log(arr.length);
// console.log(arr[9]);
// arr.length = 100;
// console.log(arr);
// arr[50] = 50;
// console.log(arr.length);
// arr['50'] = "fifty";
// console.log(arr.length);
// console.log(arr);


// let arr1={"A":"a","B":"b"}
// let arr11=["A":"a","B":"b"]
// console.log(arr1);
// console.log(arr_new[-2]);

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18];
// arr_new.length = 100;
// console.log(arr_new.length);
// arr_new.push(19);  // Last insert
// arr_new.pop();     // Last delete
// console.log(arr_new)

// arr_new.shift();   // First delete
// arr_new.unshift(10);  // First insert
// console.log(arr_new)

//==================================================
// splice 
// arrName.splice(index, count, newElement)     index-> position on the Array       count -> how many element to delete

/*The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 To access part of an array without modifying it, see slice().*/

// arr_new.splice(5);
// arr_new.splice(5, 1);   // remove one element at 5th index position
// arr_new.splice(-4, 2);   // remove 2 element at -4 index position ( - index start right side)
// arr_new.splice(-4, -2);
// arr_new.splice(4, -2);
// arr_new.splice(-3);      // remove 3 element at rigth side
// arr_new.splice(5, 2, 30, 31);        // remove 2 element and add 2 element at 5th index position
// arr_new.splice(5, 2, 30, 31, 32, 33);     // remove 2 element and add 3 element at 5th index position
// arr_new.splice(0, arr_new.length, 30, 31, 32, 33);
// arr_new.splice(0, 0, 30, 31, 32, 33);       // add new element at starting index in Old Array
// arr_new.splice(5,30,31,32,33);
// arr_new.splice(0,5,30,31,32,33);        // add elenment stating index and remove 5 element in old array
// arr_new.splice(5,0,30,31,32,33);     // add element at 5th index position
// console.log(arr_new);
// console.log(arr_new.length);


// console.log(arr_new.splice(2));

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(arr_new.splice(3));
// console.log(arr_new.splice(3, 3));
// console.log(arr_new.splice(3, 3, 21, 22, 23));


//==================================================
// slice()

/*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
where start and end represent the index of items in that array.The original array will not be modified.*/

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// arr_new.slice(2);
// console.log(arr_new.slice(3));
// console.log(arr_new.slice(-3));
// console.log(arr_new.slice(3, 12));
// console.log(arr_new.slice(-3, 2));  // []
// console.log(arr_new.slice(-3, -5));
// console.log(arr_new.slice(-5, -3));
// let new_arr = arr_new.slice();
// console.log(new_arr);

//==================================================
/*** at() ***/

//  => Show Enter a index number on stor elemant :-

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// console.log(arr_new.at(4));  // 14

//==================================================
/*** Join() ***/

//  => Join all element of an array into String.

// console.log(arr_new.join());
// console.log(arr_new.join(""));
// console.log(arr_new.join("-"));
// console.log(typeof arr_new.join());


//==================================================

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled)


// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// console.log(
//     [1, 2, 3, 4, 5].filter((element) => {
//         return element >= 3;
//     })
// ); //[ 3, 4, 5 ]

// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens);


// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];
  
//   const studentGrades = students.filter(student => student.grade >= 90);
//   console.log( studentGrades); 



// console.log(
//     [1, 2, 3, 4, 5].map((element, index) => {
//         return element * 100;
//     }).filter((element, index) => {
//         return element >= 200;
//     })
// );

// console.log(
//     [1, 2, 3, 4, 5].reduce((firstElement, nextElement) => {
//         console.log(firstElement +" - " + nextElement)
//         return firstElement + nextElement;
//     },20)
// );