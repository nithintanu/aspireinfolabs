/**
 * Checks if a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(n) {
    // neglecting 1 i.e., not a prime
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; // checking if the given number is prime
      }
    }
    return true;
  }
  
  let count = 0;
  try
  {
      let hello = 100000001;
      for (let number = 0; number <= hello; number++) {
      if (isNaN(number) || !Number.isInteger(number)) {
          console.log('Invalid input. Please enter a valid integer.');
        } 

    let numberStr = number.toString(); // converting the number to a string
    let isOdd = true;
    for (let i = 0; i < numberStr.length - 1; i++) {
      if (Math.abs(parseInt(numberStr[i]) - parseInt(numberStr[i + 1])) !== 1) {
        isOdd = false; // checking whether the difference between two digits is 1
        break;
      }
    }
    if (isOdd && isPrime(number)) {
      // checking if the number is odd, prime, and has a difference of 1
      count++; // incrementing the count value
    }
  }
  
  console.log("Count:", count); // returns the count of numbers
  }
  catch(err) {
      console.log("invalid input, enter valid");
    }
