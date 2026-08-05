// ============================================
// Terminal typing effect
// ============================================
(function typeWhoAmI(){
  const el = document.getElementById('typeLine1');
  if(!el) return;
  const text = "znar — software engineering student & web developer";
  let i = 0;
  const speed = 28;

  function tick(){
    if(i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    }
  }
  // small delay so it starts after the fake command "line" fades in
  setTimeout(tick, 250);
})();

// ============================================
// Mobile nav toggle
// ============================================
(function mobileNav(){
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if(!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.classList.toggle('active', isOpen);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ============================================
// Active nav link on scroll
// ============================================
(function activeSection(){
  const sections = document.querySelectorAll('main section[id], main .contact[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if(!sections.length || !navLinks.length) return;

  const map = new Map();
  navLinks.forEach(a => map.set(a.getAttribute('href').slice(1), a));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = map.get(entry.target.id);
      if(!link) return;
      if(entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
})();
