<template>
  <div id="app">
    <div v-if="error" class="error">Error: {{ error }}</div>
    <div v-if="userInfo">
      <UserInfo :userInfo="userInfo" @logout="setUserInfo(null)" />
      <Patients />
    </div>
    <div v-else-if="ready">
      <Login @success="setUserInfo" @error="setError" />
    </div>
  </div>
</template>

<script>
import Patients from "./components/Patients";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";

export default {
  name: "App",
  inject: ["aidbox"],
  components: {
    Login,
    UserInfo,
    Patients,
  },
  data() {
    return {
      error: null,
      userInfo: null,
      ready: false,
    };
  },
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    setUserInfo(userInfo) {
      this.setError(null);
      this.userInfo = userInfo;
    },
    setError(error) {
      this.error = error;
    },

    async fetchUserInfo() {
      const res = await this.aidbox.getUserInfo();

      if (res.status === 200) {
        this.setUserInfo(res.data);
      } else if (res.status === 0) {
        this.setError("Aidbox server is unreachable.");
      }
      this.ready = true;
    },
  },
};
</script>

<style>
@import "main.css";
</style>
