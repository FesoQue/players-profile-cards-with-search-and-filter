// **** SET DATE DYNAMICALLY ****
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();



// **** SCROLLBAR ****
const nav = document.querySelector("nav");
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

// **** MENU BUTTON (OPEN/CLOSE LINKS) ****
const button = document.querySelectorAll('.menu-btn');
const links = document.querySelector('.nav-links');
const linksContainer = document.querySelector('.links-container');

button.forEach(function (btn) {
  btn.addEventListener('click', () => {
  const nav = btn.parentElement.parentElement.parentElement.parentElement;

  // **** condition ***
  !(nav.classList.contains('show-links')) ? nav.classList.add('show-links') : nav.classList.remove('show-links');

// **** DYNAMICALLY SET THE HEIGHT OF THE NAV LINKS ****
const linksHeight = links.getBoundingClientRect().height;
const linksContainerHeight = linksContainer.getBoundingClientRect().height;

(linksContainerHeight === 0) ? linksContainer.style.height = `${linksHeight}px` : linksContainer.style.height = 0;
  })
})

// **** COLLAPSE THE LINKS CONTAINER HEIGHT FOR SMALLER SCREEN WHEN THE ACTUAL LINKS ARE BEING CLICKED ****
const scrollLinks = document.querySelectorAll('.scroll-links');
scrollLinks.forEach(links => {
  links.addEventListener('click', (e) => {
    linksContainer.style.height = 0;
    //console.log(links)
    const nav = links.parentElement.parentElement.parentElement.parentElement;
    //console.log(nav)
    const currentLink = e.currentTarget;
    if (links === currentLink) {
     nav.classList.add('close');
    } else {
      nav.classList.remove('close')
    }
  })
})

// **** DISPLAY CONTACT MODAL
const contact = document.querySelector(".contact-wrapper");
const contactLink = document.getElementById("contact-link");
const closeModal = document.querySelector(".close-modal");

contactLink.addEventListener("click", () => {
  //console.log('click click')
  contact.classList.toggle("show-modal");
});

// *** CLOSE CONTACT MODAL ****
closeModal.addEventListener("click", () => {
  contact.classList.remove("show-modal");
});
