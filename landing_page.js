(function () {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant") || "unknown";
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;
  const lang = navigator.language;
  const tz = new Date().getTimezoneOffset();
  const width = screen.width;
  const height = screen.height;

  const url = `https://script.google.com/macros/s/AKfycbz.../exec?` +
              `variant=${encodeURIComponent(variant)}` +
              `&userAgent=${encodeURIComponent(userAgent)}` +
              `&referrer=${encodeURIComponent(referrer)}` +
              `&lang=${lang}` +
              `&tz=${tz}` +
              `&width=${width}&height=${height}`;

  fetch(url).then(() => console.log("Logged expanded data"));
})();
