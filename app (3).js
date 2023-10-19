function displayCurrentDateTime() {
  const currentDate = new Date();
  const options = {
      weekday: "long",
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
  };
  const formattedDate = currentDate.toLocaleString('en-US', options);

  document.getElementById.textContent = formattedDate;
}

displayCurrentDateTime(); // Call the function immediately to ensure it runs when the script is loaded.










function greetUser(firstName, lastName) {
    if (firstName && lastName) {
      const fullName = firstName + ' ' + lastName;
      console.log('Hello, ' + fullName + '!');
    } else {
      console.log('Please provide both first name and last name.');
    }
  }
  
  // Example usage:
  greetUser('John', 'Doe'); 
//   This will print "Hello, John Doe!"



  function addNumbers() {
    // Prompt the user for the first number and convert it to a floating-point number
    const num1 = parseFloat(prompt("Enter the first number:"));
  
    // Prompt the user for the second number and convert it to a floating-point number
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    // Check if the user entered valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input. Please enter valid numbers.";
    }
  
    // Calculate the sum
    const sum = num1 + num2;
  
    // Return the result
    return `The sum of ${num1} and ${num2} is ${sum}.`;
  }
  
//   Call the function and display the result
  const Result = addNumbers();
  console.log(Result);  



  function calculate(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          return "Division by zero is not allowed.";
        }
        result = num1 / num2;
        break;
      default:
        return "Invalid operator. Please use '+', '-', '*', or '/'";
    }
  
    return result;
  }
  
  // Example usage:
  const num1 = 10;
  const num2 = 5;
  const operator = '+';
  
  const Results = calculate(num1, num2, operator);
  
  if (typeof Results === 'number') {
    console.log(`Result: ${Results}`);
  } else {
    console.error(Results);
  }


    

  function square(number) {
    return number * number;
  }
  
  // Example usage:
  const sum = square(5); // Calling the function with the argument 5
  console.log(sum); // This will output 25 (5 squared)



  function factorialLoop(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage:
  const result = factorialLoop(5);
  console.log(result); // This will also output 120 (5 factorial)
  



  function countNumbers(start, end) {
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        console.log(i);
      }
    } else {
      console.log("Start number should be less than or equal to the end number.");
    }
  }
  
  // Example usage:
  countNumbers(1, 5);




  function computeHypotenuse(base, perpendicular) {
    function square(x) {
      return x * x;
    }
  
    function sqrt(x) {
      return Math.sqrt(x);
    }
  
    const hypotenuseSquared = square(base) + square(perpendicular);
    const hypotenuse = sqrt(hypotenuseSquared);
  
    return hypotenuse;
  }
  
  // Example usage:
  const base = 3;
  const perpendicular = 4;
  const hypotenuse = computeHypotenuse(base, perpendicular);
  
  console.log(`Hypotenuse: ${hypotenuse}`);




  function calculateRectangleAreaByVariables() {
    const width = arguments[0];
    const height = arguments[1];
    return width * height;
  }
  
  // Example usage with variables
  const w = 7;
  const h = 12;
  const area2 = calculateRectangleAreaByVariables(w, h);
  console.log("Area by variables: " + area2);




  function isPalindrome(str) {
    // Remove spaces and convert to lowercase to handle case-insensitive and ignore spaces
    str = str.replace(/\s/g, '').toLowerCase();
  
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
  
    // Check if the original string is equal to its reverse
    return str === reversedStr;
  }
  
  // Example usage:
  const word1 = "madam";
  const word2 = "hello";
  
  console.log(`"${word1}" is a palindrome: ${isPalindrome(word1)}`);
  console.log(`"${word2}" is a palindrome: ${isPalindrome(word2)}`);




  function capitalizeFirstLetterOfEachWord(str) {
    // Split the string into words
    const words = str.split(' ');
  
    // Capitalize the first letter of each word and join them back together
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the capitalized words into a single string
    const result = capitalizedWords.join(' ');
  
    return result;
  }
  
  // Example usage:
  const InputString = 'the quick brown fox';
  const outputString = capitalizeFirstLetterOfEachWord(InputString);
  
  console.log(outputString); // This will output: "The Quick Brown Fox"




  function findLongestWord(str) {
    // Split the string into words
    const words = str.split(' ');
  
    // Initialize variables to keep track of the longest word and its length
    let longestWord = '';
    let longestLength = 0;
  
    // Iterate through the words and update the longest word and length
    for (const word of words) {
      if (word.length > longestLength) {
        longestWord = word;
        longestLength = word.length;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  const inputStrings = 'Web Development Tutorial';
  const longestWord = findLongestWord(inputStrings);
  
  console.log(longestWord); // This will output: "Development"





  
  
  
  function countLetterOccurrences(str, letter) {
    // Initialize a count variable to keep track of the number of occurrences
    let count = 0;
  
    // Convert both the string and letter to lowercase for a case-insensitive search
    const lowercaseStr = str.toLowerCase();
    const lowercaseLetter = letter.toLowerCase();
  
    // Iterate through the string and count occurrences of the letter
    for (let i = 0; i < lowercaseStr.length; i++) {
      if (lowercaseStr[i] === lowercaseLetter) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const inputString = 'JavaScript is a versatile language.';
  const searchLetter = 'a';
  
  const letterCount = countLetterOccurrences(inputString, searchLetter);
  
  console.log(`The letter "${searchLetter}" appears ${letterCount} times in the string.`);

  



  // Function to calculate the circumference of a circle
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`);
  }
  
  // Function to calculate the area of a circle
  function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area}`);
  }
  
  // Example usage:
  const radius = 5;
  
  calcCircumference(radius); // This will output the circumference.
  calcArea(radius); // This will output the area.