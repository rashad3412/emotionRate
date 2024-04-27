const circles = document.querySelectorAll(".circles");
const emogiContent = document.querySelectorAll("#emoji-content");
const emojiImg = document.querySelectorAll("#insideBox");
const feelingDisplay = document.querySelectorAll("#circle-letter");
const revealEmotions = document.querySelector("#insideP");
const removeA = document.querySelector(".blockA");

/////// Object Literals for emotions and quotes //////////
const happyArr = [
  {
    emotion: "Happy",
    quote: '"Stay postive in the mist of cahos"',
  },
  {
    emotion: "Happy",
    quote: '"Learn to value yourself!"',
  },
  {
    emotion: "Happy",
    quote: '"Whoever is happy will make others happy!"',
  },
  {
    emotion: "Happy",
    quote: '"Happiness is only real when shared!"',
  },
  {
    emotion: "Happy",
    quote: '"Be happy it drives people crazy!"',
  },
  {
    emotion: "Happy",
    quote: '"Smile while you still have teeth!"',
  },
];

const sadArr = [
  {
    emotion: "Sad",
    quote: '"Sandness is a state of mind, get out your mind! "',
  },
  {
    emotion: "Sad",
    quote: '"Heal your own brokenness!"',
  },
  {
    emotion: "Sad",
    quote: '"After tuesday even the calendar goes WTF!"',
  },
  {
    emotion: "Sad",
    quote: '"Grief is the price we pay for love!"',
  },
  {
    emotion: "Sad",
    quote: '"Sometimes you have to be done for the day!"',
  },
  {
    emotion: "Sad",
    quote: '"For every problem there is a solution!"',
  },
];

const angryArr = [
  {
    emotion: "Angry",
    quote: '"When you are angry be silent! "',
  },
  {
    emotion: "Angry",
    quote: '"Anger makes us feel isolated!"',
  },
  {
    emotion: "Angry",
    quote: '"Anger is one letter short of danger!"',
  },
  {
    emotion: "Angry",
    quote: '"He who angers you conquers you!"',
  },
  {
    emotion: "Angry",
    quote: '"Dont lose your temper use it!"',
  },
  {
    emotion: "Angry",
    quote: '"Never get angry, reason with people!"',
  },
];

const boredArr = [
  {
    emotion: "Bored",
    quote: '"Being normal is boring! "',
  },
  {
    emotion: "Bored",
    quote: '"To being bored is a crime you cant commit!"',
  },
  {
    emotion: "Bored",
    quote: '"When I get bored I work more!"',
  },
  {
    emotion: "Bored",
    quote: '"When life gets bored with routine, try something new!"',
  },
  {
    emotion: "Bored",
    quote: '"Im afraid of nothing except being bored!"',
  },
  {
    emotion: "Bored",
    quote: '"Boredom comes from a boring mind"',
  },
];

////// Functions for circle properties styling //////////

function feelinTitle() {
  for (i = 0; i < feelingDisplay.length; i++) {
    feelingDisplay[0].style.backgroundColor = "#FF4633";
    feelingDisplay[1].style.backgroundColor = "#5087DA";
    feelingDisplay[2].style.backgroundColor = "#9250DA";
    feelingDisplay[3].style.backgroundColor = "#EB6B2E";
    feelingDisplay[4].style.backgroundColor = "#FF7DAA";
    feelingDisplay[5].style.backgroundColor = "#41D626";
  }
}

function randomCircles() {
  for (i = 0; i < circles.length; i++) {
    circles[i].style.display = "flex";
    circles[i].style.display = "space-between";
    circles[i].style.padding = "5px";
    circles[i].style.width = "175px";
    circles[i].style.height = "175px";
    circles[i].style.borderRadius = "150px";
    circles[i].style.cursor = "pointer";
    circles[i].style.fontFamily = "PT Sans, sans-serif";
  }
}

function displayTextFormat() {
  for (i = 0; i < circles.length; i++) {
    circles[i].style.textAlign = "center";
    circles[i].style.display = "flex";
    circles[i].style.justifyContent = "center";
    circles[i].style.alignItems = "center";
    circles[i].style.overflow = "hidden";
    circles[i].style.fontSize = "20px";
    circles[i].classList.add("hidden");
    circles[i].textContent = "";
  }
}

///// Click Events for Emotion name and Emoji Image //////////

function emotionNameClick() {
  for (i = 0; i < emogiContent.length; i++) {
    emogiContent[0].addEventListener("click", displayHappyText);
    emogiContent[1].addEventListener("click", displaySadText);
    emogiContent[2].addEventListener("click", displayAngerText);
    emogiContent[3].addEventListener("click", displayBoredText);
  }
}
function emojiImgClick() {
  for (i = 0; i < emojiImg.length; i++) {
    emojiImg[0].addEventListener("click", displayHappyText);
    emojiImg[1].addEventListener("click", displaySadText);
    emojiImg[2].addEventListener("click", displayAngerText);
    emojiImg[3].addEventListener("click", displayBoredText);
  }
}

/////// Display Emotion inside of Circles Functions /////////

function displayHappyText() {
  for (i = 0; i < circles.length; i++) {
    randomCircles(); // change name of functions
    displayTextFormat();
    mouseMoveHappy();
    mouseOutHappy();
    clearInterval(myInterval);
    clearTimeout(pageLoad);
    removeA.remove();

    revealEmotions.textContent = "Happy";
    revealEmotions.style.color = "white";
    revealEmotions.style.opacity = "1";
    revealEmotions.style.fontFamily = "cursive";
    revealEmotions.style.fontSize = "22px";

    circles[0].textContent = happyArr[0].emotion;
    circles[1].textContent = happyArr[1].emotion;
    circles[2].textContent = happyArr[2].emotion;
    circles[3].textContent = happyArr[3].emotion;
    circles[4].textContent = happyArr[4].emotion;
    circles[5].textContent = happyArr[5].emotion;
  }
}

function displaySadText() {
  for (i = 0; i < circles.length; i++) {
    displayTextFormat();
    randomCircles();
    mouseMoveSad();
    mouseOutSad();
    clearInterval(myInterval);
    clearTimeout(pageLoad);
    removeA.remove();

    revealEmotions.textContent = "Sad";
    revealEmotions.style.color = "white";
    revealEmotions.style.opacity = "1";
    revealEmotions.style.fontFamily = "cursive";
    revealEmotions.style.fontSize = "22px";

    circles[0].textContent = sadArr[0].emotion;
    circles[1].textContent = sadArr[1].emotion;
    circles[2].textContent = sadArr[2].emotion;
    circles[3].textContent = sadArr[3].emotion;
    circles[4].textContent = sadArr[4].emotion;
    circles[5].textContent = sadArr[5].emotion;
  }
}
function displayAngerText() {
  for (i = 0; i < circles.length; i++) {
    displayTextFormat();
    randomCircles();
    mouseMoveAnger();
    mouseOutAnger();
    clearInterval(myInterval);
    clearTimeout(pageLoad);
    removeA.remove();

    revealEmotions.textContent = "Angry";
    revealEmotions.style.color = "white";
    revealEmotions.style.opacity = "1";
    revealEmotions.style.fontFamily = "cursive";
    revealEmotions.style.fontSize = "22px";

    circles[0].textContent = angryArr[0].emotion;
    circles[1].textContent = angryArr[1].emotion;
    circles[2].textContent = angryArr[2].emotion;
    circles[3].textContent = angryArr[3].emotion;
    circles[4].textContent = angryArr[4].emotion;
    circles[5].textContent = angryArr[5].emotion;
  }
}
function displayBoredText() {
  for (i = 0; i < circles.length; i++) {
    displayTextFormat();
    randomCircles();
    mouseMoveBored();
    mouseOutBored();
    clearInterval(myInterval);
    clearTimeout(pageLoad);
    removeA.remove();

    revealEmotions.textContent = "Bored";
    revealEmotions.style.color = "white";
    revealEmotions.style.opacity = "1";
    revealEmotions.style.fontFamily = "cursive";
    revealEmotions.style.fontSize = "22px";

    circles[0].textContent = boredArr[0].emotion;
    circles[1].textContent = boredArr[1].emotion;
    circles[2].textContent = boredArr[2].emotion;
    circles[3].textContent = boredArr[3].emotion;
    circles[4].textContent = boredArr[4].emotion;
    circles[5].textContent = boredArr[5].emotion;
  }
}

////////// MouseMove and MouseOut functions for each circle with quote inside of it /////////

function mouseMoveHappy() {
  for (i = 0; i < circles.length; i++) {
    // Index 0 happyArr Quote
    circles[0].addEventListener("mousemove", () => {
      circles[0].textContent = happyArr[0].quote;
    });

    circles[1].addEventListener("mousemove", () => {
      circles[1].textContent = happyArr[1].quote;
    });

    circles[2].addEventListener("mousemove", () => {
      circles[2].textContent = happyArr[2].quote;
    });
    circles[3].addEventListener("mousemove", () => {
      circles[3].textContent = happyArr[3].quote;
    });
    circles[4].addEventListener("mousemove", () => {
      circles[4].textContent = happyArr[4].quote;
    });
    circles[5].addEventListener("mousemove", () => {
      circles[5].textContent = happyArr[5].quote;
    });
  }
}

function mouseOutHappy() {
  for (i = 0; i < circles.length; i++) {
    circles[0].addEventListener("mouseout", () => {
      circles[0].textContent = happyArr[0].emotion;
    });

    circles[1].addEventListener("mouseout", () => {
      circles[1].textContent = happyArr[1].emotion;
    });
    circles[2].addEventListener("mouseout", () => {
      circles[2].textContent = happyArr[2].emotion;
    });
    circles[3].addEventListener("mouseout", () => {
      circles[3].textContent = happyArr[3].emotion;
    });
    circles[4].addEventListener("mouseout", () => {
      circles[4].textContent = happyArr[4].emotion;
    });
    circles[5].addEventListener("mouseout", () => {
      circles[5].textContent = happyArr[5].emotion;
    });
  }
}

function mouseMoveSad() {
  for (i = 0; i < circles.length; i++) {
    circles[0].addEventListener("mousemove", () => {
      circles[0].textContent = sadArr[0].quote;
    });

    circles[1].addEventListener("mousemove", () => {
      circles[1].textContent = sadArr[1].quote;
    });

    circles[2].addEventListener("mousemove", () => {
      circles[2].textContent = sadArr[2].quote;
    });
    circles[3].addEventListener("mousemove", () => {
      circles[3].textContent = sadArr[3].quote;
    });
    circles[4].addEventListener("mousemove", () => {
      circles[4].textContent = sadArr[4].quote;
    });
    circles[5].addEventListener("mousemove", () => {
      circles[5].textContent = sadArr[5].quote;
    });
  }
}

function mouseOutSad() {
  for (i = 0; i < circles.length; i++) {
    circles[0].addEventListener("mouseout", () => {
      circles[0].textContent = sadArr[0].emotion;
    });

    circles[1].addEventListener("mouseout", () => {
      circles[1].textContent = sadArr[1].emotion;
    });

    circles[2].addEventListener("mouseout", () => {
      circles[2].textContent = sadArr[2].emotion;
    });
    circles[3].addEventListener("mouseout", () => {
      circles[3].textContent = sadArr[3].emotion;
    });
    circles[4].addEventListener("mouseout", () => {
      circles[4].textContent = sadArr[4].emotion;
    });
    circles[5].addEventListener("mouseout", () => {
      circles[5].textContent = sadArr[5].emotion;
    });
  }
}

function mouseMoveAnger() {
  for (i = 0; i < circles.length; i++) {
    circles[0].addEventListener("mousemove", () => {
      circles[0].textContent = angryArr[0].quote;
    });

    circles[1].addEventListener("mousemove", () => {
      circles[1].textContent = angryArr[1].quote;
    });

    circles[2].addEventListener("mousemove", () => {
      circles[2].textContent = angryArr[2].quote;
    });
    circles[3].addEventListener("mousemove", () => {
      circles[3].textContent = angryArr[3].quote;
    });
    circles[4].addEventListener("mousemove", () => {
      circles[4].textContent = angryArr[4].quote;
    });
    circles[5].addEventListener("mousemove", () => {
      circles[5].textContent = angryArr[5].quote;
    });
  }
}

function mouseOutAnger() {
  for (i = 0; i < circles.length; i++) {
    circles[0].addEventListener("mouseout", () => {
      circles[0].textContent = angryArr[0].emotion;
    });

    circles[1].addEventListener("mouseout", () => {
      circles[1].textContent = angryArr[1].emotion;
    });

    circles[2].addEventListener("mouseout", () => {
      circles[2].textContent = angryArr[2].emotion;
    });
    circles[3].addEventListener("mouseout", () => {
      circles[3].textContent = angryArr[3].emotion;
    });
    circles[4].addEventListener("mouseout", () => {
      circles[4].textContent = angryArr[4].emotion;
    });
    circles[5].addEventListener("mouseout", () => {
      circles[5].textContent = angryArr[5].emotion;
    });
  }
}

function mouseMoveBored() {
  for (i = 0; i < circles.length; i++) {
    circles[0].addEventListener("mousemove", () => {
      circles[0].textContent = boredArr[0].quote;
    });

    circles[1].addEventListener("mousemove", () => {
      circles[1].textContent = boredArr[1].quote;
    });

    circles[2].addEventListener("mousemove", () => {
      circles[2].textContent = boredArr[2].quote;
    });
    circles[3].addEventListener("mousemove", () => {
      circles[3].textContent = boredArr[3].quote;
    });
    circles[4].addEventListener("mousemove", () => {
      circles[4].textContent = boredArr[4].quote;
    });
    circles[5].addEventListener("mousemove", () => {
      circles[5].textContent = boredArr[5].quote;
    });
  }
}

function mouseOutBored() {
  for (i = 0; i < circles.length; i++) {
    circles[0].addEventListener("mouseout", () => {
      circles[0].textContent = boredArr[0].emotion;
    });

    circles[1].addEventListener("mouseout", () => {
      circles[1].textContent = boredArr[1].emotion;
    });

    circles[2].addEventListener("mouseout", () => {
      circles[2].textContent = boredArr[2].emotion;
    });
    circles[3].addEventListener("mouseout", () => {
      circles[3].textContent = boredArr[3].emotion;
    });
    circles[4].addEventListener("mouseout", () => {
      circles[4].textContent = boredArr[4].emotion;
    });
    circles[5].addEventListener("mouseout", () => {
      circles[5].textContent = boredArr[5].emotion;
    });
  }
}

const myInterval = setInterval(pageLoad, 1300);

function pageLoad() {
  setTimeout(() => {
    revealEmotions.style.color = "yellow";
    revealEmotions.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    revealEmotions.style.color = "";
    revealEmotions.style.opacity = "0";
  }, 600);
  setTimeout(() => {
    revealEmotions.style.color = "white";
    revealEmotions.style.opacity = "1";
  }, 1000);
}

emotionNameClick();
emojiImgClick();
feelinTitle();
