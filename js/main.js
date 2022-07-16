// Navbar 
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('header-scrolled', window.scrollY > 100);
});