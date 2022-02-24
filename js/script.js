const gal_pics = document.querySelectorAll('.gal_pic');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextgal_pic = () => {
  // Get current class
  const current = document.querySelector('.curr');
  // Remove current class
  current.classList.remove('curr');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('curr');
  } else {
    // Add current to start
    gal_pics[0].classList.add('curr');
  }
};

const prevgal_pic = () => {
  // Get current class
  const current = document.querySelector('.curr');
  // Remove current class
  current.classList.remove('curr');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('curr');
  } else {
    // Add current to last
    gal_pics[gal_pics.length - 1].classList.add('curr');
  }
};

// Button events
next.addEventListener('click', () => {
  nextgal_pic();
});

prev.addEventListener('click', () => {
  prevgal_pic();
});

const togg = document.querySelector('#togg');
const bar = document.querySelector('.bar');

togg.addEventListener('click', () => {
  bar.classList.toggle('off');
  if (togg.innerHTML === 'Kontakt') {
    togg.innerHTML = '×';
  } else {
    togg.innerHTML= 'Kontakt';
  }
});

if (window.matchMedia("(orientation:portrait)").matches) {
const neu = document.querySelector('#neu')
const unne = document.querySelector('#bottom')

const handler = (entries) => {
  console.log(entries)
  if (!entries[0].isIntersecting) {
    neu.innerHTML= '<a href="#bottom">Kontakt</a>'
  } else {
    neu.innerHTML= '<a href="#top">Anfang</a>'
  }
}

const observer = new window.IntersectionObserver(handler)
observer.observe(unne)
}