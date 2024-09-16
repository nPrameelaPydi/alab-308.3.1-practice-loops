console.log("practice loops");

//console.log(`*****Part 1*********`);
//Loop through all numbers from 1 to 100.
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.

console.log(`*****Part 1*********`);
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//(`*****Part 2*********`);
//Declare an arbitrary number, n.
//Create a loop that searches for the next prime number, starting at n and incrementing from there.
//As soon as you find the prime number, log that number and exit the loop.

//console.log(`*****************************************************`);
console.log(`*****Part 2*********`);
let n = 120;
//let isPrime = true;
for (let i = n + 1; ; i++) {
    let isPrime = true;

    for (let j = 2; j <= i / 2; j++) {

        if (i % j == 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(i);
        break;
    }
}




