const cardPairs = [
  {
    cardId: 1,
    cardSlot: 0,
    text: "Blodriska",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blodriska-wordpress-400-square.png",
  },
  {
    cardId: 2,
    cardSlot: 0,
    text: "Bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blacksvamp-wordpress-400-square.png",
  },
  {
    cardId: 3,
    cardSlot: 0,
    text: "Föränderlig tofsskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/foranderlig-tofsskivling-wordpress-400-square.png",
  },
  {
    cardId: 4,
    cardSlot: 0,
    text: "Grå bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/gra-blacksvamp-wordpress-400-square-.png",
  },
  {
    cardId: 5,
    cardSlot: 0,
    text: "Hattmurkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/hattmurkla-wordpress-400-square-.png",
  },
  {
    cardId: 6,
    cardSlot: 0,
    text: "Kantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/kantarell-wordpress-400-square.png",
  },
  {
    cardId: 1,
    cardSlot: 0,
    text: "Blodriska",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blodriska-wordpress-400-square.png",
  },
  {
    cardId: 2,
    cardSlot: 0,
    text: "Bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blacksvamp-wordpress-400-square.png",
  },
  {
    cardId: 3,
    cardSlot: 0,
    text: "Föränderlig tofsskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/foranderlig-tofsskivling-wordpress-400-square.png",
  },
  {
    cardId: 4,
    cardSlot: 0,
    text: "Grå bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/gra-blacksvamp-wordpress-400-square-.png",
  },
  {
    cardId: 5,
    cardSlot: 0,
    text: "Hattmurkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/hattmurkla-wordpress-400-square-.png",
  },
  {
    cardId: 6,
    cardSlot: 0,
    text: "Kantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/kantarell-wordpress-400-square.png",
  },
];
const cardPairs2 = [
  {
    cardId: 1,
    cardSlot: 0,
    text: "Karljohansvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/karljohan-wordpress-400-square-.png",
  },
  {
    cardId: 2,
    cardSlot: 0,
    text: "Murkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/murkla-wordpress-400-square-.png",
  },
  {
    cardId: 3,
    cardSlot: 0,
    text: "Räfflad nagelskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/rafflad-nagelskivling-wordpress-400-square.png",
  },
  {
    cardId: 4,
    cardSlot: 0,
    text: "Stolt fjällskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stolt-fjallskivling-wordpress-400-square.png",
  },
  {
    cardId: 5,
    cardSlot: 0,
    text: "Stort haröra",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stort-harora-wordpress-400-square-.png",
  },
  {
    cardId: 6,
    cardSlot: 0,
    text: "Trattkantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/trattkantarell-wordpress-400-square.png",
  },
  {
    cardId: 1,
    cardSlot: 0,
    text: "Karljohansvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/karljohan-wordpress-400-square-.png",
  },
  {
    cardId: 2,
    cardSlot: 0,
    text: "Murkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/murkla-wordpress-400-square-.png",
  },
  {
    cardId: 3,
    cardSlot: 0,
    text: "Räfflad nagelskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/rafflad-nagelskivling-wordpress-400-square.png",
  },
  {
    cardId: 4,
    cardSlot: 0,
    text: "Stolt fjällskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stolt-fjallskivling-wordpress-400-square.png",
  },
  {
    cardId: 5,
    cardSlot: 0,
    text: "Stort haröra",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stort-harora-wordpress-400-square-.png",
  },
  {
    cardId: 6,
    cardSlot: 0,
    text: "Trattkantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/trattkantarell-wordpress-400-square.png",
  },
];
let cardDeck = [];

//Randomizes which deck to be used for the game
function chooseDeck() {
  const chosenDeck = Math.floor(Math.random() * 3);
  if (chosenDeck == 1) {
    return (cardDeck = cardPairs);
  } else if (chosenDeck == 2) {
    return (cardDeck = cardPairs2);
  }
}
chooseDeck();

let cardsActive = cardDeck;
let cardsChosen = [];
let cardsWon = [];
let cardSlot;

function hideCards() {
  if (cardsWon.length <= 12) {
    cardsWon.forEach((card) => {
      document.getElementById(card.cardSlot).style.borderColor = "green";
    });
    cardsActive.forEach((card) => {
      let slot = document.getElementById(card.cardSlot);
      slot.innerHTML = "";
      setTimeout(() => {}, 1000);
    });
    cardsChosen = [];
  }
  setTimeout(() => {
    if (cardsWon.length == 12) {
      alert(`Congratulations you have won!`);
      location.reload();
    }
  }, 500);
}

/*Future fixes:
 1. Better comparison algorithm*/
function checkForMatch() {
  let firstCard;
  let secondCard;

  //Checks if the chosen cards are in the active array
  let i = 0;
  cardsActive.forEach((card) => {
    if (card.cardSlot == cardsChosen[0]) {
      firstCard = card;
    } else if (card.cardSlot == cardsChosen[1]) {
      secondCard = card;
    }
    i++;
  });

  if (firstCard.cardId === secondCard.cardId) {
    cardsWon.push(firstCard, secondCard);
    //Finds where the matched cards are placed and removes them from being in the active array
    cardsActive.splice(cardsActive.indexOf(firstCard), 1);
    cardsActive.splice(cardsActive.indexOf(secondCard), 1);
    cardsChosen = [];
  }
  console.log(cardsActive);
  console.log(cardsWon);
  hideCards();
}

/* It shows the card by placing the image in on to the cardslot*/
function showCard(id) {
  cardSlot = document.getElementById(id);
  console.log(cardSlot);
  cardsActive.forEach((card) => {
    if (card.cardSlot == id) {
      const imageCard = document.createElement("img");
      imageCard.src = card.image;
      imageCard.className = "imageCard";
      cardSlot.appendChild(imageCard);
      if (cardsChosen.length == 2) {
        setTimeout(() => {
          checkForMatch();
        }, 500);
      }
    }
  });
}

/*Puts the chosen cards in an array that only allows 2 cards
 To make sure only 2 cards are being checked at the same time */
let displayCard = (element) => {
  const cardPicked = element.target.id;
  //Makes sure You can't pick already won cards or already chosen ones
  if (cardPicked !== "") {
    console.log(cardPicked);
    if (cardsChosen.length < 2) {
      cardsChosen.push(cardPicked);
      showCard(cardPicked);
    }
  }
};

//Fisher-Yates (Knuth) Shuffle
function shuffleCards(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let cards = [];

/* The chosen decks cards get shuffled and then an event is added*/
function renderGameBoard() {
  shuffleCards(cardDeck);
  cards = document.getElementsByClassName("card");
  for (let i = 0; i <= cardDeck.length - 1; i++) {
    cards[i].addEventListener("click", displayCard);
    cardsActive[i].cardSlot = i + 1;
  }
}

renderGameBoard();
