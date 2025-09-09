document.getElementById("btn").addEventListener("click", () => {alert("You clicked the button!");
})

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("Service Worker registered:", reg))
      .catch(err => console.err("Service Worker registration failed:", err));
  });
}