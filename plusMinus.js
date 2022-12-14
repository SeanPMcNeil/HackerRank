'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let answer = [];
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            positive++;
        } else if (arr[i] < 0){
            negative++;
        } else {
            zeros++;
        }
    }
    
    console.log((positive/arr.length).toPrecision(3));
    console.log((negative/arr.length).toPrecision(3));
    console.log((zeros/arr.length).toPrecision(3));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
