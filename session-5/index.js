//standard way of writing a function
function getGrade(total) {
  if (total > 90) {
    grade = "A+";
  } else if (total > 80 && total <= 90) {
    grade = "A";
  } else if (total > 70 && total <= 80) {
    grade = "B";
  } else if (total > 60 && total <= 70) {
    grade = "C";
  } else if (total > 50 && total <= 60) {
    grade = "D";
  } else if (total > 40 && total <= 50) {
    grade = "E";
  } else if (total > 30 && total <= 40) {
    grade = "F";
  } else if (total <= 30) {
    grade = "FAIL !!!";
  }
  return grade;
}

console.log(getGrade(55));

function check_evening_class(day) {
  switch (day) {
    case "Monday":
      return "You have no evening class today";

    case "Tuesday":
      return "You have intro to web development tonight";

    case "Wednesday":
      return "You have no evening class today";

    case "Thursday":
      return "You have intro to web development tonight";

    case "Friday":
      return "You have no evening class today";

    default:
      return "Its the weekend!";
  }
}

//Write a function that takes in a name, use a switch statement 
//if name “Harjeet” return “You are an instructor” 
//if name “Samuel” return “You are an instructor” 
//if name “Sarah” return “course corindator”  
//if name “Charlene” return “You are the founder” 
//default “You are a member of the cbf community”
function your_name(name) {
    switch (name) {
        case "Harjeet":
            return "You are an instructor";
        case "Samuel":
            return "You are an instructor";
        case "Sarah":
            return "You are the course corindator";
        case "Charlene":
            return "You are the founder"
        
        default:
            return "You are a member of the cbf community"
        

    }
}

console.log(your_name("Harjeet"))


    