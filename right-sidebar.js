// --------------------
// SMART STICKY SIDEBAR
// --------------------
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("jumitech-right-sidebar");
  if (!sidebar) return;

  function handleSticky() {
    if (window.innerWidth >= 1200) {
      if (window.scrollY >= 300) {
        sidebar.classList.add("sticky");
      } else {
        sidebar.classList.remove("sticky");
      }
    } else {
      sidebar.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", handleSticky);
  window.addEventListener("resize", handleSticky);
  handleSticky();
});


// --------------------------
// FLASH SALE COUNTDOWN TIMER
// --------------------------
function startFlashCountdown(hours) {
  var timerElement = document.getElementById("flash-timer");
  if (!timerElement) return;

  var endTime = new Date().getTime() + (hours * 3600 * 1000);

  setInterval(function () {
    var now = new Date().getTime();
    var distance = endTime - now;

    if (distance <= 0) {
      timerElement.textContent = "Expired";
      return;
    }

    var h = Math.floor(distance / (1000 * 60 * 60));
    var m = Math.floor(distance / (1000 * 60)) % 60;
    var s = Math.floor(distance / 1000) % 60;

    // Safe padded output
    var pad = function (num) { return ("00" + num).slice(-2); };

    timerElement.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);
  }, 1000);
}

// Start timer
startFlashCountdown(6);
