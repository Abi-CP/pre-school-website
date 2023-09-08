const body = document.querySelector('body');
const bgDim = document.querySelector('.bg-dim');
const btt = document.querySelector('.btt');

//Chat
const chat = document.querySelector('.chat');
const chatWhatsapp = document.querySelector('.whatsapp');
const chatPhone = document.querySelector('.phone');
let chatOpen = false;
chat.addEventListener('click', () => chatFunction());

function chatFunction() {
  if (chatOpen == false) {
    openChat();
  } else {
    closeChat();
  }
}

function openChat() {
  bgDim.style.display = 'block';
  chat.classList.add('active');
  window.addEventListener('scroll', closeChat);
  bgDim.addEventListener('click', closeChat);
  chatWhatsapp.classList.add('active');
  chatPhone.classList.add('active');
  return (chatOpen = true);
}

function closeChat() {
  chat.classList.remove('active');
  bgDim.style.display = 'none';
  chatWhatsapp.classList.remove('active');
  chatPhone.classList.remove('active');
  return (chatOpen = false);
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 250) {
    btt.style.display = 'block';
  } else {
    btt.style.display = 'none';
  }
});

//Swiper JS
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

//Nav Panel
const navPanel = document.querySelector('.nav-panel');
const hamBurger = document.querySelector('.ham-menu');
const xIcon = document.querySelector('.x');

function navPanelActivate() {
  navPanel.classList.add('active');
  bgDim.style.display = 'block';
  body.style.overflow = 'hidden';
  bgDim.addEventListener('click', navPanelDeactivate);
}

function navPanelDeactivate() {
  navPanel.classList.remove('active');
  bgDim.style.display = 'none';
  body.style.overflow = 'auto';
}

hamBurger.addEventListener('click', navPanelActivate);
xIcon.addEventListener('click', navPanelDeactivate);

//Typed JS
var typed = new Typed('.type-txt', {
  strings: ['Explore', 'Play', 'Learn', 'Grow'],
  typeSpeed: 50,
  loop: true,
});

//ScrollToTop
var windowScrollY = window.scrollY;
btt.addEventListener('click', () => {
  window.scrollTo(0, 0);
  btt.classList.add('active');
  document.addEventListener('scroll', () => {
    if (window.scrollY <= 1000) {
      btt.classList.remove('active');
    }
  });
});
