function calculateGrade(grade) {
  if (grade >= 90) {
    return "A";
  }
  if (grade >= 80 && grade <= 89) {
    return "B";
  }
  if (grade >= 70 && grade <= 79) {
    return "C";
  }
  if (grade >= 60 && grade <= 69) {
    return "D";
  }
  if (grade <= 59) {
    return "You have Failed!";
  }
}

// This part runs the calculateGrade function and shows the result
var inputGrade = prompt("Enter a grade:");
var parsedInt = parseInt(inputGrade);
var finalGrade = calculateGrade(parsedInt);
alert(finalGrade);
