# Websocket 原理

# 聊天室
  - 前端

    1. Login
        用户名输入 / 进入聊天室的按钮

        input usename(6) -> localstorage -> enter the cahtting room
    2. Home
        列表 / 消息输入框 / 发送按钮

        localstorage -> username / messasge / id / 消息时间 -> 后端socket服务

    open
    close
    error
    message 接收广播来的数据

  - 后端

    接收 -> 消息数据 -> 广播给所有连接到socket服务的客户端

    open
    close
    error
    connection
      message 接收客户端发送的消息数据 -> 广播

  ws和nodejs-websocket是websocket的工具库
  socket.io是对websocket的封装(商用)