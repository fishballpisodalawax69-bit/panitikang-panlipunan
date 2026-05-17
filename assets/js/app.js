/* =========================
   MOBILE MENU TOGGLE
========================= */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

/* =========================
   ACTIVE LINK HIGHLIGHT
========================= */
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("text-emerald-400", "font-bold");
  }
});

/* =========================
   SMOOTH SCROLL (same page only)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});