// This function will save the user answers to the 4 questions into an array
let input;
let answersList = [];
function answerInput(id) {
  input = document.getElementById(id).value;
  if (input == "true") {
    input = true;
  } else if (input == "false") {
    input = false;
  }
  answersList.push(input);
  console.log(answersList);
}

// example of answerList to try the if statement
// answersList = [true, true, false, true];

// this is the array that contains each of the dogs objects: children friendly, social dog, aged dog, female. Each boolean will tell if the dog meets these criteria
let doggies = [
  {
    dog: "Delilah",
    answerTag: [true, true, false, true],
  },
  {
    dog: "Alfie",
    answerTag: [true, false, true, false],
  },
  {
    dog: "Lola",
    answerTag: [true, true, false, true],
  },
  {
    dog: "Sky",
    answerTag: [false, true, false, false],
  },
  {
    dog: "TBD1",
    answerTag: [true, false, true, true],
  },
  {
    dog: "TBD2",
    answerTag: [true, true, false, false],
  },
];
// console.log(doggies[0].answerTag[2]); //false
// console.log(doggies[2]);

// for (let i = 0; i < doggies.length; i++) {
//   if (_.isEqual(answersList, doggies[i].answerTag)) {
//     console.log(doggies[i].dog, i);
//   } else {
//     console.log("not match found");
//   }
// }