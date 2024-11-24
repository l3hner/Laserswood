// Navigationstoggle
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'block';
}

// Cookie-Funktionen
function acceptEssentialCookies() {
    alert('Essentielle Cookies wurden akzeptiert.');
    document.getElementById('cookie-banner').style.display = 'none';
}

function acceptAllCookies() {
    alert('Alle Cookies wurden akzeptiert.');
    document.getElementById('cookie-banner').style.display = 'none';
}

// Datenschutzmodal
function openDatenschutz() {
    document.getElementById('datenschutz-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('datenschutz-modal').style.display = 'none';
}

// Kontaktformular validieren
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht!');
});
