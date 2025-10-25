const modal = document.getElementById('loginModal');
    function openLogin(role) {
      modal.classList.add('open');
      document.getElementById('loginTitle').textContent = role ? role.charAt(0).toUpperCase() + role.slice(1) + " Login" : "Login";
    }
    function closeLogin() { modal.classList.remove('open'); }
    function switchTab(e) {
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      e.target.classList.add('active');
    }
    function handleLogin(e) {
      e.preventDefault();
      alert('Logged in (demo)');
      closeLogin();
    }

    // Add to script.js
window.addEventListener('scroll', revealOnScroll);
function revealOnScroll() {
  document.querySelectorAll('section, .card, .profile-card, .hero-card, .activity')
    .forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
}

window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
});

function handleLogin(e) {
  e.preventDefault();
  alert('🎉 Logged in successfully (demo)');
  closeLogin();
}

window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progressBar').style.width = scrollPercent + '%';
});

