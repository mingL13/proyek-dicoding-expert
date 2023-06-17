// eslint-disable-next-line import/no-extraneous-dependencies
import * as WorkboxWindow from "workbox-window";

const swRegister = async () => {
  if (!("serviceWorker" in navigator)) {
    // eslint-disable-next-line no-console
    console.log("Service Worker not supported in the browser");
    return;
  }
  const wb = new WorkboxWindow.Workbox("./sw.bundle.js");
  try {
    await wb.register();
    // eslint-disable-next-line no-console
    console.log("Service Worker Registered");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to Register Service Worker", error);
  }
};

export default swRegister;
