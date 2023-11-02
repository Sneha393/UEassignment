
document.addEventListener("DOMContentLoaded", function () {
    const timeLabel = document.getElementById("timeLabel");
    const datePicker = document.getElementById("datePicker");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resetButton = document.getElementById("resetButton");

    let timer;
    let running = false;
    let time = 0;

    function updateTimeLabel() {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        timeLabel.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    async function startTimer() {
        running = true;
        while (running) {
            time++;
            updateTimeLabel();
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }

    startButton.addEventListener("click", function () {
        if (!running) {
            startTimer();
        }
    });

    stopButton.addEventListener("click", function () {
        running = false;
    });

    resetButton.addEventListener("click", function () {
        running = false;
        time = 0;
        updateTimeLabel();
    });

    // Set the initial date to today
    const today = new Date();
    datePicker.value = today.toISOString().substr(0, 10);
    datePicker.min = "1970-01-01";  // Set a reasonable minimum date

    // Disable date input editing
    datePicker.addEventListener("keydown", function (e) {
        e.preventDefault();
    });

    updateTimeLabel();
});
