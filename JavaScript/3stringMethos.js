/* String Methods:-
        String length                   String concat()
        String slice()                  String trim()
        String substring()              String trimStart()
        String substr()                 String trimEnd()
        String replace()                String padStart()
        String replaceAll()             String padEnd()
        String toUpperCase()            String charAt()
        String toLowerCase()            String charCodeAt()
        String split()
*/

// string length -> use for find for string length
// let text = "Hello world!";
// let len = text.length;
// console.log(len);   // 12

// string slice    -> sub string of given string
// let text = "Apple, Banana, Kiwi";
// let length =text.slice(7, 13);   // (staring point, ending point)
// console.log(length);     // Banana

// let text = "Apple, Banana, Kiwi";
// let length =text.slice(7);	// only staring point
// console.log(length);     // Banana, Kiwi

// let text = "Apple, Banana, Kiwi";
// let length =text.slice(-12);	// negative index satrt with -1 and counting satrt with right side
// console.log(length);     // Banana, Kiwi

// let text = "Apple, Banana, Kiwi";
// let length =text.slice(-12,-6);	// negative index satrt with -1 and counting satrt with right side
// console.log(length);    // Banana

// String substring()    -> sub string of given string
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7,13);
// console.log(part);     // Banana

// String substr()      -> sub string of given string
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7,6);
// console.log(part);     // Banana

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4);  // negative index counting satrt with right side
// console.log(part);     // Kiwi

// String replace()        -> replace word to given string
// let str = "I like apple";
// let part =  str.replace("apple", "Kiwi");
// console.log(part); // I like Kiwi


// String replaceAll()      -> replace all same word to given string
// let str = "I like apple. apple is rounded shape.";
// let part =  str.replaceAll("apple", "Kiwi");
// console.log(part); // I like Kiwi. Kiwi is rounded shape.


// // String toUpperCase()    -> convert to upper case string
// let text  = "Hello world!";
// let part = text.toUpperCase(text);
// console.log(part); // HELLO WORLD!

// String toLowerCase()         -> convert to lower case string
// let text  = "Hello world!";
// let part = text.toLowerCase(text);
// console.log(part); // hello world!


 // String concat()     -> two strings are concatenated in a string
// let text1  = "Hello";
// let text2  = "World!";
// let part = text1.concat(" "+text2);
// console.log(part); // Hello World!

// String trim()        -> extra space deleted both side.
// let text = "       Hello world       ";
// let part = text.trim(text);
//  console.log(part); //        Hello world       

// String trimStart()   -> extra space deleted starting side.
// let text = "       Hello world       ";
// let part = text.trimStart(text);
//  console.log(part); // Hello world       

// String trimEnd()     -> extra space deleted ending side.
// let text = "       Hello world       ";
// let part = text.trimEnd(text);
// console.log(part); //        Hello world

// String padStart()
// let text = "5";
// let part = text.padStart(2,0);
// console.log(part); // 05


// String padEnd()
// let text = "5";
// let part = text.padEnd(3,0);
// console.log(part); // 500

// String charAt()   
// let text = "Hello";
// let part = text.charAt(0);
// console.log(part); // H

// String charCodeAt()    --> unicode of the character of given index
// let text = "Hello";
// let part = text.charCodeAt(0);
// console.log(part); // 72

// Stringb split()      --> split a string
let text = "H,e,l,l,o";
let part = text.split(",");
console.log(part);  // [ 'H', 'e', 'l', 'l', 'o' ]