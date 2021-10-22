const cardPairs = [
  {
    text: "Blodriska",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blodriska-wordpress-400-square.png",
  },
  {
    text: "Bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blacksvamp-wordpress-400-square.png",
  },
  {
    text: "Föränderlig tofsskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/foranderlig-tofsskivling-wordpress-400-square.png",
  },
  {
    text: "Grå bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/gra-blacksvamp-wordpress-400-square-.png",
  },
  {
    text: "Hattmurkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/hattmurkla-wordpress-400-square-.png",
  },
  {
    text: "Kantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/kantarell-wordpress-400-square.png",
  },
];
const cardPairs2 = [
  {
    text: "Karljohansvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/karljohan-wordpress-400-square-.png",
  },
  {
    text: "Murkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/murkla-wordpress-400-square-.png",
  },
  {
    text: "Räfflad nagelskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/rafflad-nagelskivling-wordpress-400-square.png",
  },
  {
    text: "Stolt fjällskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stolt-fjallskivling-wordpress-400-square.png",
  },
  {
    text: "Stort haröra",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stort-harora-wordpress-400-square-.png",
  },
  {
    text: "Trattkantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/trattkantarell-wordpress-400-square.png",
  },
];

let gameboard = document.getElementById("gameboard");
renderCards();

let cardsChosen = [];
let cardsChosenId = [];
const backOfCard =
  "https://artbysofiajohnsson.files.wordpress.com/2021/10/knot-wordpress-400-square.png";

function renderCards() {}

function cardChosen() {
  let cardInput = document.getElementById();
}

function createBoard() {
  cardPairs.forEach((pair) => {
    const card = document.createElement("li");
    const imageOnCard = document.createElement("img");
    imageOnCard.className = "imageCard";
    imageOnCard.src = pair.image;
    imageOnCard.setAttribute("data-id", indexOf(pair));
    imageOnCard.alt = pair.text;
    imageOnCard.addEventListener("click" /*flipCard()*/);
    gameboard.appendChild(card);
    card.appendChild(imageOnCard);
  });
}

//Check for card
function checkForMatch() {}

//Flipcard
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].image);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch(), 500);
  }
}

function renderImageCards() {
  cardPairs.forEach((pair) => {
    const card = document.createElement("li");
    const imageOnCard = document.createElement("img");
    imageOnCard.className = "imageCard";
    imageOnCard.src = pair.image;
    imageOnCard.alt = pair.text;
    gameboard.appendChild(card);
    card.appendChild(imageOnCard);
  });
}
// function renderTextCards() {
//   cardPairs.forEach((pair) => {
//     const card = document.createElement("li");
//     card.className = "textCard";
//     card.innerHTML = pair.text;
//     gameboard.appendChild(card);
//   });
// }
