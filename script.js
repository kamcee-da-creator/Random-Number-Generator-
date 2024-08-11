let random = document.getElementById("random");
var number = document.getElementById("countLabel");
var number = document.getElementById("word");
var confetti = document.getElementById("confetti");
random.addEventListener("click", () => {
// when you click the random button, generate a random number from 0-10
  random = Math.floor(Math.random() * 11);
  // update the displayed number and word
  console.log(random);
  countLabel.textContent = random;
//   the message you get
  word.textContent = `You got ${random} `;
//   if the user get 10
  if (random === 10) {
    // THE MESSAGE YOU WOULD RECEIVE
    word.textContent = `Wow you got ${random} `;
    confetti.style.display = "block";
  } else if (random === 0) {
    word.textContent = `Better luck next time you got ${random} `;
    confetti.style.display = "none";  
}
});
