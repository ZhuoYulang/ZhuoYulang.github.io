const body = document.body;
const navToggle = document.querySelector(".greedy-nav__toggle");
const navLinks = [...document.querySelectorAll(".visible-links a")];
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle?.querySelector("i");
const backToTop = document.querySelector(".back-to-top");
const searchInput = document.querySelector("#pub-search");
const searchCount = document.querySelector(".pub-search-count");
const publications = [
  ...document.querySelectorAll(".paper-box"),
  ...document.querySelectorAll(".pub-list li"),
];

const setThemeIcon = () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeIcon?.classList.toggle("fa-sun", isDark);
  themeIcon?.classList.toggle("fa-moon", !isDark);
  document.querySelector("#theme-color-meta")?.setAttribute("content", isDark ? "#0d1117" : "#ffffff");
};

setThemeIcon();

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  body.classList.toggle("overflow--hidden", isOpen);
  navToggle.classList.toggle("close", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open", "overflow--hidden");
    navToggle?.classList.remove("close");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  setThemeIcon();
});

const updatePublicationFilter = () => {
  const query = searchInput?.value.trim().toLowerCase() || "";
  let visibleCount = 0;

  publications.forEach((item) => {
    const matches = !query || (item.textContent || "").toLowerCase().includes(query);
    item.classList.toggle("is-hidden", !matches);
    if (matches) visibleCount += 1;
  });

  if (searchCount) {
    searchCount.textContent = query ? `${visibleCount} publication item(s) shown` : "";
  }
};

searchInput?.addEventListener("input", updatePublicationFilter);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -70% 0px",
    threshold: [0.05, 0.2, 0.45],
  },
);

document.querySelectorAll("h1[id], .anchor[id]").forEach((section) => {
  sectionObserver.observe(section);
});

const updateBackToTop = () => {
  backToTop?.classList.toggle("visible", window.scrollY > 500);
};

window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateBackToTop();
