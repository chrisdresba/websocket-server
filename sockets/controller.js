const sockectController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  socket.on("send-message", (data, callback) => {
    const id = 123456;
    callback(id);

    socket.broadcast.emit("send-message", data);
  });
};

module.exports = sockectController;
