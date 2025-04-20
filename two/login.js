(function () {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant") || "login-page";
  const userAgent = navigator.userAgent;
  const urlBase = "https://script.google.com/macros/s/AKfycbzBEkZ2LA1K7DJy9z2Pp1hbXBY0z6o30SCjTLe20G6rNQoSQSn_vHCDjJwezibgShvn/exec";

  // Log when someone visits the page
  const logVisit = () => {
    const url = `${urlBase}?variant=${encodeURIComponent(variant)}&event=visit&userAgent=${encodeURIComponent(userAgent)}`;
    fetch(url)
      .then(() => console.log("Visit logged"))
      .catch(err => console.error("Failed to log visit:", err));
  };

  // Log when someone clicks the login button
  const setupLoginTracking = () => {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent any real submission

      const url = `${urlBase}?variant=${encodeURIComponent(variant)}&event=login_click&userAgent=${encodeURIComponent(userAgent)}`;
      fetch(url)
        .then(() => alert("Login simulated and click tracked!"))
        .catch(err => console.error("Failed to log login click:", err));
    });
  };

  logVisit();
  window.addEventListener("DOMContentLoaded", setupLoginTracking);
})();