// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const btn = document.querySelector('.button');
    const span = document.querySelector('.close');
    const redirectButton = document.getElementById('redirectButton');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
        window.location.href = "https://wa.me/573217684049"; // Redirige a WhatsApp
    }

    redirectButton.onclick = function() {
        window.location.href = "https://wa.me/573217684049"; // Redirige a WhatsApp
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});