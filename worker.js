let openedInstances = new Set();
onconnect = (e) => {
  const port = e.ports[0];
  port.addEventListener("message", (event) => {
    openedInstances.add(event.data);
    port.postMessage(openedInstances.size);
  });
  port.start();
};
