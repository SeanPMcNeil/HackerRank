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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let min = BigInt(Number.MAX_SAFE_INTEGER);
    let max = 0;
    
    for (let i = 0; i < arr.length; i++){
        let workingSum = 0;
        for (let j = 0; j < arr.length; j++){
            if (j == i){
                continue;
            }
            workingSum += arr[j]
        }
        if (workingSum < min){
            min = workingSum;
        }
        if (workingSum > max){
            max = workingSum;
        }
    }
    
    console.log(min, max);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
