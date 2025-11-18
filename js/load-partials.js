// js/partials.js
document.addEventListener('DOMContentLoaded', () => {
  const includeElems = document.querySelectorAll('[data-include]');

  includeElems.forEach(elem => {
    const file = elem.getAttribute('data-include');
    if (!file) return;

    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        elem.innerHTML = html;

        // Optional: run init code depending on which partial it is
        if (file.includes('header.html')) {
          initHeader(elem);
        }
        if (file.includes('footer.html')) {
          initFooter(elem);
        }
      })
      .catch(err => {
        console.error(err);
      });
  });
});

function initHeader(headerRoot) {
  // Example: your menu toggle
  const toggle = headerRoot.querySelector('.menuToggle');
  const menu = headerRoot.querySelector('#menu');
  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('active');
    });
  }
}

function initFooter(footerRoot) {
  // Add any footer-specific JS here if needed later
}
