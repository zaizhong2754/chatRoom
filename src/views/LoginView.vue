<template>
  <div class="login">
    <input type="text" placeholder="请输入用户名" v-model="username" />
    <button @click="enterChatRoom">进入聊天室</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    enterChatRoom() {
      if (this.validateUserName()) {
        localStorage.setItem("name", JSON.stringify(this.username));
        this.$router.push("/home");
      } else {
        alert("用户名必须是6到8为的数字或字母");
      }
    },
    validateUserName() {
      return /^[a-z0-9]{6,8}$/.test(this.username);
    },
  },
};
</script>

<style lang="scss" module></style>
