(function () {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant") || "unknown";
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;
  const lang = navigator.language;
  const tz = new Date().getTimezoneOffset();
  const width = screen.width;
  const height = screen.height;

  const url = `https://script.google.com/macros/s/AKfycbzFAxV5FyEXU2-Ffb9HTuaupJ9dKeAzZi7e5biP0E7CvrnVqj9GTc1sKnVjld1cENCZ/exec?` +
              `variant=${encodeURIComponent(variant)}` +
              `&userAgent=${encodeURIComponent(userAgent)}` +
              `&referrer=${encodeURIComponent(referrer)}` +
              `&lang=${encodeURIComponent(lang)}` +
              `&tz=${tz}` +
              `&width=${width}&height=${height}`;

  fetch(url)
    .then(() => console.log("Logged extended info"))
    .catch(err => console.error("Logging failed:", err));
})();
