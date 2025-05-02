// Toggle class aktiv
const navbarNav = document.querySelector('.navbar-nav');
// Ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di liar sidebar untuk
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target))
        navbarNav.classList.remove('active');
});

//Animasi Muncul
  function reveal() {
    const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  window.addEventListener("load", reveal); // langsung aktif saat halaman dimuat

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing after animasi muncul
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // seberapa banyak elemen terlihat sebelum animasi aktif
  });

  reveals.forEach(reveal => observer.observe(reveal));

