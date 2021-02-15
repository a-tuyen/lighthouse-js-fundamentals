// if STATEMENTS
const raining = true;
const cold = false;

if (raining) { 
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");

}

console.log("Now you're ready to go outside!")

const temperature = 20

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

//LOGICAL OPERATORS
const isCitizen = true;
const age = 26;

if(isCitizen && age > 18) {
  console.log("you are eligible to vote.")
}
const temperature1 = 41
if (temperature1 < -40 || temperature1 > 40) {
  console.log("Maybe going outside isn't such a great idea...")
}
const raining1 = false
if (!raining1) {
  console.log("Leave your umbrella at home!");
}