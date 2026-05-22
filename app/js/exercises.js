function checkFillBlank(inputId, correctAnswer, feedbackId) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);
    const value = input.value.trim().toLowerCase();
    const correct = correctAnswer.toLowerCase();

    if (value === correct) {
        input.classList.remove('incorrect');
        input.classList.add('correct');
        feedback.textContent = 'Muito bem! Correct!';
        feedback.className = 'exercise-feedback correct';
        return true;
    } else {
        input.classList.remove('correct');
        input.classList.add('incorrect');
        feedback.textContent = 'Try again! / Tente de novo!';
        feedback.className = 'exercise-feedback incorrect';
        return false;
    }
}

function checkMultipleChoice(buttonEl, correctIndex, exerciseEl) {
    const buttons = exerciseEl.querySelectorAll('.choice-btn');
    const clickedIndex = Array.from(buttons).indexOf(buttonEl);

    buttons.forEach(function(btn) { btn.disabled = true; });

    if (clickedIndex === correctIndex) {
        buttonEl.classList.add('correct');
        const fb = exerciseEl.querySelector('.exercise-feedback');
        if (fb) {
            fb.textContent = 'Muito bem! Correct!';
            fb.className = 'exercise-feedback correct';
        }
        return true;
    } else {
        buttonEl.classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
        const fb = exerciseEl.querySelector('.exercise-feedback');
        if (fb) {
            fb.textContent = 'The correct answer is highlighted. / A resposta correta esta destacada.';
            fb.className = 'exercise-feedback incorrect';
        }
        return false;
    }
}

function checkMatching(containerId, correctPairs) {
    const container = document.getElementById(containerId);
    const rows = container.querySelectorAll('.matching-row');
    let allCorrect = true;

    rows.forEach(function(row, index) {
        const select = row.querySelector('select');
        const selected = select.value;
        const expected = correctPairs[index];

        if (selected === expected) {
            row.classList.remove('incorrect');
            row.classList.add('correct');
        } else {
            row.classList.remove('correct');
            row.classList.add('incorrect');
            allCorrect = false;
        }
    });

    return allCorrect;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
