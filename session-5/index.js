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

console.log(getGrade(55))
