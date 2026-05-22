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
    updateProgress();
    updateCardStates();
}

function updateProgress() {
    var completed = getCompletedClasses().length;
    var total = 10;
    var pct = (completed / total) * 100;

    var fill = document.getElementById('progress-fill');
    var text = document.getElementById('progress-text');

    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = completed + ' / ' + total + ' classes';
}

function updateCardStates() {
    var completed = getCompletedClasses();
    var cards = document.querySelectorAll('.class-card');

    cards.forEach(function(card) {
        var classNum = parseInt(card.dataset.class);

        if (completed.indexOf(classNum) !== -1) {
            card.classList.remove('locked');
            card.classList.add('completed');
            var status = document.getElementById('status-' + classNum);
            if (status) status.textContent = 'Done';
        } else if (classNum === 1 || completed.indexOf(classNum - 1) !== -1) {
            card.classList.remove('locked');
        }
    });
}
