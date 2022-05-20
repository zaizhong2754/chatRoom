const Ws = require("ws");
((Ws) => {
  const server = new Ws.Server({ port: 8000 });
  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    server.on("open", handleOpen);
    server.on("close", handleClose);
    server.on("error", handleError);
    server.on("connection", handleConnection);
  }

  function handleOpen() {
    console.log('后端WSopen');
  }
  function handleClose() {
    console.log('后端WSclose');
  }
  function handleError() {
    console.log('后端WSerror');
  }
  function handleConnection(ws) {
    console.log('后端WSmsg');
    ws.on('message',handleMessage)
  }
  function handleMessage(msg) {
    console.log(`接收到数据: ${msg}`);
    // 将接收到的信息广播给所有客户端
    server.clients.forEach(c=>{
      c.send(msg)
    })
  }

  init();
})(Ws);
