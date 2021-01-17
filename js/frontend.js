const navbar = document.querySelector('.header');
const financialFreedomSection = document.querySelector('.financial-freedom');
const howContent = document.querySelectorAll('.how__content');
const slideRight = document.querySelectorAll('.slide-right');
const slideLeft = document.querySelectorAll('.slide-left');
const contactItems = document.querySelectorAll('.contact__primary--item');
const articlesToggleBtn = document.querySelector('.articles__more');
const moreArticles = document.querySelector('.display-none');
const article3 = document.querySelector('.article3');
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -25px 0px',
};
const slideOptions = {
  threshold: 0,
  rootMargin: '0px 0px -150px 0px',
};
const itemDelay = 1.2;
const observer = new IntersectionObserver(handler, appearOptions);
const slideInOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('slide-in');
      return;
    } else {
      entry.target.classList.add('slide-in');
      slideInOnScroll.unobserve(entry.target);
    }
  });
}, slideOptions);

if (window.location.pathname == '/') {
  window.onscroll = function () {
    if (financialFreedomSection.getBoundingClientRect().top <= 100) {
      navbar.style.opacity = 1;
    }
    if (financialFreedomSection.getBoundingClientRect().top >= 100) {
      navbar.style.opacity = 0;
    }
  };
} else {
  navbar.style.opacity = 1;
}

function handler(entries, observer) {
  var itemLoad = 0;

  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      animate(entry.target);
      gsap.to(entry.target, {
        opacity: 1,
        delay: itemLoad * itemDelay,
        onComplete: animate(entry.target),
      });
      itemLoad++;

      observer.unobserve(entry.target);
    }
  });
}

function animate(element) {
  element.classList.add('loaded');
}

for (let i = 0; i < howContent.length; i++) {
  observer.observe(howContent[i]);
}

for (let i = 0; i < contactItems.length; i++) {
  observer.observe(contactItems[i]);
}

slideRight.forEach((slide) => {
  slideInOnScroll.observe(slide);
});

slideLeft.forEach((slide) => {
  slideInOnScroll.observe(slide);
});

let articlesToggleState = false;

const articlesToggle = function () {
  moreArticles.classList.toggle('display-block');
  article3.classList.toggle('display-block');
  articlesToggleState = !articlesToggleState;
  if (articlesToggleState) {
    articlesToggleBtn.innerHTML = 'Less articles';
  } else {
    articlesToggleBtn.innerHTML = 'More articles';
  }
};

Player.on('progress', function () {
  // Get current video seek time
  let currentTime = Player.currentTime();

  if (lastTime !== currentTime) {
    lastTime = currentTime;
  } else if (myPlayer.paused() === false) {
    buffered = false;
    bufferPause = true;
    lastBuffer = Player.bufferedPercent();
  } else if (
    !buffered &&
    (Player.bufferedPercent() - lastBuffer > 0 ||
      Player.bufferedPercent() > 0.1)
  ) {
    buffered = true;

    // Resume playing if an additional 10% has been buffered
    if (bufferPause) {
      Player.play();
    }
  }
});
