// Write a function that will reverse a string as output (any string), using recursion e.g. Hello -> olleH

let reverseWords=(s)=>{
    return s.split('').reverse().join('');
}
console.log(reverseWords('hello'));


// Write a function that will take two arguments. First argument should be a sentence, second one should be one word. Return how many times the word had appeared in that sentence.

function wordDuplicate(string, word) {
    return string.split(word).length - 3;
 }
let text="This was a hot summer, and a very dry one"; 
let count= wordDuplicate(text,"a"); 
console.log(count);

// Fibonacci sequence for any number


function fibonacci(n){
    if(n<2){
        return n;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
let number=prompt(`Enter the number `);
if (number<0) {
    console.log("Enter positive number")
}
else{
    for (let index = 0; index < number; index++) {
        console.log(fibonacci(index));
        
    }
}



