/**
 * Print all primes less than n.
 */

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    // Note: This is checked so that we can skip middle five numbers in below loop
    // Note:  And at this point n is greater than 3
    if (n%2 == 0 || n%3 == 0) return false;

    // Note: At this point n can't be an even number or a multiple of 3
    for (var i=5; i*i<=n; i+=6){
        if (n%i == 0 || n%(i+2) == 0)
        return false;
    }

    return true;
};

function allPrimeNumbersLessThan(n) {
    for (var i = 0; i < n; i++){
        if (isPrime(i)) {
            console.log(i)
        }
    }
};


// test
allPrimeNumbersLessThan(25);

//Breakdown

/**
 * 
 * 1 - false
 * 2 - true
 * 3 - true
 * 4 - false
 * 5 - true
 * 6 - false
 * 7 - true
 * 8 - false
 * 9 - false
 * 10 - false
 * 11 - true
 * 12 - false
 * 13 - true
 * 14 - false
 * 15 - false
 * 16 - false
 * 17 - true
 * 18 - false
 * 19 - true
 * 20 - false
 * 21 - false
 * 22 - false
 * 23 - true
 */