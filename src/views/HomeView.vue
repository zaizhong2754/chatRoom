<template>
  <div class="home">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <p>用户名: {{ item.username }} 时间: {{ new Date(item.dataTime) }}</p>
        <p>
          {{ item.msg }}
        </p>
      </li>
    </ul>
    <input type="text" placeholder="请输入聊天信息" v-model="msg" />
    <button @click="sendChatMsg">发送</button>
  </div>
</template>

<script>
let ws = new WebSocket("ws://localhost:8000");
export default {
  created() {
    this.username = JSON.parse(localStorage.getItem("name"));
  },
  mounted() {
    ws.addEventListener("open", this.handleWsOpen.bind(this), false);
    ws.addEventListener("close", this.handleWsClose.bind(this), false);
    ws.addEventListener("error", this.handleWsError.bind(this), false);
    ws.addEventListener("message", this.handleWsMessage.bind(this), false);
  },
  data() {
    return {
      msg: "",
      username: "",
      list: [],
    };
  },
  methods: {
    sendChatMsg() {
      if (!this.msg.trim().length) return;
      let jsonInfo = JSON.stringify({
        id: new Date().getTime(),
        user: this.username,
        dataTime: new Date().getTime(),
        msg: this.msg,
      });
      ws.send(jsonInfo);
      this.msg = "";
    },
    handleWsOpen() {
      console.log("前端WSopen");
    },
    handleWsClose() {
      console.log("前端WSclose");
    },
    handleWsError() {
      console.log("前端WSerror");
    },
    handleWsMessage(e) {
      console.log("前端WSmsg");
      console.log(e); // 接收广播
      const msg = JSON.parse(e.data);
      this.list.push(msg);
    },
  },
};
</script>

<style lang="scss" module></style>
