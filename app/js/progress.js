document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    updateCardStates();
});

function updateProgress() {
    const completed = getCompletedClasses().length;
    const total = 10;
    const pct = (completed / total) * 100;

    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');

    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = completed + ' / ' + total + ' classes';
}

function updateCardStates() {
    const completed = getCompletedClasses();
    const cards = document.querySelectorAll('.class-card');

    cards.forEach(function(card) {
        const classNum = parseInt(card.dataset.class);

        if (completed.includes(classNum)) {
            card.classList.remove('locked');
            card.classList.add('completed');
            const status = document.getElementById('status-' + classNum);
            if (status) status.textContent = 'Done';
        } else if (classNum === 1 || completed.includes(classNum - 1)) {
            card.classList.remove('locked');
        }
    });
}

function getCompletedClasses() {
    const data = localStorage.getItem('english-course-progress');
    return data ? JSON.parse(data) : [];
}

function markClassComplete(classNum) {
    const completed = getCompletedClasses();
    if (!completed.includes(classNum)) {
        completed.push(classNum);
        localStorage.setItem('english-course-progress', JSON.stringify(completed));
    }
}
