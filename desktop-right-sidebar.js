/* ---------------------------
   FLASH SALE COUNTDOWN TIMER
   --------------------------- */

function startFlashCountdown(hours) {
  var timerElement = document.getElementById("flash-timer");
  if (!timerElement) return;

  var endTime = Date.now() + hours * 3600000; // hours → ms

  setInterval(function () {
    var now = Date.now();
    var distance = endTime - now;

    if (distance <= 0) {
      timerElement.textContent = "Expired";
      return;
    }

    var totalSeconds = Math.floor(distance / 1000);
    var h = Math.floor(totalSeconds / 3600);
    var m = Math.floor((totalSeconds % 3600) / 60);
    var s = totalSeconds % 60;

    // Safe padding without < >
    var pad = function (num) {
      return ("00" + num).slice(-2);
    };

    timerElement.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);

  }, 1000);
}

// Start your timer (editable)
startFlashCountdown(6);
