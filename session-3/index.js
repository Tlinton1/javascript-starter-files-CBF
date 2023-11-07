let a = 5;
const b = 10;

let c = a + b;

console.log(c);

a = 20;

console.log(c);

c = a + b;

console.log(c);

function sayHey() {
  console.log("Hello!!!");
}

function conversation() {
  sayHey();
  console.log("How are you?");
  console.log("Goodbye!");
}

function sayHey(name) {
  console.log("hey " + name + "!");
}

sayHey("Shanice");

function futureAge(name, current_age) {
  age_in_5_years = current_age + 5;
  return "Hi " + name + " you will be " + age_in_5_years + " in 5 years time";
}

console.log(futureAge("Shanice", 20));

//Task 1 - Write a standard function, that has 2 parameters which are 2 numbers and return the numbers multiplied together.
function multiply(num_1, num_2) {
  return num_1 * num_2;
}

console.log(multiply(3, 5));

//Task 2 - Write a function expression called calculate_seconds_from_days
//where there is one parameter which is the number_of_days and return number_of_days  * 24 * 60 * 60 + “seconds in” + number_of_days

const calculate_seconds_from_days = function (number_of_days) {
  return number_of_days * 24 * 60 * 60 + " seconds in " + number_of_days;
};

console.log(calculate_seconds_from_days(2));

//Task 3 - Write an arrow function expression called calculate_cost where distance is a parameter and return the distance multiplied by 3.5

const calculate_cost = (distance) => distance * 3.5;

console.log(calculate_cost(10));
