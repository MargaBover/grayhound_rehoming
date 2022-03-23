// This function will save the user answers to the 4 questions into an array

// try separating this function into two less complex

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
  return answersList;
}

// this is the array that contains each of the dogs objects: children friendly, social dog, aged dog, female. Each boolean will tell if the dog meets these criteria
// console.log(doggies[0].answerTag[2]); //false
// console.log(doggies[2]);

let yourDoggie;
let yourDoggiePic;
function getDoggie(arr) {
  let doggies = [
    {
      dog: "Delilah",
      answerTag: [true, true, false, true],
      imgSource: "src/Delilah.jpg",
    },
    {
      dog: "Alfie",
      answerTag: [true, false, true, false],
      imgSource: "src/Alfie.jpg",
    },
    {
      dog: "Lola",
      answerTag: [true, true, true, true],
      imgSource: "src/Lola.jpg",
    },
    {
      dog: "Sky",
      answerTag: [false, true, false, false],
      imgSource: "src/Sky.jpg",
    },
    {
      dog: "Hammy",
      answerTag: [true, false, true, true],
      imgSource: "src/Hammy.jpg",
    },
    {
      dog: "Flash",
      answerTag: [true, true, false, false],
      imgSource: "src/Flash.jpg",
    },
  ];

  for (let i = 0; i < doggies.length; i++) {
    if (_.isEqual(arr, doggies[i].answerTag)) {
      // console.log(doggies[i].dog, i);
      yourDoggie = doggies[i].dog;
      yourDoggiePic = doggies[i].imgSource;
      break;
    } else {
      yourDoggie = undefined;
    }
  }

  if (yourDoggie == undefined) {
    noDoggieFound();
  } else {
    showDoggie(yourDoggie, yourDoggiePic);
  }
}

function showDoggie(dog, pic) {
  let quizResult = document.querySelector(".match-result");
  const para = document.createElement("p");
  para.className = "fs-4";
  para.textContent =
    "Congrats! Your woof-match is " +
    dog +
    "," +
    " please contact us so you can meet each other!";
  quizResult.appendChild(para);

  let dogImg = document.createElement("img");
  dogImg.src = pic;
  // dogImg.setAttribute("height", "auto");
  // dogImg.setAttribute("width", "100%");
  dogImg.className = "img-fluid";
  quizResult.appendChild(dogImg);
  // dogImg.classList.add(".rounded mx-auto d-block");
}

function noDoggieFound() {
  let quizResult = document.querySelector(".match-result");
  const para = document.createElement("p");
  para.textContent =
    "Sorry, at the moment we don't have a doggie that matches your need, come by to say hi anyway!";
  quizResult.appendChild(para);
}
