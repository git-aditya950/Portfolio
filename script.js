// Custom cursor functionality
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  
  function animateCursor() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  // Cursor interaction with links and buttons
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform += ' scale(2)';
      ring.style.opacity = '0';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.opacity = '1';
    });
  });
}

// Scroll reveal animation
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach((el) => io.observe(el));
}

// Skill bars animation
function initSkillBars() {
  const skillIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar').forEach((bar) => {
          bar.classList.add('animate');
        });
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.skills-wrapper').forEach((el) => skillIO.observe(el));
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollReveal();
  initSkillBars();
  initSmoothScroll();
});
