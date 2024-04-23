const circles = document.querySelectorAll(".circles");
const emogiContent = document.querySelectorAll("#emoji-content");
const emojiImg = document.querySelectorAll("#insideBox");
const feelingDisplay = document.querySelectorAll("#circle-letter");
const revealEmotions = document.querySelector("#insideP");

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
    quote: '"Never get angery, reason with people!"',
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
    feelingDisplay[0].style.backgroundColor = "red";
    feelingDisplay[1].style.backgroundColor = "blue";
    feelingDisplay[2].style.backgroundColor = "purple";
    feelingDisplay[3].style.backgroundColor = "orange";
    feelingDisplay[4].style.backgroundColor = "pink";
    feelingDisplay[5].style.backgroundColor = "green";
    feelingDisplay[i].style.fontFamily = "Gill Sans";
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
    circles[i].style.cursor = "progress";
    circles[i].style.fontFamily = "Gill Sans";
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
  }
}
function emojiImgClick() {
  for (i = 0; i < emojiImg.length; i++) {
    emojiImg[0].addEventListener("click", displayHappyText);
    emojiImg[1].addEventListener("click", displaySadText);
  }
}

/////// Display Emotion inside of Circles Functions /////////

function displayHappyText() {
  for (i = 0; i < circles.length; i++) {
    randomCircles(); // change name of functions
    displayTextFormat();
    mouseMoveHappy();
    mouseOutHappy();

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

    circles[0].textContent = sadArr[0].emotion;
    circles[1].textContent = sadArr[1].emotion;
    circles[2].textContent = sadArr[2].emotion;
    circles[3].textContent = sadArr[3].emotion;
    circles[4].textContent = sadArr[4].emotion;
    circles[5].textContent = sadArr[5].emotion;
  }
}

////////// MouseMove and MouseOut functions for each circle /////////

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
    // Index 0 happyArr Quote
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
    // Index 0 happyArr Quote
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

revealEmotions.addEventListener("click", () => {});

feelinTitle();
emotionNameClick();
emojiImgClick();
console.log(revealEmotions);
