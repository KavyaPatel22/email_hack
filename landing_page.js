(function () {
    const params = new URLSearchParams(window.location.search);
    const variant = params.get("variant") || "unknown";
  
    fetch("https://script.google.com/macros/s/AKfycbzFAxV5FyEXU2-Ffb9HTuaupJ9dKeAzZi7e5biP0E7CvrnVqj9GTc1sKnVjld1cENCZ/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        variant: variant,
        userAgent: navigator.userAgent
      }),
    });
  })();  