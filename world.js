// Using document.write
document.write('Hello World');

function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  
  function calculateSum(array) {
    let sum = 0;
    for (let num of array) {
      sum += num;
    }
    return sum;
  }
  
  function main() {
    const arrayLength = 100;
    const minValue = 1;
    const maxValue = 1000;
  
    const randomNumbers = generateRandomArray(arrayLength, minValue, maxValue);
    console.log("Randomly Generated Array:", randomNumbers);
  
    const sum = calculateSum(randomNumbers);
    console.log("Sum of the Array:", sum);
  }
  
  main();
  
