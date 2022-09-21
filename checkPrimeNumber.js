// return true is the input Number is a prime number




let result = checkPrimeNumber(13);
console.log(result);

function checkPrimeNumber(Number) {
    let factor = 0;
    for (let i = 0; i < Number; i++) {
        if (Number % i == 0) {
            factor++;
        }
    }
    if (factor == 2) {
        return "True";
    } else {
        return "False";
    }
}