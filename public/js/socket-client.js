const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");

const socket = io();

socket.on("connect", () => {
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  lblOnline.style.display = "none";
  lblOffline.style.display = "";
});

socket.on("send-message", (data) => {
  console.log(data);
});

btnSend.addEventListener("click", () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: "Abc123",
    date: new Date().getTime(),
  };

  // socket.emit("message-server", payload);
  socket.emit("send-message", payload, (id) => {
    console.log("Desde el server", id);
  });
});
