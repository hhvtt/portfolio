function updateNavbarBorder() {
    if (window.scrollY > 10) {
        navbar.style.borderBottomColor = '#1d9e75';
    } else {
        navbar.style.borderBottomColor = '#23262b';
    }
}
function checkformdetails() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var status = document.getElementById('formStatus');
    if (name === '' || email === '' || message === '' || !email.includes('@')) {
        status.textContent = 'Please fill in all fields correctly.';
        status.className = 'error';
        return ;
    }
    status.textContent = 'Thanks, ' + name + '! Message sent successfully.';
    status.className = '';
}
function loadMode() {
    if (sessionStorage.getItem('mode') === 'light') {
        document.body.classList.add('light');
        document.getElementById('modeBtn').textContent = '🌙';
    }
}
function darkMode() {
    document.body.classList.toggle('light');
    var btn = document.getElementById('modeBtn');
    if (document.body.classList.contains('light')) {
        btn.textContent = '🌙'; 
        sessionStorage.setItem('mode', 'light');
    } else {
        btn.textContent = '☀️'; 
        sessionStorage.removeItem('mode');
    }
}
function toggleCard(card) {
    var body = card.querySelector('.box-details');
    var icon = card.querySelector('.box-expand');
    var isOpen = card.classList.contains('open');
    document.querySelectorAll('.box.open').forEach(closeCard);

    if (!isOpen) {
        body.style.display = 'flex';
        icon.textContent = '−';
        card.classList.add('open');
    }
}
function closeCard(card) {
    card.querySelector('.box-details').style.display = 'none';
    card.querySelector('.box-expand').textContent = '+';
    card.classList.remove('open');
}   
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', updateNavbarBorder);
loadMode();
