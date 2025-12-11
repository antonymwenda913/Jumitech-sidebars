/* ============================================================
   JUMITECH — AUTO-SCROLL + INFINITE LOOP SIDEBAR
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  const box = document.getElementById("jumi-sidebar-scroll");
  if (!box) return;

  // Duplicate cards for looping effect
  const cards = Array.from(box.children);
  cards.forEach(c => box.appendChild(c.cloneNode(true)));

  // Loop reset point
  let resetPoint = box.scrollHeight / 2;

  // Auto-scroll speed (adjust for faster/slower motion)
  let autoSpeed = 0.25; // pixels per page pixel scrolled

  // Track previous scroll
  let lastPageScroll = window.scrollY;

  function loopScroll() {
    let pageScrollNow = window.scrollY;
    let delta = pageScrollNow - lastPageScroll;

    // Auto-scroll sidebar based on page scroll speed
    box.scrollTop += delta * autoSpeed;

    // Loop forward
    if (box.scrollTop >= resetPoint + 10) {
      box.scrollTop = 1;
    }

    // Loop backward
    else if (box.scrollTop <= 0) {
      box.scrollTop = resetPoint - 10;
    }

    lastPageScroll = pageScrollNow;

    requestAnimationFrame(loopScroll);
  }

  // Start centered
  box.scrollTop = resetPoint / 2;
  lastPageScroll = window.scrollY;

  // Begin animation loop
  requestAnimationFrame(loopScroll);
});
