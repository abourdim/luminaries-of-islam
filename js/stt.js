/* ═══════════════════════════════════════════════
   STT MODULE — Luminaries of Islam v1.2
   Speech-to-Text using Web Speech Recognition API
   Privacy-first: no voice data is stored or sent
   ═══════════════════════════════════════════════ */

const STT = (() => {
    let recognition = null;
    let isSupported = false;
    let isListening = false;
    let onResultCallback = null;
    let onErrorCallback = null;
    let activeBtn = null;
    let activeStatusEl = null;

    function init() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn('[STT] Speech Recognition not supported in this browser.');
            hideSTTControls();
            return false;
        }

        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 3;
        isSupported = true;

        recognition.onstart = () => {
            isListening = true;
            if (activeBtn) activeBtn.classList.add('listening');
            updateStatus('Listening...');
        };

        recognition.onresult = (event) => {
            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }

            if (interimTranscript) {
                updateStatus('Hearing: ' + interimTranscript);
            }

            if (finalTranscript) {
                updateStatus('I heard: ' + finalTranscript);
                if (onResultCallback) onResultCallback(finalTranscript.trim());
                setTimeout(() => clearStatus(), 3000);
            }
        };

        recognition.onerror = (event) => {
            console.warn('[STT] Error:', event.error);
            isListening = false;
            if (activeBtn) activeBtn.classList.remove('listening');

            switch (event.error) {
                case 'not-allowed':
                    updateStatus('Microphone access denied');
                    break;
                case 'no-speech':
                    updateStatus("Didn't catch that. Try again?");
                    break;
                case 'network':
                    updateStatus('Network error — check connection');
                    break;
                default:
                    updateStatus('Error occurred. Try again?');
            }

            if (onErrorCallback) onErrorCallback(event.error);
            setTimeout(() => clearStatus(), 3000);
        };

        recognition.onend = () => {
            isListening = false;
            if (activeBtn) activeBtn.classList.remove('listening');
        };

        console.log('[STT] Initialized successfully.');
        return true;
    }

    function hideSTTControls() {
        document.querySelectorAll('.stt-mic-btn').forEach(btn => {
            btn.style.display = 'none';
        });
    }

    function startListening(btn = null, statusEl = null) {
        if (!isSupported || isListening) return;

        activeBtn = btn;
        activeStatusEl = statusEl;

        try {
            recognition.start();
        } catch (e) {
            console.warn('[STT] Could not start:', e.message);
        }
    }

    function stopListening() {
        if (!recognition || !isListening) return;
        recognition.stop();
        isListening = false;
        if (activeBtn) activeBtn.classList.remove('listening');
    }

    function toggleListening(btn = null, statusEl = null) {
        if (isListening) {
            stopListening();
        } else {
            startListening(btn, statusEl);
        }
    }

    function updateStatus(text) {
        if (activeStatusEl) {
            activeStatusEl.textContent = text;
            activeStatusEl.classList.add('visible');
        }
    }

    function clearStatus() {
        if (activeStatusEl) {
            activeStatusEl.classList.remove('visible');
        }
    }

    function onResult(cb) { onResultCallback = cb; }
    function onError(cb) { onErrorCallback = cb; }

    function getSupported() { return isSupported; }
    function getListening() { return isListening; }

    return {
        init,
        startListening,
        stopListening,
        toggleListening,
        onResult,
        onError,
        isSupported: getSupported,
        isListening: getListening
    };
})();
