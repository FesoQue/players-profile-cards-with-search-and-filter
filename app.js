// **** MANAGERS CARD ****
const managers = [
  //managers and staffs
  {
    id: 1,
    profileImg: "./players-images/Ole.jpg",
    name: "Ole Gunnar SolskJaer",
    age: 47,
    position: "Coach",
    country: "norway",
    flag: "./svg-icons/norway.svg",
  },
  {
    id: 2,
    profileImg: "./players-images/Mike-Phelan.jpg",
    name: "Mike Phelan",
    age: 58,
    position: "Coach",
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 4,
    profileImg: "./players-images/Carrick.jpg",
    name: "Michael Carrick",
    age: 58,
    position: "Coach",
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 4,
    profileImg: "./players-images/Hartis.jpg",
    name: "Richard Hartis",
    age: 53,
    position: "Coach",
    country: "england",
    flag: "./svg-icons/england.svg",
  },
];

// **** PLAYERS CARD ****
const players = [
  {
    id: 1,
    profileImg: "./players-images/DDG.jpg",
    name: "David DeGea",
    age: 30,
    height: "1.92m",
    position: "GoalKeeper",
    shirtNo: 1,
    country: "spain",
    flag: "./svg-icons/spain.svg",
  },
  {
    id: 2,
    profileImg: "./players-images/Henderson.jpg",
    name: "dean Henderson",
    age: 23,
    height: "1.87m",
    position: "GoalKeeper",
    shirtNo: 26,
    country: "England",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 3,
    profileImg: "./players-images/Maguire.jpg",
    name: "Harry Maguire",
    age: 27,
    height: "1.87m",
    position: "Defender",
    shirtNo: 5,
    country: "England",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 4,
    profileImg: "./players-images/Lindelof.jpg",
    name: "Victor Lindelof",
    age: 26,
    height: "1.87m",
    position: "Defender",
    shirtNo: 14,
    country: "sweden",
    flag: "./svg-icons/sweden.svg",
  },
  {
    id: 5,
    profileImg: "./players-images/shaw.jpg",
    name: "Luke shaw",
    age: 25,
    height: "1.85m",
    position: "Defender",
    shirtNo: 23,
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 6,
    profileImg: "./players-images/alex-telles.jpg",
    name: "alex telles",
    age: 27,
    height: "1.81m",
    position: "Defender",
    shirtNo: 27,
    country: "brazil",
    flag: "./svg-icons/brazil.svg",
  },
  {
    id: 7,
    profileImg: "./players-images/AWB.jpg",
    name: "Aaron W. Bissaka",
    age: 22,
    height: "1.93m",
    position: "Defender",
    shirtNo: 29,
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 8,
    profileImg: "./players-images/Bruno.jpg",
    name: "bruno fernandes",
    age: 26,
    height: "1.84m",
    position: "Midfield",
    shirtNo: 18,
    country: "portugal",
    flag: "./svg-icons/portugal.svg",
  },
  {
    id: 9,
    profileImg: "./players-images/Pogba.jpg",
    name: "paul pogba",
    age: 27,
    height: "1.91m",
    position: "Midfield",
    shirtNo: 6,
    country: "france",
    flag: "./svg-icons/france.svg",
  },
  {
    id: 10,
    profileImg: "./players-images/Matic.jpg",
    name: "nemanja matic",
    age: 32,
    height: "1.94m",
    position: "Midfield",
    shirtNo: 31,
    country: "serbia",
    flag: "./svg-icons/serbia.svg",
  },
  {
    id: 11,
    profileImg: "./players-images/fred.jpg",
    name: "Fred rodriguez",
    age: 27,
    height: "1.69m",
    position: "Midfield",
    shirtNo: 17,
    country: "brazil",
    flag: "./svg-icons/brazil.svg",
  },
  {
    id: 12,
    profileImg: "./players-images/MCTominay.jpg",
    name: "Scott McTominay",
    age: 23,
    height: "1.93m",
    position: "Midfield",
    shirtNo: 39,
    country: "scotland",
    flag: "./svg-icons/scotland.svg",
  },
  {
    id: 13,
    profileImg: "./players-images/Mata.jpg",
    name: "juan Mata",
    age: 32,
    height: "1.7m",
    position: "Midfield",
    shirtNo: 8,
    country: "spain",
    flag: "./svg-icons/spain.svg",
  },
  {
    id: 14,
    profileImg: "./players-images/Tuanzebe.jpg",
    name: "axel tuanzebe",
    age: 23,
    height: "1.82m",
    position: "Defender",
    shirtNo: 38,
    country: "congo",
    flag: "./svg-icons/congo.svg",
  },
  {
    id: 15,
    profileImg: "./players-images/Williams.jpg",
    name: "brandon williams",
    age: 20,
    height: "1.71m",
    position: "Defender",
    shirtNo: 33,
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 16,
    profileImg: "./players-images/Ighalo.jpg",
    name: "odion ighalo",
    age: 31,
    height: "1.81m",
    position: "forward",
    shirtNo: 25,
    country: "nigeria",
    flag: "./svg-icons/nigeria.svg",
  },
  {
    id: 17,
    profileImg: "./players-images/Martial.jpg",
    name: "Anthony martial",
    age: 24,
    height: "1.81m",
    position: "forward",
    shirtNo: 11,
    country: "france",
    flag: "./svg-icons/france.svg",
  },
  {
    id: 28,
    profileImg: "./players-images/rashford.jpeg",
    name: "Marcus Rashford",
    age: 23,
    height: "1.8m",
    position: "forward",
    shirtNo: 10,
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 29,
    profileImg: "./players-images/greenwood.jpg",
    name: "Mason greenwood",
    age: 19,
    height: "1.81m",
    position: "forward",
    shirtNo: 26,
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 29,
    profileImg: "./players-images/Cavani.jpeg",
    name: "edison cavani",
    age: 33,
    height: "1.84m",
    position: "forward",
    shirtNo: 7,
    country: "uruguay",
    flag: "./svg-icons/uruguay.svg",
  },
  {
    id: 30,
    profileImg: "./players-images/lingard.png",
    name: "jesse lingard",
    age: 27,
    height: "1.75m",
    position: "forward",
    shirtNo: 14,
    country: "england",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 31,
    profileImg: "./players-images/james.jpg",
    name: "daniel james",
    age: 23,
    height: "1.7m",
    position: "forward",
    shirtNo: 21,
    country: "wales",
    flag: "./svg-icons/wales.svg",
  },
  {
    id: 32,
    profileImg: "./players-images/romero.jpg",
    name: "Sergio Romero",
    age: 33,
    height: "1.92m",
    position: "GoalKeeper",
    shirtNo: 22,
    country: "Argentina",
    flag: "./svg-icons/argentina.svg",
  },
  {
    id: 33,
    profileImg: "./players-images/Bailly.png",
    name: "Eric Bailly",
    age: 26,
    height: "1.87m",
    position: "Defender",
    shirtNo: 3,
    country: "Cote d'voire",
    flag: "./svg-icons/ivory-coast.svg",
  },
  {
    id: 34,
    profileImg: "./players-images/LeeGrant.png",
    name: "Lee Grant",
    age: 37,
    height: "1.93m",
    position: "Goalkeeper",
    shirtNo: 13,
    country: "England",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 35,
    profileImg: "./players-images/Rojo.jpg",
    name: "Marcos Rojo",
    age: 30,
    height: "1.87m",
    position: "Defender",
    shirtNo: 16,
    country: "Argentina",
    flag: "./svg-icons/argentina.svg",
  },
  {
    id: 36,
    profileImg: "./players-images/Jones.jpg",
    name: "Philip Jones",
    age: 28,
    height: "1.8m",
    position: "Defender",
    shirtNo: 4,
    country: "Argentina",
    flag: "./svg-icons/england.svg",
  },
  {
    id: 36,
    profileImg: "./players-images/timothy.png",
    name: "Timothy Fosu-Mensah",
    age: 22,
    height: "1.85m",
    position: "Defender",
    shirtNo: 24,
    country: "Netherlands",
    flag: "./svg-icons/netherlands.svg",
  },
  {
    id: 37,
    profileImg: "./players-images/DVB.jpg",
    name: "Donny V. de Beek",
    age: 23,
    height: "1.84m",
    position: "Midfield",
    shirtNo: 34,
    country: "Netherlands",
    flag: "./svg-icons/netherlands.svg",
  },
];

// **** JOINS TWO ARRAYS (MANAGERS AND PLAYERS CARD) ****
const squad = [...managers, ...players]; // the spread method

// **** SELECTORS ****
const sectionCenter = document.querySelector(".section-center");
const selectOption = document.querySelector("select");
const nav = document.querySelector("nav");
const button = document.querySelectorAll(".menu-btn");
const scrollLinks = document.querySelectorAll(".scroll-links");
const links = document.querySelector(".nav-links");
const linksContainer = document.querySelector(".links-container");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const contact = document.querySelector(".contact-wrapper");
const contactLink = document.getElementById("contact-link");
const closeModal = document.querySelector(".close-modal");

// **** SET DATE DYNAMICALLY ****
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// **** MENU BUTTON (OPEN/CLOSE LINKS) ****
button.forEach(function (btn) {
  btn.addEventListener("click", () => {
    const nav = btn.parentElement.parentElement.parentElement.parentElement;

    // **** condition ***
    !nav.classList.contains("show-links")
      ? nav.classList.add("show-links")
      : nav.classList.remove("show-links");

    // **** DYNAMICALLY SET THE HEIGHT OF THE NAV LINKS ****
    const linksHeight = links.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    linksContainerHeight === 0
      ? (linksContainer.style.height = `${linksHeight}px`)
      : (linksContainer.style.height = 0);
  });
});

// **** COLLAPSE THE LINKS CONTAINER HEIGHT FOR SMALLER SCREEN WHEN THE ACTUAL LINKS ARE BEING CLICKED ****
scrollLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    linksContainer.style.height = 0;
    const nav = links.parentElement.parentElement.parentElement.parentElement;
    const currentLink = e.currentTarget;
    
    links === currentLink
      ? nav.classList.add("close")
      : nav.classList.remove("close");
  });
});

// **** DISPLAY CONTACT MODAL
contactLink.addEventListener("click", () => {
  contact.classList.toggle("show-modal");
  // **** prevent scrolling when modal is sshowing ****
  (!contact.classList.contains('show-modal')) ?
    document.body.style.overflow = 'scroll' : document.body.style.overflow = 'hidden';

});

// *** CLOSE CONTACT MODAL ****
closeModal.addEventListener("click", () => {
  contact.classList.remove("show-modal");
  document.body.style.overflow = 'scroll';
});

// **** LOAD ITEMS ****
window.addEventListener("DOMContentLoaded", function () {
  displayTeamCard(managers, players);

  // **** SCROLLBAR ****
  window.addEventListener("scroll", function () {
    // **** selectors ****
    const navHeight = nav.getBoundingClientRect().height;
    const bookMark = document.querySelector(".snap");
    // *** document.documentElement.scrollHeight - window.innerHeight *** the result will be total scrollable height of your document ****
    const scrolled = Math.floor(window.scrollY); //scroll values
    // **** condition for toplink ****
    scrolled > 1000
      ? bookMark.classList.add("displayBookmark")
      : bookMark.classList.remove("displayBookmark");
    // **** condition for fixed navbar ****
    scrolled > navHeight
      ? nav.classList.add("fixed-nav")
      : nav.classList.remove("fixed-nav");
  });
});

// **** DISPLAY SQUAD FUNCTION ****
function displayTeamCard(managerCards, playerCards) {
  // **** COACH CARD ****
  let managerCard = managerCards.map(function (item) {
    return `<div class="card">
        <div class="profile-img">
          <img src=${item.profileImg} alt=${item.name} />
        </div>
        <div class="info">
          <p class="card-info"><span>Name:</span> ${item.name} </p>
          <p class="card-info"><span>age:</span> ${item.age} </p>
          <p class="card-info"><span>position:</span> ${item.position}</p>
          <div class="country">
            <p><span>Country:</span> ${item.country}</p>
            <img class="flag" src=${item.flag} alt=${item.flag} />
          </div>
        </div>
      </div>`;
  });

  // **** PLAYERS CARD ****
  let playerCard = playerCards.map(function (item) {
    return `<div class="card">
        <div class="profile-img">
          <img src=${item.profileImg} alt=${item.name} />
        </div>
        <div class="info">
          <p class="card-info"><span>Name:</span> ${item.name} </p>
          <p class="card-info"><span>age:</span> ${item.age}</p>
          <p class="card-info"><span>height:</span> ${item.height}</p>
          <p class="card-info"><span>position:</span> ${item.position}</p>
          <p class="card-info"><span>shirt no:</span> ${item.shirtNo}</p>
          <div class="country">
            <p><span>Country:</span> ${item.country}</p>
            <img class="flag" src=${item.flag} alt=${item.flag} />
          </div>
        </div>
      </div>`;
  });

  // **** join the element of managers and players array ****
  managerCard = managerCard.join("");
  playerCard = playerCard.join("");
  // **** add the players card array and managers cards array ****
  let teamCard = managerCard.concat(playerCard);
  sectionCenter.innerHTML = teamCard;
}

// **** SELECT OPTION ****
//Note: 'change' works better than 'click' for options
selectOption.addEventListener("change", function (e) {
  const position = e.currentTarget.value;
  // **** no filtering needed for team, so display and return ****
  if (position === "team") {
    displayTeamCard(managers, players);
    return;
  }
  // **** one match to check, filter, display and return ****
  if (position === "coach") {
    const cards = managers.filter(function (squadmember) {
      if (squadmember.position.toLowerCase() === position) {
        return squadmember;
      }
    });
    // **** no players, so passing cards and an empty array (players) ****
    displayTeamCard(cards, []);
    return;
  }
  // **** we have got here, so must be players ****
  const cards = players.filter(function (squadmember) {
    if (squadmember.position.toLowerCase() === position) {
      return squadmember;
    }
  });
  // **** no managers so passing an empty array and cards ****
  displayTeamCard([], cards);
});

// **** SEARCHBAR ****
const searchBar = document.querySelector("#search");
// **** allows us to type a series of letters before processing the search ****
function debounce(func, wait = 250) {
  let timeout = null;

  return (...args) => {
    const later = () => {
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// **** SEARCHBAR EVENT HANDLER ****
function searchHandler(players, event) {
  const name = event.target.value.toLowerCase();
  // **** searching through the players card ****
  const cards = players
    .filter((squadMember) => squadMember.name.toLowerCase().includes(name))
    .sort(
      (a, b) =>
        a.name.toLowerCase().indexOf(name) - b.name.toLowerCase().indexOf(name)
    );
  displayTeamCard([], cards);
  // **** searching through the coach card ****
  const coachCard = managers
    .filter((squadMember) => squadMember.name.toLowerCase().includes(name))
    .sort(
      (a, b) =>
        a.name.toLowerCase().indexOf(name) - b.name.toLowerCase().indexOf(name)
    );

  displayTeamCard(coachCard, cards);
}

// **** searchbar event listener ****
searchBar.addEventListener(
  "keyup",
  debounce(searchHandler.bind(searchBar, players))
);
displayTeamCard([], players);
