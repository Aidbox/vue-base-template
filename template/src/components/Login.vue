<template>
  <div class="container">
    <form action="" @submit.prevent="onFormSubmit" class="form">
      <h3>Login to Aidbox</h3>
      <div class="field">
        <input type="text" name="username" required />
      </div>
      <div class="field">
        <input type="password" name="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  inject: ["aidbox"],
  methods: {
    async onFormSubmit(e) {
      const formData = new FormData(e.target);
      const username = formData.get("username");
      const password = formData.get("password");
      const res = await this.aidbox.authorize({ username, password });
      if (res.status === 200) {
        this.$emit("success", res.data.userinfo);
      } else {
        this.$emit("error", res.data.error_description || res.data.error);
      }
    },
  },
};
</script>

<style scoped>
@import "../main.css";

.container {
  text-align: center;
}
</style>
