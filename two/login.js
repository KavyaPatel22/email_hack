(function () {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant") || "login-page";
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;
  const lang = navigator.language;
  const tz = new Date().getTimezoneOffset();
  const width = screen.width;
  const height = screen.height;

  // Track page visit
  const logVisit = () => {
    const url = `https://script.google.com/macros/s/AKfycbzBEkZ2LA1K7DJy9z2Pp1hbXBY0z6o30SCjTLe20G6rNQoSQSn_vHCDjJwezibgShvn/exec` +
                `variant=${encodeURIComponent(variant)}` +
                `&event=visit` +
                `&userAgent=${encodeURIComponent(userAgent)}` +
                `&referrer=${encodeURIComponent(referrer)}` +
                `&lang=${lang}` +
                `&tz=${tz}` +
                `&width=${width}&height=${height}`;

    fetch(url).then(() => console.log("Page visit logged"));
  };

  // Track login click only (no user/pass data)
  const setupLoginTracking = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent actual submission

      const url = `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?` +
                  `variant=${encodeURIComponent(variant)}` +
                  `&event=login_click` +
                  `&userAgent=${encodeURIComponent(userAgent)}`;

      fetch(url)
        .then(() => alert("Login attempt recorded — this is a simulation."))
        .catch(err => console.error("Failed to log login click:", err));
    });
  };

  logVisit();
  window.addEventListener("DOMContentLoaded", setupLoginTracking);
})();
