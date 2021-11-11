const deck1 = [
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
const deck2 = [
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

let cardsActive = [];
let cardsChosen = [];
let cardsWon = [];

/* Future fixes:
1. Improving the reset function */
function resetGame() {
  setTimeout(() => {
    alert(`Congratulations you have won!`);
    // location.reload(); // To reload entire website
    cardsActive = cardsWon;
    cardsWon = [];
    hideCards();
    cardsActive = [];
    renderGameBoard();
  }, 300);
}

function hideCards() {
  /* Changes borders to green when a card is matched to inform the user
  of the match */
  if (cardsWon.length <= 12) {
    cardsWon.forEach((card) => {
      // document.getElementById(card.cardSlot).childNodes[0].classList.add("winActive")
      document.getElementById(card.cardSlot).classList.add("winActive")
    });

    /*Empties the element if it is not a match */
    cardsActive.forEach((card) => {
      let slot = document.getElementById(card.cardSlot);
      slot.innerHTML = "";
      slot.classList.remove("winActive")
    });
    cardsChosen = [];
  }
  if (cardsWon.length == 12) {
    resetGame();
  }
}

/*Future fixes:
 1. Better comparison algorithm */
function checkForMatch() {
  let firstCard;
  let secondCard;

  //Checks if the chosen cards are in the active array
  firstCard = cardsActive.find((card) => card.cardSlot == cardsChosen[0]);
  secondCard = cardsActive.find((card) => card.cardSlot == cardsChosen[1]);

  // old code replaced by above code
  // cardsActive.forEach((card) => {
  //   if (card.cardSlot == cardsChosen[0]) {
  //     firstCard = card;
  //   } else if (card.cardSlot == cardsChosen[1]) {
  //     secondCard = card;
  //   }
  // });

  if (firstCard.cardId === secondCard.cardId) {
    cardsWon.push(firstCard, secondCard);
    //Finds where the matched cards are placed and removes them from being in the active array
    cardsActive.splice(cardsActive.indexOf(firstCard), 1);
    cardsActive.splice(cardsActive.indexOf(secondCard), 1);
    cardsChosen = [];
  }
  hideCards();
}

/* It shows the card by placing the image in on to the cardslot*/
function showCard(id) {
  const cardPlacement = document.getElementById(id);
  cardsActive.forEach((card) => {
    if (card.cardSlot == id) {
      const imageCard = document.createElement("img");
      imageCard.src = card.image;
      imageCard.className = "imageCard";
      cardPlacement.appendChild(imageCard);
      if (cardsChosen.length == 2) {
        setTimeout(() => {
          checkForMatch();
        }, 500);
      }
    }
  });
}

/* Puts the chosen cards in an array that only allows 2 cards.
 It makes sure only 2 cards are being checked at the same time */
const displayCard = (element) => {
  const cardPicked = element.target.id;

  /* Makes sure you can't pick already picked or won cards.
  Since the click would occur on the image element and that element does
  not contain an id, only the card slot does.
  Future fixes:
  1. The slot element is slightly visible behind the image so if you click on the border
  you can still pick already open and won cards.*/
  if (cardPicked !== "") {
    if (cardsChosen.length < 2) {
      cardsChosen.push(cardPicked);
      showCard(cardPicked);
    }
  }
};

const cards = document.getElementsByClassName("card");
for (let i = 0; i <= cards.length - 1; i++) {
  cards[i].addEventListener("click", displayCard);
}

//Fisher-Yates (Knuth) Shuffle
function shuffleCards(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    const temporaryValue = array[--currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/* Randomizes which deck is used for a more fun playing experience */
function chooseDeck() {
  const randomPick = Math.floor(Math.random() * 2);

  /* The map function prevents from any changes being made to the original deck-arrays.*/
  return shuffleCards(
    randomPick == 1
      ? (cardsActive = deck1.map((card) => {
          return card;
        }))
      : (cardsActive = deck2.map((card) => {
          return card;
        }))
  );
}

/* The deck gets chosen and the cards shuffled.
The cards are then given an cardSlot value to represent which
placement they have on the board. */
function renderGameBoard() {
  cardsActive = chooseDeck();

  for (let i = 0; i <= cardsActive.length - 1; i++) {
    cardsActive[i].cardSlot = i + 1;
  }
}

renderGameBoard();
