document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.body;

  menuToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});







// உலகளாவிய மாறிகள் நிலைத்தன்மை
let passengerState = {
    adults: 1,
    children: 0,
    cabinClass: 'Economy'
};

// கஸ்டம் டிராப்டவுனை ஆன்/ஆஃப் செய்யும் செயல்பாடு
function togglePassengerSelect(element, event) {
    event.stopPropagation();
    element.parentElement.classList.toggle('dropdown-active');
}

// பிளஸ்/மைனஸ் கணக்கீட்டு மேலாண்மை
function modifyPassengerCount(type, val, event) {
    event.stopPropagation(); // டிராப்டவுன் மூடுவதைத் தடுக்கிறது
    
    let currentVal = passengerState[type];
    let newVal = currentVal + val;

    // வணிகக் கட்டுப்பாடுகள் (குறைந்தபட்சம் 1 பெரியவர் இருக்க வேண்டும், நெகட்டிவ் எண்கள் வரக்கூடாது)
    if (type === 'adults' && newVal < 1) return;
    if (type === 'children' && newVal < 0) return;
    
    passengerState[type] = newVal;
    document.getElementById(`count-${type}`).textContent = newVal;
    
    updatePassengerDisplayLabel();
}

 function selectCabinClass(className, event) {
    event.stopPropagation();
    passengerState.cabinClass = className;
    updatePassengerDisplayLabel();
}

 function updatePassengerDisplayLabel() {
    const totalPassengers = passengerState.adults + passengerState.children;
    let passengerText = `${totalPassengers} Passenger${totalPassengers > 1 ? 's' : ''}`;
    
    if (passengerState.children === 0) {
        passengerText = `${passengerState.adults} Adult${passengerState.adults > 1 ? 's' : ''}`;
    }
    
     document.getElementById('passengerDisplayLabel').textContent = `${passengerText}, ${passengerState.cabinClass}`;
}

 document.addEventListener('click', () => {
    document.querySelectorAll('.passenger-dropdown-wrapper').forEach(el => {
        el.classList.remove('dropdown-active');
    });
});






// navlink highlight js 

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const allLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-link, .header-actions .btn, .mobile-actions .btn');

  allLinks.forEach(link => {
    link.classList.remove('active');
    
    const linkPath = link.getAttribute('href');
    
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});






// hero js 

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-text-rotator .slide');
  if (slides.length === 0) return;

  let currentSlideIndex = 0;
  const changeInterval = 5000; 

  setInterval(() => {
    slides[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
  }, changeInterval);
});








// faq js 

document.addEventListener('DOMContentLoaded', () => {
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const faqItem = trigger.parentElement;
      const faqContent = trigger.nextElementSibling;
      const isOpen = faqItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        item.querySelector('.faq-content').style.maxHeight = null;
      });

      if (!isOpen) {
        faqItem.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        faqContent.style.maxHeight = faqContent.scrollHeight + "px";
      }
    });
  });
});