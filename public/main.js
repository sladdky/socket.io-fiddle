"use strict";

(function() {

  const socket = io();

  socket.on("connect", () => {
    console.log(`connect ${socket.id}`);
  });

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("disconnect", (reason) => {
    console.log(`disconnect due to ${reason}`);
  });

  socket.on('topic', (message) => {
    const msgEl = document.getElementById('msg')
    msgEl.innerText = message
  })

})();
