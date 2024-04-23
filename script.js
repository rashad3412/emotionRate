const circles = document.querySelectorAll(".circles");
const emogiContent = document.querySelectorAll("#emoji-content");
const emojiImg = document.querySelectorAll("#insideBox");
const feelingDisplay = document.querySelectorAll("#circle-l");

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
    emotion: "sad",
    quote: '"Sandness is a state of mind, get out your mind"',
  },
  {
    emotion: "sad",
    quote: "sadness two",
  },
  {
    emotion: "sad",
    quote: "sadness three",
  },
];

function feelinTitle() {
  for (i = 0; i < feelingDisplay.length; i++) {
    feelingDisplay[0].style.backgroundColor = "red";
    feelingDisplay[1].style.backgroundColor = "blue";
    feelingDisplay[2].style.backgroundColor = "purple";
    feelingDisplay[3].style.backgroundColor = "orange";
    feelingDisplay[4].style.backgroundColor = "pink";
    feelingDisplay[5].style.backgroundColor = "green";
  }
}

function randomCircles() {
  for (i = 0; i < circles.length; i++) {
    // index circle three
    circles[i].style.display = "flex";
    circles[i].style.display = "space-between";
    circles[i].style.padding = "5px";
    circles[i].style.width = "165px";
    circles[i].style.height = "165px";
    circles[i].style.borderRadius = "150px";
  }
}

function emojiClick() {
  for (i = 0; i < emogiContent.length; i++) {
    emogiContent[0].addEventListener("click", displayTextFormat);
    emogiContent[0].addEventListener("click", displayHappyText);
    emogiContent[1].addEventListener("click", displaySadText);
  }
}
function emojiImgClick() {
  for (i = 0; i < emojiImg.length; i++) {
    emojiImg[0].addEventListener("click", displayTextFormat);
    emojiImg[0].addEventListener("click", displayHappyText);
    emojiImg[1].addEventListener("click", displaySadText);
  }
}

function displayTextFormat() {
  for (i = 0; i < circles.length; i++) {
    circles[i].style.textAlign = "center";
    circles[i].style.display = "flex";
    circles[i].style.justifyContent = "center";
    circles[i].style.alignItems = "center";
    circles[i].style.overflow = "hidden";
    circles[i].style.fontSize = "25px";
    circles[i].classList.add("hidden");
    circles[i].textContent = "";
  }
}

function displayHappyText() {
  for (i = 0; i < circles.length; i++) {
    randomCircles(); // change name of functions
    displayTextFormat();
    mouseMoveHappy();
    mouseOutHappy();

    circles[0].textContent = happyArr[0].emotion;
    circles[1].textContent = happyArr[1].emotion;
    circles[2].textContent = happyArr[2].emotion;
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
  }
}

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
  }
}

function mouseOutHappy() {
  for (i = 0; i < circles.length; i++) {
    // Index 0 happyArr Quote
    circles[0].addEventListener("mouseout", () => {
      circles[0].textContent = happyArr[0].emotion;
    });

    circles[1].addEventListener("mouseout", () => {
      circles[1].textContent = happyArr[1].emotion;
    });
    circles[2].addEventListener("mouseout", () => {
      circles[2].textContent = happyArr[2].emotion;
    });
  }
}

function mouseMoveSad() {
  for (i = 0; i < circles.length; i++) {
    // Index 0 happyArr Quote
    circles[0].addEventListener("mousemove", () => {
      circles[0].textContent = sadArr[0].emotion;
    });

    circles[1].addEventListener("mousemove", () => {
      circles[1].textContent = sadArr[1].emotion;
    });

    circles[2].addEventListener("mousemove", () => {
      circles[2].textContent = sadArr[2].emotion;
    });
  }
}
function mouseOutSad() {
  for (i = 0; i < circles.length; i++) {
    // Index 0 happyArr Quote
    circles[0].addEventListener("mouseout", () => {
      circles[0].textContent = sadArr[0].quote;
    });

    circles[1].addEventListener("mouseout", () => {
      circles[1].textContent = sadArr[1].quote;
    });

    circles[2].addEventListener("mouseout", () => {
      circles[2].textContent = sadArr[2].quote;
    });
  }
}

emojiClick();
emojiImgClick();
feelinTitle();
