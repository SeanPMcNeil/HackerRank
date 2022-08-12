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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    if (s.slice(8) == "PM"){
        let hours = parseInt(s.slice(0,3));
        if (hours == 12){
            return "12" + s.slice(2,8);
        }
        hours += 12;
        return hours + s.slice(2,8);
    } else {
        let hours = parseInt(s.slice(0,3));
        if (hours == 12){
            return "00" + s.slice(2,8);
        } else {
            return s.slice(0,8)
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
