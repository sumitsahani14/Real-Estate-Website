/* Halcyon Estates — shared behavior */

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  renderFeatured();
  renderListings();
  initFilters();
  renderPropertyDetail();
  initContactForm();
  setYear();
});

/* ---------- Mobile nav ---------- */

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  };

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    nav.classList.contains("open") ? closeMenu() : openMenu();
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (nav.classList.contains("open") && !nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}


/* ---------- Property card markup ---------- */

function propertyCard(p) {
  return `
    <a class="property-card" href="property.html?id=${p.id}">
      <div class="thumb">
        <img src="${p.images[0]}" alt="${p.title} exterior" loading="lazy" onerror="this.onerror=null; this.src='https://images.pexels.com/photos/35114454/pexels-photo-35114454.jpeg?auto=compress&cs=tinysrgb&w=1400';">
        <span class="tag">${p.status}</span>
      </div>
      <div class="info">
        <div class="price">${formatPrice(p.price)}</div>
        <div class="addr">${p.address}, ${p.city}</div>
        <div class="meta">${p.beds} bed · ${p.baths} bath · ${p.sqft.toLocaleString()} sqft</div>
      </div>
    </a>`;
}

/* ---------- Home: featured ---------- */

function renderFeatured() {
  const el = document.querySelector("[data-featured]");
  if (!el) return;
  const featured = LISTINGS.filter((p) => p.featured).slice(0, 3);
  el.innerHTML = featured.map(propertyCard).join("");
}

/* ---------- Listings page ---------- */

function renderListings(list) {
  const el = document.querySelector("[data-listing-grid]");
  if (!el) return;
  const data = list || LISTINGS;
  el.innerHTML = data.map(propertyCard).join("");

  const countEl = document.querySelector("[data-filter-count]");
  if (countEl) countEl.textContent = `${data.length} ${data.length === 1 ? "residence" : "residences"}`;

  const emptyEl = document.querySelector("[data-empty-state]");
  if (emptyEl) emptyEl.style.display = data.length === 0 ? "block" : "none";
}

function initFilters() {
  const typeSel = document.querySelector("[data-filter-type]");
  const bedsSel = document.querySelector("[data-filter-beds]");
  const priceSel = document.querySelector("[data-filter-price]");
  const citySel = document.querySelector("[data-filter-city]");
  if (!typeSel && !bedsSel && !priceSel && !citySel) return;

  function apply() {
    let result = LISTINGS.slice();
    if (typeSel && typeSel.value !== "all") {
      result = result.filter((p) => p.type === typeSel.value);
    }
    if (bedsSel && bedsSel.value !== "any") {
      const min = parseInt(bedsSel.value, 10);
      result = result.filter((p) => p.beds >= min);
    }
    if (priceSel && priceSel.value !== "any") {
      const max = parseInt(priceSel.value, 10);
      result = result.filter((p) => p.price <= max);
    }
    if (citySel && citySel.value !== "all") {
      result = result.filter((p) => p.city === citySel.value);
    }
    renderListings(result);
  }

  [typeSel, bedsSel, priceSel, citySel].forEach((sel) => {
    if (sel) sel.addEventListener("change", apply);
  });
}

/* ---------- Property detail page ---------- */

function renderPropertyDetail() {
  const root = document.querySelector("[data-property-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const property = LISTINGS.find((p) => p.id === id) || LISTINGS[0];

  document.title = `${property.title} — Halcyon Estates`;

  document.querySelector("[data-pd-breadcrumb]").innerHTML =
    `<a href="index.html">Home</a> / <a href="listings.html">Listings</a> / ${property.title}`;

  document.querySelector("[data-pd-main-image]").src = property.images[0];
  document.querySelector("[data-pd-main-image]").alt = `${property.title} — primary view`;

  const sideWraps = document.querySelectorAll("[data-pd-side-image]");
  sideWraps.forEach((img, i) => {
    const src = property.images[i + 1] || property.images[0];
    img.src = src;
    img.onerror = () => { img.onerror = null; img.src = property.images[0]; };
    img.alt = `${property.title} — view ${i + 2}`;
  });

  document.querySelector("[data-pd-title]").textContent = property.title;
  document.querySelector("[data-pd-address]").textContent = `${property.address}, ${property.city}`;
  document.querySelector("[data-pd-price]").textContent = formatPrice(property.price);
  document.querySelector("[data-pd-status]").textContent = property.status;
  document.querySelector("[data-pd-description]").textContent = property.description;

  document.querySelector("[data-pd-beds]").textContent = property.beds;
  document.querySelector("[data-pd-baths]").textContent = property.baths;
  document.querySelector("[data-pd-sqft]").textContent = property.sqft.toLocaleString();

  const specTable = document.querySelector("[data-pd-spec-table]");
  const rows = [
    ["Property type", property.type],
    ["Year built", property.year],
    ["Lot size", property.lot],
    ["Bedrooms", property.beds],
    ["Bathrooms", property.baths],
    ["Interior", `${property.sqft.toLocaleString()} sqft`],
    ["Status", property.status]
  ];
  specTable.innerHTML = rows.map(([l, v]) => `<tr><td>${l}</td><td>${v}</td></tr>`).join("");

  document.querySelector("[data-pd-agent-photo]").src = property.agent.photo;
  document.querySelector("[data-pd-agent-name]").textContent = property.agent.name;
  document.querySelector("[data-pd-agent-role]").textContent = property.agent.role;
  document.querySelector("[data-pd-agent-phone]").textContent = property.agent.phone;
  document.querySelector("[data-pd-agent-email]").textContent = property.agent.email;

  const emailLink = document.querySelector("[data-pd-agent-email-link]");
  if (emailLink) emailLink.href = `mailto:${property.agent.email}?subject=Inquiry: ${property.title}`;

  // Similar properties
  const similar = LISTINGS.filter((p) => p.id !== property.id && p.city === property.city).slice(0, 3);
  const fallbackSimilar = similar.length ? similar : LISTINGS.filter((p) => p.id !== property.id).slice(0, 3);
  const simEl = document.querySelector("[data-pd-similar]");
  if (simEl) simEl.innerHTML = fallbackSimilar.map(propertyCard).join("");
}

/* ---------- Contact form (front-end only) ---------- */

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.style.display = "none";
    document.querySelector("[data-form-success]").style.display = "block";
  });
}

/* ---------- Footer year ---------- */

function setYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = new Date().getFullYear();
}
