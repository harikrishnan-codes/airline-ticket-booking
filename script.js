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