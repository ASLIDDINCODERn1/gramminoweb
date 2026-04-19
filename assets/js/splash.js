(function () {
  "use strict";
  const reveal = document.getElementById("reveal");
  const SPLASH_MS = 3900;

  // Preload home to avoid a flash
  const pre = document.createElement("link");
  pre.rel = "prefetch";
  pre.href = "login.html";
  document.head.appendChild(pre);

  setTimeout(() => {
    reveal.classList.add("active");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 850);
  }, SPLASH_MS);

  // Click/tap to skip
  document.addEventListener("click", () => {
    reveal.classList.add("active");
    setTimeout(() => { window.location.href = "login.html"; }, 600);
  }, { once: true });
})();
