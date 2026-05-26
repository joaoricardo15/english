(function() {
    'use strict';

    var synth = window.speechSynthesis;
    var englishVoice = null;

    function loadVoice() {
        var voices = synth.getVoices();
        englishVoice = voices.find(function(v) { return v.lang === 'en-US' && v.localService; })
            || voices.find(function(v) { return v.lang === 'en-US'; })
            || voices.find(function(v) { return v.lang.startsWith('en'); });
    }

    loadVoice();
    if (synth.onvoiceschanged !== undefined) {
        synth.addEventListener('voiceschanged', loadVoice);
    }

    function speak(text, slow) {
        if (!synth) return;
        synth.cancel();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = slow ? 0.55 : 0.8;
        utterance.pitch = 1.0;
        if (englishVoice) {
            utterance.voice = englishVoice;
        }
        synth.speak(utterance);
    }

    document.addEventListener('click', function(e) {
        var target = e.target.closest('[data-pronounce]');
        if (target) {
            e.stopPropagation();
            var text = target.getAttribute('data-pronounce');
            var slow = target.hasAttribute('data-slow');
            speak(text, slow);
            target.classList.add('audio-playing');
            setTimeout(function() { target.classList.remove('audio-playing'); }, 600);
        }
    });

    window.pronounce = speak;
})();
