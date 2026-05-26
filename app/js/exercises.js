function checkFillBlank(inputId, correctAnswer, feedbackId) {
    var input = document.getElementById(inputId);
    var feedback = document.getElementById(feedbackId);
    var value = input.value.trim().toLowerCase();
    var correct = correctAnswer.toLowerCase();

    if (value === correct) {
        input.classList.remove('incorrect');
        input.classList.add('correct');
        input.disabled = true;
        feedback.textContent = 'Muito bem! Correct!';
        feedback.className = 'exercise-feedback correct';
        onExerciseCorrect(input);
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
    var buttons = exerciseEl.querySelectorAll('.choice-btn');
    var clickedIndex = Array.from(buttons).indexOf(buttonEl);

    buttons.forEach(function(btn) { btn.disabled = true; });

    if (clickedIndex === correctIndex) {
        buttonEl.classList.add('correct');
        var fb = exerciseEl.querySelector('.exercise-feedback');
        if (fb) {
            fb.textContent = 'Muito bem! Correct!';
            fb.className = 'exercise-feedback correct';
        }
        onExerciseCorrect(buttonEl);
        return true;
    } else {
        buttonEl.classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
        var fb = exerciseEl.querySelector('.exercise-feedback');
        if (fb) {
            fb.textContent = 'The correct answer is highlighted. / A resposta correta esta destacada.';
            fb.className = 'exercise-feedback incorrect';
        }
        return false;
    }
}

function checkMatching(containerId, correctPairs) {
    var container = document.getElementById(containerId);
    var rows = container.querySelectorAll('.matching-row');
    var allCorrect = true;

    rows.forEach(function(row, index) {
        var select = row.querySelector('select');
        var selected = select.value;
        var expected = correctPairs[index];

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

function onExerciseCorrect(element) {
    var exercise = element.closest('[data-exercise]');
    if (!exercise) return;

    var exerciseId = exercise.dataset.exercise;
    var classId = getPageClassId();
    if (!classId) return;

    markExerciseComplete(classId, exerciseId);
    unlockNextExercise(exercise);
    checkClassCompletion();
}

function getPageClassId() {
    var body = document.querySelector('[data-class-id]');
    return body ? body.dataset.classId : null;
}

function initExerciseLocking() {
    var classId = getPageClassId();
    if (!classId) return;

    var exercises = document.querySelectorAll('[data-exercise]');
    var totalExercises = exercises.length;

    exercises.forEach(function(exercise, index) {
        var exerciseId = exercise.dataset.exercise;
        var completed = isExerciseComplete(classId, exerciseId);

        if (completed) {
            exercise.classList.add('exercise-completed');
            exercise.classList.remove('exercise-locked');
            markExerciseVisualComplete(exercise);
        } else if (index === 0) {
            exercise.classList.remove('exercise-locked');
        } else {
            var prevExercise = exercises[index - 1];
            var prevId = prevExercise.dataset.exercise;
            if (isExerciseComplete(classId, prevId)) {
                exercise.classList.remove('exercise-locked');
            } else {
                exercise.classList.add('exercise-locked');
            }
        }
    });
}

function markExerciseVisualComplete(exercise) {
    var inputs = exercise.querySelectorAll('input[type="text"]');
    inputs.forEach(function(input) { input.disabled = true; });

    var buttons = exercise.querySelectorAll('.choice-btn');
    buttons.forEach(function(btn) { btn.disabled = true; });

    var selects = exercise.querySelectorAll('select');
    selects.forEach(function(sel) { sel.disabled = true; });

    var checkBtns = exercise.querySelectorAll('.check-btn');
    checkBtns.forEach(function(btn) { btn.disabled = true; btn.textContent = 'Done'; });
}

function unlockNextExercise(currentExercise) {
    var exercises = document.querySelectorAll('[data-exercise]');
    var exercisesArray = Array.from(exercises);
    var currentIndex = exercisesArray.indexOf(currentExercise);

    if (currentIndex < exercisesArray.length - 1) {
        var next = exercisesArray[currentIndex + 1];
        next.classList.remove('exercise-locked');
        next.style.animation = 'slideIn 0.4s ease';
        next.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function checkClassCompletion() {
    var classId = getPageClassId();
    if (!classId) return;

    var exercises = document.querySelectorAll('[data-exercise]');
    var allDone = true;

    exercises.forEach(function(exercise) {
        var exerciseId = exercise.dataset.exercise;
        if (!isExerciseComplete(classId, exerciseId)) {
            allDone = false;
        }
    });

    if (allDone) {
        var classNum = parseInt(classId.replace('class-', ''));
        markClassComplete(classNum);
        showClassCompleteMessage();
    }
}

function showClassCompleteMessage() {
    var existing = document.getElementById('class-complete-msg');
    if (existing) return;

    var msg = document.createElement('div');
    msg.id = 'class-complete-msg';
    msg.className = 'class-complete-message';
    msg.innerHTML = '<h2>Parabens! 🎉</h2><p>You completed this class!</p><a href="../../index.html" class="check-btn" style="display:inline-block;text-decoration:none;margin-top:12px;">Back to classes</a>';

    var sections = document.querySelectorAll('.section');
    var lastSection = sections[sections.length - 1];
    lastSection.parentNode.insertBefore(msg, lastSection.nextSibling);

    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function shuffleArray(array) {
    var shuffled = array.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

// Word Bank Fill-in-the-Blank
function initWordBank(containerId, correctWord) {
    var container = document.getElementById(containerId);
    var slot = container.querySelector('.blank-slot');
    var options = container.querySelectorAll('.word-bank-option');

    options.forEach(function(option) {
        option.addEventListener('click', function() {
            if (container.classList.contains('exercise-done')) return;

            options.forEach(function(o) { o.classList.remove('selected'); });
            option.classList.add('selected');
            slot.textContent = option.textContent;
            slot.classList.add('filled');
        });
    });
}

function checkWordBank(containerId, correctWord) {
    var container = document.getElementById(containerId);
    var slot = container.querySelector('.blank-slot');
    var fb = container.querySelector('.exercise-feedback');
    var selected = container.querySelector('.word-bank-option.selected');

    if (!selected) {
        fb.textContent = 'Tap a word first! / Toque em uma palavra primeiro!';
        fb.className = 'exercise-feedback incorrect';
        return;
    }

    var answer = selected.textContent.trim().toLowerCase();
    if (answer === correctWord.toLowerCase()) {
        fb.textContent = 'Muito bem! Correct!';
        fb.className = 'exercise-feedback correct';
        selected.classList.add('correct-word');
        container.classList.add('exercise-done');
        var exercise = container.closest('[data-exercise]');
        onExerciseCorrect(exercise.querySelector('.check-btn'));
    } else {
        fb.textContent = 'Try again! / Tente de novo!';
        fb.className = 'exercise-feedback incorrect';
        selected.classList.add('incorrect-word');
        setTimeout(function() { selected.classList.remove('incorrect-word', 'selected'); }, 800);
        slot.textContent = '___';
        slot.classList.remove('filled');
    }
}

// Word Ordering Exercise
function initWordOrder(containerId) {
    var container = document.getElementById(containerId);
    var wordPool = container.querySelector('.word-order-container');
    var answerZone = container.querySelector('.word-order-answer');
    var tiles = wordPool.querySelectorAll('.word-tile');

    tiles.forEach(function(tile) {
        tile.addEventListener('click', function() {
            if (container.classList.contains('exercise-done')) return;

            if (tile.classList.contains('in-answer')) {
                tile.classList.remove('in-answer');
                var clone = answerZone.querySelector('[data-word="' + tile.dataset.word + '"]');
                if (clone) answerZone.removeChild(clone);
            } else {
                tile.classList.add('in-answer');
                var answerTile = document.createElement('span');
                answerTile.className = 'word-tile';
                answerTile.textContent = tile.textContent;
                answerTile.dataset.word = tile.dataset.word;
                answerTile.addEventListener('click', function() {
                    tile.classList.remove('in-answer');
                    answerZone.removeChild(answerTile);
                });
                answerZone.appendChild(answerTile);
            }
        });
    });
}

function checkWordOrder(containerId, correctSentence) {
    var container = document.getElementById(containerId);
    var answerZone = container.querySelector('.word-order-answer');
    var fb = container.querySelector('.exercise-feedback');
    var answerTiles = answerZone.querySelectorAll('.word-tile');

    if (answerTiles.length === 0) {
        fb.textContent = 'Tap words to build the sentence! / Toque nas palavras!';
        fb.className = 'exercise-feedback incorrect';
        return;
    }

    var answer = Array.from(answerTiles).map(function(t) { return t.textContent.trim(); }).join(' ');
    if (answer.toLowerCase() === correctSentence.toLowerCase()) {
        fb.textContent = 'Muito bem! Correct!';
        fb.className = 'exercise-feedback correct';
        answerZone.classList.add('correct-answer');
        container.classList.add('exercise-done');
        var exercise = container.closest('[data-exercise]');
        onExerciseCorrect(exercise.querySelector('.check-btn'));
    } else {
        fb.textContent = 'Not quite. Try again! / Tente de novo!';
        fb.className = 'exercise-feedback incorrect';
        answerZone.classList.add('incorrect-answer');
        setTimeout(function() { answerZone.classList.remove('incorrect-answer'); }, 800);
    }
}

// True/False Exercise
function checkTrueFalse(buttonEl, isCorrect, exerciseEl) {
    var buttons = exerciseEl.querySelectorAll('.choice-btn');
    buttons.forEach(function(btn) { btn.disabled = true; });

    var fb = exerciseEl.querySelector('.exercise-feedback');
    if (isCorrect) {
        buttonEl.classList.add('correct');
        fb.textContent = 'Muito bem! Correct!';
        fb.className = 'exercise-feedback correct';
        onExerciseCorrect(buttonEl);
    } else {
        buttonEl.classList.add('incorrect');
        fb.textContent = 'Not quite! / Nao foi dessa vez!';
        fb.className = 'exercise-feedback incorrect';
        var other = Array.from(buttons).find(function(b) { return b !== buttonEl; });
        if (other) other.classList.add('correct');
    }
}
