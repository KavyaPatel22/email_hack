(function () {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant") || "unknown";
  const userAgent = navigator.userAgent;

  const url = `https://script.google.com/macros/s/AKfycbzFAxV5FyEXU2-Ffb9HTuaupJ9dKeAzZi7e5biP0E7CvrnVqj9GTc1sKnVjld1cENCZ/exec?variant=${encodeURIComponent(variant)}&userAgent=${encodeURIComponent(userAgent)}`;

  fetch(url)
    .then(() => console.log("Logged via GET"))
    .catch(err => console.error("Logging failed:", err));
})();
