const circles = document.querySelectorAll(".circles");
const emogiContent = document.querySelectorAll("#emoji-content");
const emojiImg = document.querySelectorAll("#insideBox");

const happyArr = [
  {
    emotion: "Happy",
    quote: '"Stay Postive in the mist of cahos"',
  },
  {
    emotion: "happy",
    quote: "I am happy2",
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
];

function randomCircles() {
  for (i = 0; i < circles.length; i++) {
    // index circle three
    circles[i].style.display = "flex";
    circles[i].style.display = "space-between";
    circles[i].style.width = "150px";
    circles[i].style.height = "150px";
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
    displayTextFormat();
    randomCircles();

    circles[0].style.backgroundColor = "blue";
    circles[0].textContent = happyArr[0].emotion;

    circles[0].addEventListener("mousemove", () => {
      circles[0].textContent = happyArr[0].quote;
    });

    circles[0].addEventListener("mouseout", () => {
      circles[0].textContent = happyArr[0].emotion;
    });
  }
}

function displaySadText() {
  for (i = 0; i < circles.length; i++) {
    displayTextFormat();
    randomCircles();
    circles[0].textContent = sadArr[0].quote;
    circles[0].style.backgroundColor = "red";
    circles[1].textContent = sadArr[1].quote;
  }
}

emojiClick();
emojiImgClick();

// displayTextInCircle();
