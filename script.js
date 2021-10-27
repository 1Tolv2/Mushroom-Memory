const cardPairs = [
  {
    firstId: 0,
    secondId: 0,
    text: "Blodriska",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blodriska-wordpress-400-square.png",
  },
  {
    firstId: 0,
    secondId: 0,
    text: "Bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/blacksvamp-wordpress-400-square.png",
  },
  {
    firstId: 0,
    secondId: 0,
    text: "Föränderlig tofsskivling",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/foranderlig-tofsskivling-wordpress-400-square.png",
  },
  {
    firstId: 0,
    secondId: 0,
    text: "Grå bläcksvamp",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/gra-blacksvamp-wordpress-400-square-.png",
  },
  {
    firstId: 0,
    secondId: 0,
    text: "Hattmurkla",
    image:
      "https://artbysofiajohnsson.files.wordpress.com/2021/09/hattmurkla-wordpress-400-square-.png",
  },
  {
    firstId: 0,
    secondId: 0,
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

let cardsActive = [];
let cardsChosen = [];
let cardsWon = [];
let cardSlot;

/*Behöver fixas:
  1. Hitta ett sätt att förhindra att klick eventet är igång under tiden matchningen görs
  2. Gör vunna kort oklickbara
  3. Alerten triggas innan kortet blivit grönt, lite irriterande*/
function hideCards() {
  if (cardsWon.length <= 6) {
    cardsWon.forEach((card) => {
      let firstCard = document.getElementById(card.firstId);
      let secondCard = document.getElementById(card.secondId);
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      firstCard.style.backgroundColor = "lightgreen";
      secondCard.style.backgroundColor = "lightgreen";
    });
    cardsActive.forEach((card) => {
      let firstCard = document.getElementById(card.firstId);
      let secondCard = document.getElementById(card.secondId);
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      setTimeout(() => {}, 1000);
    });
    cardsChosen = [];
  }
  if (cardsWon.length == 6) {
    alert(`You have won!`);
  }
}

/*Behöver fixas:
  1. Hitta en bättre lösning för jämförelsen, jämföra looparna och kansek filtrera?*/
function checkForMatch() {
  cardsActive = [];
  cardPairs.forEach((pair) => {
    if (pair.firstId == cardsChosen[0] || pair.firstId == cardsChosen[1]) {
      if (pair.secondId == cardsChosen[0] || pair.secondId == cardsChosen[1]) {
        cardsWon.push(pair);
        cardsChosen = [];
      } else cardsActive.push(pair);
    } else if (
      pair.secondId == cardsChosen[0] ||
      pair.secondId == cardsChosen[1]
    ) {
      if (pair.firstId == cardsChosen[0] || pair.firstId == cardsChosen[1]) {
        cardsWon.push(pair);
        cardsChosen = [];
      } else cardsActive.push(pair);
    } else cardsActive.push(pair);
  });
  hideCards();
}

function showCard(id) {
  let imageCard;
  cardSlot = document.getElementById(id);
  cardsActive.forEach((pair) => {
    if (pair.firstId == cardSlot.id || pair.secondId == cardSlot.id) {
      imageCard = document.createElement("img");
      imageCard.src = pair.image;
      imageCard.className = "imageCard";
      cardSlot.appendChild(imageCard);
      console.log(cardsChosen);
      if (cardsChosen.length == 2) {
        setTimeout(() => {
          checkForMatch();
        }, 1000);
      }
    }
  });
}

//Fisher-Yates (Knuth) Shuffle
// function shuffleCards() {
//   let currentIndex = array.length,
//     temporaryValue,
//     randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex -= 1
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }

// Klicka på kort för att visa och lägg detta i en array
function flipCard(id) {
  if (cardsChosen.length < 2) {
    const cardPicked = document.getElementById(id).id;
    cardsChosen.push(cardPicked);
    showCard(id);
  }
}

/*Placera ut korten på kortbrädet
Behöver fixas:
  1. Randomisera kort renderingen
  2. Se om man kan göra det till två funktioner för att slippa repetitionen
  3. Indexen kanske ska läggas in i en array o cardPairs arrayen?*/
function renderCards() {
  cardsActive = cardPairs;
  let i = 1;
  cardPairs.forEach((pair) => {
    const cardSlot1 = document.getElementById(i);
    cardSlot1.addEventListener("click", () => {
      flipCard(cardSlot1.id);
    });
    pair.firstId = i;
    i++;
    const cardSlot2 = document.getElementById(i);

    cardSlot2.addEventListener("click", () => {
      flipCard(cardSlot2.id);
    });
    pair.secondId = i;
    i++;
  });
}
renderCards();
