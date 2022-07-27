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
const artistSection = document.querySelector('#featured-artists .container-fluid');
const artistsArray = [{
  name: 'Mario Castañeda',
  accolades: 'Voice Actor',
  desc: 'He is the voice of Goku in Dragon Ball and also Hulk in Marvel, Bruce Willis, Jim Carrey, Mark Ruffalo, Tom Hanks, etc. in LatinAmerica',
  image: 'css/Featured/mario.jpg',
  class: 'artist1',
},
{
  name: 'Rene Garcia',
  accolades: 'Voice Actor',
  desc: 'He is the voice of Vegeta in Dragon ball and also Batman in DC, Stewie Griffin, Ben Affleck, Keanu Reeves, Chris ODonnell, Michael Keaton, Paul Giamatti, John Travolta, etc. in LatinAmerica',
  image: 'css/Featured/rene.jpg',
  class: 'artist2',
},
{
  name: 'Faker',
  accolades: 'Pro Videogames Player',
  desc: 'He is one of the only two players to have won the League of Legends World Championship three times, having done so in 2013, 2015 and 2016. He has also won the All-Star Paris 2014, the Mid-Season Invitational tournament in 2016 and 2017, and the IEM World Championship in 2016.',
  image: 'css/Featured/faker.jpg',
  class: 'artist3',
},
{
  name: 'Satoshi Kamiya',
  accolades: 'Origami Master',
  desc: 'He is a Japanese origami artist. Known internationally to be a master of the craft, he began folding at age two. Kamiya began designing origami models in 1995, and has since published hundreds of his creations.',
  image: 'css/Featured/origami.jpg',
  class: 'artist4',
},
{
  name: 'Yaya Han',
  accolades: 'Cosplayer',
  desc: 'She is a Chinese–American cosplayer, model and costume designer based in the United States. She is a regular judge at cosplay competitions and has appeared as a guest judge on the TBS reality show King of the Nerds multiple times. ',
  image: 'css/Featured/cosplay.jpg',
  class: 'artist5',
},
{
  name: 'MJ Choi',
  accolades: 'Coreographer"',
  desc: 'Based in New York and New Jersey, the I Love Dance crew has been showing off their choreography skills on stage, in the streets, and over the Internet. Director MJ Choi has been doing this ever since she founded the company in 2006.',
  image: 'css/Featured/kpop.jpg',
  class: 'artist6',
},
];

function creatArtist(profile) {
  artistSection.innerHTML += `
  <article class="${profile.class} artist">
  <div class="featured-artists__img">
      <img src="${profile.image}" alt="">
  </div>
  <div class="featured-artists__desc">
      <h3>${profile.name}</h3>
      <h4>${profile.accolades}</h4>
      <hr>
      <p>${profile.desc}</p>
  </div>
</article>`;
}

function createArtistSection() {
  for (let i = 0; i < artistsArray.length; i += 1) {
    creatArtist(artistsArray[i]);
    if (i > 1) {
      document.querySelector(`.artist${i + 1}`).classList.add('toggle');
    }
  }
  artistSection.innerHTML += '<div id="more">More <a href="#featured-artists"><i class="fas fa-chevron-down"></i></a></div>';
}

createArtistSection();

// ### More ###
const more = document.querySelector('#more a');
const speaker = document.querySelectorAll('.artist');

more.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i += 1) {
    speaker[i].classList.toggle('toggle');
  }
  if (speaker[2].classList.contains('toggle')) {
    more.innerHTML = "<i class='fas fa-chevron-down'></i>";
  } else {
    more.innerHTML = "<i class='fas fa-chevron-up'></i>";
  }
});