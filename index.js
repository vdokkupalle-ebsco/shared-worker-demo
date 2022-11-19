const worker = new SharedWorker("./worker.js");

const uniqueId = Math.random();

function postMessage(id) {
  worker.port.postMessage(id);
}

window.onfocus = () => {
  postMessage(uniqueId);
};
postMessage(uniqueId);

worker.port.onmessage = (event) => {
  if (event.data > 1) {
    document.querySelector("#msg").textContent =
      "Already opened in another window";
    worker.port.close();
  }
};

worker.port.start();
