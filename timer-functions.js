// Task Timer System for Book Writing App

// Add these functions to app.js at line 288 (after renderTasks function)

// ===================================
// TASK TIMER SYSTEM
// ===================================

let taskTimerInterval = null;
let taskTimerSeconds = 0;
let taskTimerPaused = false;
let currentTaskName = '';

// Start task timer
function startTaskTimer(taskTitle, duration) {
    // Stop any existing timer
    stopFloatingTimer();

    // Parse duration (e.g., "10 minutes" -> 600 seconds)
    const minutes = parseInt(duration) || 10;
    taskTimerSeconds = minutes * 60;
    taskTimerPaused = false;
    currentTaskName = taskTitle;

    // Show floating timer
    const floatingTimer = document.getElementById('floatingTimer');
    floatingTimer.classList.add('active');

    // Update task name
    document.getElementById('floatingTimerTask').textContent = taskTitle;
    document.getElementById('floatingTimerTitle').textContent = `${minutes}-Minute Timer`;

    // Update display
    updateTaskTimerDisplay();

    // Start countdown
    taskTimerInterval = setInterval(() => {
        if (!taskTimerPaused) {
            taskTimerSeconds--;
            updateTaskTimerDisplay();

            // Check if timer finished
            if (taskTimerSeconds <= 0) {
                timerComplete();
            } else if (taskTimerSeconds <= 10) {
                // Add pulse animation in last 10 seconds
                floatingTimer.classList.add('pulse');
            }
        }
    }, 1000);
}

// Update task timer display
function updateTaskTimerDisplay() {
    const minutes = Math.floor(taskTimerSeconds / 60);
    const seconds = taskTimerSeconds % 60;
    document.getElementById('floatingTimerDisplay').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Timer complete
function timerComplete() {
    clearInterval(taskTimerInterval);

    const floatingTimer = document.getElementById('floatingTimer');
    floatingTimer.classList.remove('pulse');

    // Update display
    document.getElementById('floatingTimerDisplay').textContent = '0:00';
    document.getElementById('floatingTimerTask').textContent = '✨ Time\'s up! Great work!';

    // Play sound if enabled
    const audioToggle = document.getElementById('audioToggle');
    if (audioToggle && audioToggle.checked) {
        playTimerSound();
    }

    // Auto-close after 5 seconds
    setTimeout(() => {
        stopFloatingTimer();
    }, 5000);
}

// Play timer completion sound
function playTimerSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        // Create three tones for a pleasant chime
        const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5

        frequencies.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = freq;
            oscillator.type = 'sine';

            const startTime = audioContext.currentTime + (index * 0.15);
            gainNode.gain.setValueAtTime(0.3, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);

            oscillator.start(startTime);
            oscillator.stop(startTime + 0.5);
        });
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Toggle pause/resume timer
function togglePauseTimer() {
    taskTimerPaused = !taskTimerPaused;
    const btn = document.getElementById('pauseTimerBtn');

    if (taskTimerPaused) {
        btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
            </svg>
            Resume
        `;
    } else {
        btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 4h4v16H6V4zM14 4h4v16h-4V4z" fill="currentColor"/>
            </svg>
            Pause
        `;
    }
}

// Stop floating timer
function stopFloatingTimer() {
    clearInterval(taskTimerInterval);
    taskTimerInterval = null;
    taskTimerSeconds = 0;
    taskTimerPaused = false;

    const floatingTimer = document.getElementById('floatingTimer');
    floatingTimer.classList.remove('active', 'pulse');

    // Reset pause button
    const btn = document.getElementById('pauseTimerBtn');
    if (btn) {
        btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 4h4v16H6V4zM14 4h4v16h-4V4z" fill="currentColor"/>
            </svg>
            Pause
        `;
    }
}

// ALSO UPDATE openDayModal function (line 226) to add:
// After line 233, add:
//     // Update affirmation for this day
//     const affirmation = dailyAffirmations[day.day - 1];
//     document.getElementById('modalAffirmation').textContent = `"${affirmation}"`;

// AND UPDATE renderTasks function (line 254) to add timer buttons:
// Replace the task duration part (line 269) with:
//      ${task.duration ? `
//          <pem>Duration: ${task.duration}</em></p>
//          <button class="task-timer-btn" onclick="event.stopPropagation(); startTaskTimer('${task.title.replace(/'/g, "\\'")}', '${task.duration}')">
//              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
//                  <path d="M12 6v6l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
//              </svg>
//              Start Timer
//          </button>
//       ` : ''}
