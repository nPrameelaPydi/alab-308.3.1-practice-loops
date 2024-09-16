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

console.log(`                                          `);
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


console.log(`                                          `);
console.log(`*****Part 3*********`);

let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.0800,7,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232\n";

let cell = 1;
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let temp = '';

for (const c of csv) {
    if(c == '\n'){
        cell4 = temp;
        cell = 1;
        console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`);
        temp ='';
    }else if(c == ',') {
        if(cell == 1){
            cell1 = temp;
        }else if(cell == 2){
            cell2 = temp;
        }else if(cell == 3){
            cell3 = temp;
        }       
        cell = cell+1;
        temp ='';
    }else {
        temp = temp + c;
    }
    
}

console.log(`                         `)
console.log(`************string 2*************`)

let csv2 ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";

for (const c of csv2) {
    if(c == '\n'){
        cell4 = temp;
        cell = 1;
        console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`);
        temp ='';
    }else if(c == ',') {
        if(cell == 1){
            cell1 = temp;
        }else if(cell == 2){
            cell2 = temp;
        }else if(cell == 3){
            cell3 = temp;
        }       
        cell = cell+1;
        temp ='';
    }else {
        temp = temp + c;
    }
    
}




















//for (let i in csv) {
//    console.log(i);
//}

//let csv = `63,Blaine,Quiz Master,58`;
//let comma_index = 0;
//let cell1 = '';
//let row = 0;

// if csv[i] == '\n' from that index should start in new row row++
//if csv[i] == ',' storing should move to next cell, cel++



//for (let i=0; i<=3; i++){
//    if (csv[i] == '\n'){
        
//    }
//}




//for (const c of csv) {
//for (i = 0; csv[i] != ','; i++) {
//    cell1 = cell1 + csv[i];
//}
//comma_index = i;
//console.log(cell1);
//console.log(comma_index);
//break;
//}
//for (const c of csv) {
//    for (i = comma_index+1; csv[i] == ', || \n'; i++) {
//        cell1 = cell1 + csv[i];
//    }
//    comma_index = i;
//    break;
//}






