'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    // let s = decimalToBinary(n);
    
    // while (s.length < 32){
    //     s = "0" + s;
    // }
    // for (let i = 0; i < s.length; i++){
    //     if (s[i] == "0"){
    //         s = setCharAt(s,i,'1');
    //     } else {
    //         s = setCharAt(s,i,'0');
    //     }
    // }
    // return binaryToDecimal(s);
    return ~n >>> 0;
}

// function decimalToBinary(dec){
//     let j = 1;

//     while ((2 ** j) <= dec){
//         j++;
//     }

//     // j--;

//     let answer = "";
//     let workingDec = dec;

//     while (j >= 0){
//         if (workingDec >= (2 ** j)){
//             answer += "1";
//             workingDec -= (2 ** j);
//         } else {
//             answer += "0";
//         }

//         j--;
//     }

//     return answer;
// }

// function binaryToDecimal(binary){
//     let sum = 0;
//     let j = 0;

//     for (let i = binary.length - 1; i >= 0; i--){
//         // i >= 2 if "0b" at the start of the binary string

//         if (binary[i] == "1"){
//             sum += (2 ** j);
//         }

//         j++;
//     }

//     return sum;
// }

// function setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//     return str.substring(0,index) + chr + str.substring(index+1);
// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
