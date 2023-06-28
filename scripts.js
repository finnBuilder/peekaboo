console.log(document.querySelector(".peekaboo-button"));

function playGame() {
  let person = makeRandom();
  let check1 = (document.querySelector(".js-person-1").innerHTML = `<button onclick="startAgain()" class="js-startAgain"><img src="./pics613/${person}.png" class="person"/></button>`);
  document.querySelector(".peekaboo-button").classList.add("hidden");

  console.log(check1);
  console.log(document.querySelector(".peekaboo-button"));
}

function startAgain() {
  const startAgainButton = document.querySelector(".js-startAgain");
  startAgainButton.innerHTML = `<button class="peekaboo-button"><img src="./pics613/peekaboo.png" class="peekaboo-icon" /></button>`;
  startAgainButton.addEventListener("click", playGame);

  console.log("running!");
}

/*
function startAgain() {
  document.querySelector(".js-startAgain").innerHTML = ` <button
      onclick="
      playGame()
      "
      class="peekaboo-button"
    >
      <img src="./pics613/peekaboo.png" class="peekaboo-icon" />
    </button>`;

  console.log("running!");
}
*/

function makeRandom() {
  let randomNumber = Math.random();
  let person = "family";
  if (randomNumber < 1 / 11) {
    person = "tatty";
  } else if (randomNumber >= 1 / 11 && randomNumber < 2 / 11) {
    person = "mommy";
  } else if (randomNumber >= 2 / 11 && randomNumber < 3 / 11) {
    person = "eliezer";
  } else if (randomNumber >= 3 / 11 && randomNumber < 4 / 11) {
    person = "shira";
  } else if (randomNumber >= 4 / 11 && randomNumber < 5 / 11) {
    person = "leah";
  } else if (randomNumber >= 5 / 11 && randomNumber < 6 / 11) {
    person = "family";
  } else if (randomNumber >= 6 / 11 && randomNumber < 7 / 11) {
    person = "children";
  } else if (randomNumber >= 7 / 11 && randomNumber < 8 / 11) {
    person = "tattyMommy";
  } else if (randomNumber >= 8 / 11 && randomNumber < 9 / 11) {
    person = "clown";
  } else if (randomNumber >= 9 / 11 && randomNumber < 10 / 11) {
    person = "funny1";
  } else if (randomNumber >= 10 / 11) {
    person = "funny2";
  }

  console.log(person);
  return person;
}
