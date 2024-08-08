let random = document.getElementById("random");
var number = document.getElementById("countLabel");
var number = document.getElementById("word");
random.addEventListener("click", () => {
  random = Math.floor(Math.random() * 11);
  console.log(random);
  countLabel.textContent = random;
  word.textContent = `You got ${random} `;
  if (random === 10) {
    word.textContent = `Wow you got ${random} `;
  }
  else if(random === 0){
    word.textContent = `Better luck next time you got ${random} `;
  }
});
