const swRegister = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").then(
        (registration) => {
          console.log("Service Worker Registered", registration.scope);
        },
        (error) => {
          console.log("ServiceWorker registration failed: ", error);
        }
      );
    });
  }
};

export default swRegister;
