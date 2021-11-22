const deck1 = [
  {
    cardSlot: 0,
    text: "Blodriska",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blodriska-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blacksvamp-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Föränderlig tofsskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/foranderlig-tofsskivling-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Grå bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/gra-blacksvamp-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Hattmurkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/hattmurkla-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Kantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/kantarell-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Blodriska",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blodriska-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blacksvamp-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Föränderlig tofsskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/foranderlig-tofsskivling-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Grå bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/gra-blacksvamp-wordpress-400-square-.png",
  },
  {
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
    cardSlot: 0,
    text: "Karljohansvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/karljohan-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Murkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/murkla-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Räfflad nagelskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/rafflad-nagelskivling-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Stolt fjällskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stolt-fjallskivling-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Stort haröra",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stort-harora-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Trattkantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/trattkantarell-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Karljohansvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/karljohan-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Murkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/murkla-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Räfflad nagelskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/rafflad-nagelskivling-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Stolt fjällskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stolt-fjallskivling-wordpress-400-square.png",
  },
  {
    cardSlot: 0,
    text: "Stort haröra",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/stort-harora-wordpress-400-square-.png",
  },
  {
    cardSlot: 0,
    text: "Trattkantarell",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/trattkantarell-wordpress-400-square.png",
  },
];

class GameBoard {
  constructor() {
    this.currentDeck = this.pickDeck();
    this.cardsActive = this.currentDeck.map((card) => {
      return card;
    });
    this.cardsPendingForMatch = [];
    this.cardsWon = [];
    this.attempts = 0;
    this.highscore = 0;
  }

  moveMatchedCards(firstCard, secondCard) {
    this.cardsWon.push(firstCard, secondCard);
    //Finds where the matched cards are placed and removes them from being in the active array
    this.cardsActive.splice(this.cardsActive.indexOf(firstCard), 1);
    this.cardsActive.splice(this.cardsActive.indexOf(secondCard), 1);
  }
  //Fisher-Yates (Knuth) Shuffle
  shuffleCards(array) {
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
  pickDeck() {
    const randomPick = Math.floor(Math.random() * 2);
    return this.shuffleCards(
      randomPick == 1
        ? (this.currentDeck = deck1.map((card) => {
            return card;
          }))
        : (this.currentDeck = deck2.map((card) => {
            return card;
          }))
    );
  }
  restartGame() {
    this.currentDeck = this.pickDeck();
    this.cardsActive = this.currentDeck.map((card) => {
      return card;
    });
    this.cardsPendingForMatch = [];
    this.cardsWon = [];
    this.attempts = 0;
  }
}

let game = new GameBoard();

function resetGame() {
  document.getElementById("winBox").style.display = "none"
      document.getElementById("winBlock").style.display = "none"
  game.cardsActive = game.cardsWon;
  hideCards();
  game.restartGame();
  updateScoreBoardText()
  renderGameBoard();
}

function showWinningMessage() {
  document.getElementById("winBox").style.display = "block";
  document.getElementById("winBlock").style.display = "block";
}

function updateScoreBoardText() {
  scoreBoardText.innerHTML = `<strong>Highscore:</strong> ${game.highscore}<br />
  <strong>Tries:</strong> ${game.attempts}`;
}

//After win the scoreboard is slow to update so you don't see the score until you pressed ok on the alert.
function updateScoreBoard() {
  const gameFinished = 12;
  if (game.cardsWon.length == gameFinished) {
    if (game.attempts < game.highscore || game.highscore == 0) {
      game.highscore = game.attempts;
      game.attempts = 0;
      updateScoreBoardText();
    }
    setTimeout(showWinningMessage(), 300);
  }
  updateScoreBoardText();
}

function hideCards() {
  game.cardsActive.forEach((card) => {
    const cardSlot = document.getElementById(card.cardSlot);
    cardSlot.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/768px-Solid_white.svg.png";
    cardSlot.classList.remove("winActive", "picked");
  });
}

function markAsWon(firstCard, secondCard) {
  game.cardsPendingForMatch.forEach((id) => {
    document.getElementById(id).classList.add("winActive");
  });
  game.moveMatchedCards(firstCard, secondCard);
}

//Checks if the first and second card has the same cardId
function checkForMatch() {
  game.attempts++;
  let firstCard = game.cardsActive.find(
    (card) => card.cardSlot == game.cardsPendingForMatch[0]
  );
  let secondCard = game.cardsActive.find(
    (card) => card.cardSlot == game.cardsPendingForMatch[1]
  );
  firstCard.text === secondCard.text
    ? markAsWon(firstCard, secondCard)
    : hideCards();
  game.cardsPendingForMatch = [];
  updateScoreBoard();
}

/*shows the card by changing the image to the card with that slot id */
function showCard(cardPicked) {
  const card = game.cardsActive.find((card) => card.cardSlot == cardPicked.id);
  cardPicked.src = card.image;
  if (game.cardsPendingForMatch.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

/*if the card does not have the picked class it is then added 
in the pending match array */
const displayCard = (element) => {
  const cardPicked = element.target;

  if (!cardPicked.classList.contains("picked")) {
    if (game.cardsPendingForMatch.length < 2) {
      game.cardsPendingForMatch.push(cardPicked.id);
      cardPicked.classList.add("picked");
      showCard(cardPicked);
    }
  }
};

document.getElementById("winBlock").addEventListener("click", resetGame)
  

const cards = document.getElementsByClassName("card");
for (let i = 0; i <= cards.length - 1; i++) {
  cards[i].addEventListener("click", displayCard);
}

/*The cards are given a cardSlot value to represent which
placement they have on the board. */
function renderGameBoard() {
  for (let i = 0; i <= game.currentDeck.length - 1; i++) {
    game.currentDeck[i].cardSlot = i + 1;
  }
}

renderGameBoard();
