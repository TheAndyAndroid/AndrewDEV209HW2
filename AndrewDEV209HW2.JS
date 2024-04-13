// Word array that holds the random words that the user inputs

let RandomWords = [];

// Loop that collects the 3 random words that the user inputs and adds them to the array

for (let i = 0; i < 3; i++) {
  let RandomWord = prompt(`Enter Random Word ${i + 1}:`);
  RandomWords.push(RandomWord);
}

// Creation of the unordered list

let ul = document.createElement("ul");

// Adds the User's inputed words into the unordered list

RandomWords.forEach((RandomWord) => {
  let li = document.createElement("li");
  li.textContent = RandomWord;
  ul.appendChild(li);
});

const firstButton = document.querySelector("button");

document.body.insertBefore(ul, firstButton);

// Swaps the first and last letter of the user's inputed words

document.getElementById("SwapRandomWords").addEventListener("click", SwapRandomWords);
function SwapRandomWords() {
    console.log("SwapRandomWords");
  let SwapRandomWordsArray = RandomWords.map(
    (RandomWord) =>
      RandomWord.charAt(RandomWord.length - 1) +
      RandomWord.substring(1, RandomWord.length - 1) +
      RandomWord.charAt(0)

  );
  document.querySelector("ul").innerHTML = "";

  SwapRandomWordsArray.forEach((RandomWord) => {

    let li = document.createElement("li");
    li.textContent = RandomWord;
    document.querySelector("ul").appendChild(li);
  });
}

// Captialization of the user inputed words

function CapitalizeRandomWords() {
  console.log(RandomWords);
  capArray = RandomWords.map((RandomWord) => RandomWord.toUpperCase());

  document.querySelector("ul").innerHTML = "";

  capArray.forEach((RandomWord) => {
    let li = document.createElement("li");
    li.textContent = RandomWord;
    document.querySelector("ul").appendChild(li);
  });
}

// Changes the text color of the user's inputed words to red

document.getElementById("RedRandomWords").addEventListener("click", function () {
  document.querySelector("ul").style.color = "red";
});