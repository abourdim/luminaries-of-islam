/* ═══════════════════════════════════════════════
   TTS MODULE — Luminaries of Islam v1.2
   Text-to-Speech using Web Speech Synthesis API
   Privacy-first: no data leaves the browser
   ═══════════════════════════════════════════════ */

const TTS = (() => {
    let synth = null;
    let currentUtterance = null;
    let isSupported = false;
    let currentRate = 1;
    let isPaused = false;
    let isSpeaking = false;
    let onStartCallback = null;
    let onEndCallback = null;
    let activeBtn = null;

    function init() {
        synth = window.speechSynthesis;
        isSupported = !!synth;

        if (!isSupported) {
            console.warn('[TTS] Speech Synthesis not supported in this browser.');
            hideTTSControls();
            return false;
        }

        // Load saved speed preference
        const savedSpeed = localStorage.getItem('tts_speed');
        if (savedSpeed) currentRate = parseFloat(savedSpeed);

        setupControlBar();
        console.log('[TTS] Initialized successfully.');
        return true;
    }

    function hideTTSControls() {
        document.querySelectorAll('.tts-btn').forEach(btn => {
            btn.style.display = 'none';
        });
    }

    function setupControlBar() {
        const bar = document.getElementById('ttsControlBar');
        if (!bar) return;

        const playPause = document.getElementById('ttsPlayPause');
        const stopBtn = document.getElementById('ttsStop');
        const speedBtns = document.querySelectorAll('.tts-speed-btn');

        if (playPause) {
            playPause.addEventListener('click', togglePause);
        }

        if (stopBtn) {
            stopBtn.addEventListener('click', stop);
        }

        speedBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const speed = parseFloat(btn.dataset.speed);
                setSpeed(speed);
                speedBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });

            // Highlight saved speed
            if (parseFloat(btn.dataset.speed) === currentRate) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function showControlBar() {
        const bar = document.getElementById('ttsControlBar');
        if (bar) bar.classList.add('visible');
    }

    function hideControlBar() {
        const bar = document.getElementById('ttsControlBar');
        if (bar) bar.classList.remove('visible');
    }

    function updateControlBarText(text) {
        const el = document.getElementById('ttsCurrentText');
        if (el) el.textContent = text.substring(0, 60) + (text.length > 60 ? '...' : '');
    }

    function updatePlayPauseIcons() {
        const playIcon = document.getElementById('ttsPlayIcon');
        const pauseIcon = document.getElementById('ttsPauseIcon');
        if (!playIcon || !pauseIcon) return;

        if (isPaused) {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }
    }

    function speak(text, btn = null) {
        if (!isSupported || !text) return;

        // Stop any current speech
        stop();

        // Clean text for speech
        const cleanText = text.replace(/[✦💡🌟🟢🔵🟣]/g, '').trim();

        currentUtterance = new SpeechSynthesisUtterance(cleanText);
        currentUtterance.rate = currentRate;
        currentUtterance.pitch = 1;
        currentUtterance.lang = 'en-US';

        // Try to pick a natural voice
        const voices = synth.getVoices();
        const preferred = voices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) ||
                          voices.find(v => v.lang.startsWith('en'));
        if (preferred) currentUtterance.voice = preferred;

        // Set active button
        if (activeBtn) activeBtn.classList.remove('speaking');
        activeBtn = btn;
        if (activeBtn) activeBtn.classList.add('speaking');

        currentUtterance.onstart = () => {
            isSpeaking = true;
            isPaused = false;
            showControlBar();
            updateControlBarText(cleanText);
            updatePlayPauseIcons();
            if (onStartCallback) onStartCallback();
        };

        currentUtterance.onend = () => {
            isSpeaking = false;
            isPaused = false;
            hideControlBar();
            if (activeBtn) activeBtn.classList.remove('speaking');
            activeBtn = null;
            updatePlayPauseIcons();
            if (onEndCallback) onEndCallback();
        };

        currentUtterance.onerror = (e) => {
            if (e.error !== 'canceled') {
                console.warn('[TTS] Error:', e.error);
            }
            isSpeaking = false;
            hideControlBar();
            if (activeBtn) activeBtn.classList.remove('speaking');
        };

        synth.speak(currentUtterance);
    }

    function stop() {
        if (!synth) return;
        synth.cancel();
        isSpeaking = false;
        isPaused = false;
        hideControlBar();
        if (activeBtn) activeBtn.classList.remove('speaking');
        activeBtn = null;
        updatePlayPauseIcons();
    }

    function togglePause() {
        if (!synth || !isSpeaking) return;

        if (isPaused) {
            synth.resume();
            isPaused = false;
        } else {
            synth.pause();
            isPaused = true;
        }
        updatePlayPauseIcons();
    }

    function setSpeed(rate) {
        currentRate = rate;
        localStorage.setItem('tts_speed', rate.toString());
        // If currently speaking, restart with new speed
        if (isSpeaking && currentUtterance) {
            const text = currentUtterance.text;
            const btn = activeBtn;
            stop();
            speak(text, btn);
        }
    }

    function onStart(cb) { onStartCallback = cb; }
    function onEnd(cb) { onEndCallback = cb; }

    function getSupported() { return isSupported; }
    function getSpeaking() { return isSpeaking; }

    return {
        init,
        speak,
        stop,
        togglePause,
        setSpeed,
        onStart,
        onEnd,
        isSupported: getSupported,
        isSpeaking: getSpeaking
    };
})();
