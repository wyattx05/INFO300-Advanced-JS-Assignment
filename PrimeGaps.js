var readlinesync = require('readline-sync');

var n;
var primes = [];
var i;
var j;
var isPrimeFlag;
var maxGap = 0;
var totalGaps = 0;
var count = 0;
var gap;
var avgGap;

do {
    n = Number(readlinesync.question("Enter a positive integer (<=1000): "));
} while (n <= 0 || n > 1000);

for (i=2; i <= n; i++) {
    isPrimeFlag = true;

    for (j=2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrimeFlag = false;
            break;
        }
    }

    if (isPrimeFlag) {
        primes.push(i);
    }
}

for (i=1; i < primes.length; i++) {
    gap = primes[i] - primes[i-1];
    
    if (gap > maxGap) {
        maxGap = gap;
    }

    totalGaps += gap;
    count++;

}

if (count > 0) {
    avgGap = (totalGaps / count).toFixed(2);
} else {
    avgGap = 0;
}

console.log("Largest gap: " + maxGap);
console.log("Average gap: " + avgGap);