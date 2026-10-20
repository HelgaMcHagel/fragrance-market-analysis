(async function () {
  const base = "/fragrance-market-analysis/";
  const footerUrl = base + "shared-footer.html";
  const stylesheetUrl = base + "style.css";

  if (![...document.querySelectorAll('link[rel="stylesheet"]')].some(link => link.href === new URL(stylesheetUrl, location.href).href)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = stylesheetUrl;
    document.head.appendChild(link);
  }

  try {
    const response = await fetch(footerUrl);
    if (!response.ok) throw new Error("Footer could not be loaded");
    const html = await response.text();
    document.querySelectorAll("footer.site-footer").forEach(node => node.remove());
    document.body.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.error("Unable to load shared footer:", error);
  }
})();