document.addEventListener('DOMContentLoaded', function() {
    if (isFirstVisit()) {
        showWelcomeOverlay();
    } else {
        showDashboard();
    }

    var nameInput = document.getElementById('welcome-name');
    if (nameInput) {
        nameInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') submitWelcome();
        });
    }
});

function showWelcomeOverlay() {
    var overlay = document.getElementById('welcome-overlay');
    if (overlay) overlay.style.display = 'flex';
}

function hideWelcomeOverlay() {
    var overlay = document.getElementById('welcome-overlay');
    if (overlay) overlay.style.display = 'none';
}

function submitWelcome() {
    var input = document.getElementById('welcome-name');
    var name = input.value.trim();
    if (name.length === 0) {
        input.style.borderColor = '#ef5350';
        return;
    }
    initStudentData(name);
    hideWelcomeOverlay();
    showDashboard();
}

function showDashboard() {
    var greeting = document.getElementById('greeting');
    if (greeting) {
        var name = getStudentName();
        greeting.textContent = 'Hello, ' + name + '!';
    }
    updateCardStates();
}

function updateCardStates() {
    var cards = document.querySelectorAll('.class-card');

    cards.forEach(function(card) {
        card.classList.remove('locked');
        card.onclick = null;
    });
}
