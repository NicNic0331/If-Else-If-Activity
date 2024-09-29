const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// User's score
rl.question('Enter your score: ', (input) => {
  const score = parseInt(input, 10);

  // Validate if the input is a number
  if (isNaN(score)) {
    console.log("Please enter a valid number for your score.");
  } else {
    // Determine the grade based on the score
    let grade;
    if (score >= 90) {
      grade = "Excellent";
    } else if (score >= 80) {
      grade = "Good";
    } else if (score >= 70) {
      grade = "Fair";
    } else {
      grade = "Needs Improvement";
    }

    // Corresponding grade
    console.log(`Your grade is: ${grade}.`);
  }

  // Close the input stream
  rl.close();
});
