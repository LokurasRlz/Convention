// TOGGABLE MENU //

// Declaring elements
const openedMenu = document.querySelector('.opened-menu');
const menuItems = document.querySelectorAll('.menu-item');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const mainContainer = document.querySelector('.main-container');

// Opening menu
function openHamburgerMenu() {
  openedMenu.classList.add('open-menu');
  closeIcon.style.display = 'block';
  hamburgerIcon.style.display = 'none';
  mainContainer.classList.add('blur');
}

hamburgerMenu.addEventListener('click', openHamburgerMenu);

// Clsoing menu
function clickLinks() {
  openedMenu.classList.remove('open-menu');
  closeIcon.style.display = 'none';
  hamburgerIcon.style.display = 'block';
  mainContainer.classList.remove('blur');
}

menuItems.forEach(
  (item) => {
    item.addEventListener('click', clickLinks);
  },
);

// Dynamic HTML
const singerSection = document.querySelector('#featured-singers .container-fluid');
const singersArray = [{
  name: 'Atif Aslam',
  accolades: 'Tamgha-e-Imtiaz (2008), Dubai Walk of Fame (2019)',
  desc: 'He has recorded numerous chart-topping songs in both Pakistan and India and is known for his vocal belting technique',
  image: 'css/Featured/mario.jpg',
  class: 'singer1',
},
{
  name: 'Aima Baig',
  accolades: 'Pop, Rock, classical',
  desc: 'She rose to fame after her work on Lahore Se Aagey (2016), due to which she gained popularity through many other soundtracks and her appearance in Coke Studio',
  image: 'css/Featured/rene.jpg',
  class: 'singer2',
},
{
  name: 'Rahat Fateh',
  accolades: 'Honorary Doctorate of Music by the University of Oxford',
  desc: 'Pakistani Sufi singer and musician, primarily of Qawwali, devotional music of the Muslim Sufis',
  image: 'css/Featured/faker.jpg',
  class: 'singer3',
},
{
  name: 'Falak Shabbir',
  accolades: 'Owner of Falak Records Music',
  desc: 'A Pakistani singer-songwriter, also referred as the "King of Soul Style", He first came to attention with his 2008 debut single "Rog"',
  image: 'assets/images/falak.jpg',
  class: 'singer4',
},
{
  name: 'Shamoon Ismail',
  accolades: 'Lux Style Awards- Nominated 2019 (Singer of the Year)',
  desc: 'Islamabad-based singer, songwriter, composer and multi-instrumentalist known for his signature blend of "Punjabi and blues"',
  image: 'assets/images/shamoon.jpeg',
  class: 'singer5',
},
{
  name: 'Momina Mustehsan',
  accolades: 'BBC 100 most influential women, Forbes "30 Under 30"',
  desc: 'The release of the 2016 song "Afreen Afreen" established Mustehsan as one of the most recognized singers of Pakistan',
  image: 'assets/images/Momina-Mustehsan.jpg',
  class: 'singer6',
},
];

function creatSinger(profile) {
  singerSection.innerHTML += `
  <article class="${profile.class} singer">
  <div class="featured-singers__img">
      <img src="${profile.image}" alt="">
  </div>
  <div class="featured-singers__desc">
      <h3>${profile.name}</h3>
      <h4>${profile.accolades}</h4>
      <hr>
      <p>${profile.desc}</p>
  </div>
</article>`;
}

function createSingerSection() {
  for (let i = 0; i < singersArray.length; i += 1) {
    creatSinger(singersArray[i]);
    if (i > 1) {
      document.querySelector(`.singer${i + 1}`).classList.add('toggle');
    }
  }
  singerSection.innerHTML += '<div id="more">More <a href="#featured-singers"><i class="fas fa-chevron-down"></i></a></div>';
}

createSingerSection();