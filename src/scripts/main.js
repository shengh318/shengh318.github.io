function initCursor() {
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  const ring = document.createElement('div');
  ring.id = 'cursor-ring';
  document.body.append(cursor, dot, ring);

  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function smoothCursor() {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    ring.style.left = cx + 'px';
    ring.style.top = cy + 'px';
    requestAnimationFrame(smoothCursor);
  }
  smoothCursor();

  document.addEventListener('click', () => {
    cursor.classList.remove('clicked');
    void cursor.offsetWidth;
    cursor.classList.add('clicked');
    setTimeout(() => cursor.classList.remove('clicked'), 400);
  });

  document.querySelectorAll('a, button, [data-hover], #hud-canvas').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
}

function initNavScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open', !isOpen);
    toggle.classList.toggle('active', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavScroll();
  initReveal();

  initMobileMenu();
});
