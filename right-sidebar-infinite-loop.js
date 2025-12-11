/* ============================================================
   JUMITECH — INFINITE LOOP SCROLL FOR RIGHT SIDEBAR
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  var box = document.getElementById("jumi-sidebar-scroll");
  if (!box) return;

  var cards = Array.from(box.children);

  // Duplicate content to create the loop illusion
  cards.forEach(c => box.appendChild(c.cloneNode(true)));

  // Scroll back to middle instantly when reaching edges
  var resetPoint = box.scrollHeight / 2;

  box.addEventListener("scroll", function () {
    // Scroll Down → loop back to top
    if (box.scrollTop >= resetPoint + 10) {
      box.scrollTop = 1; // jump near start
    }

    // Scroll Up → loop to bottom
    else if (box.scrollTop <= 0) {
      box.scrollTop = resetPoint - 10;
    }
  });

  // Start at midpoint so scroll works in both directions
  box.scrollTop = resetPoint / 2;
});
