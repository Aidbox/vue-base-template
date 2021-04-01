<template>
  <div class="container">
    Logged in as <b>{{ userInfo.id }}</b>
    <button @click="onLogoutClick" class="logout">Log Out</button>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  inject: ["aidbox"],
  props: {
    userInfo: {
      required: true,
      type: Object,
    },
  },
  methods: {
    async onLogoutClick() {
      await this.aidbox.closeSession();
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
@import "../main.css";

.container {
  text-align: right;
}
.logout {
  margin-left: 16px;
}
</style>
