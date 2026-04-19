(function () {
  "use strict";

  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const tabsWrap = document.querySelector(".tabs");
  const forms = document.querySelectorAll(".auth-form");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      tabsWrap.setAttribute("data-active", target);
      forms.forEach((f) => {
        f.classList.toggle("hidden", f.dataset.form !== target);
      });
    });
  });

  // Password toggle
  document.querySelectorAll(".toggle-pass").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.parentElement.querySelector("input");
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
    });
  });

  // Liquid button hover glow follow cursor
  document.querySelectorAll(".btn-liquid").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width) * 100 + "%");
      btn.style.setProperty("--my", ((e.clientY - rect.top) / rect.height) * 100 + "%");
    });
  });

  // Subtle parallax on the glass card
  const card = document.querySelector(".glass-card");
  if (card && window.matchMedia("(pointer: fine)").matches) {
    const wrap = document.querySelector(".auth-wrap");
    wrap.addEventListener("pointermove", (e) => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    });
    wrap.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  }

  // Simple submit handling (demo)
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector(".btn-liquid");
      if (!btn) return;
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span>Please wait…</span>';
      setTimeout(() => {
        btn.innerHTML = '<span>Success ✓</span>';
        btn.style.background = "linear-gradient(120deg, #3ee6a6, #1e9e6d)";
        setTimeout(() => {
          window.location.href = "home.html";
        }, 700);
      }, 900);
    });
  });
})();
