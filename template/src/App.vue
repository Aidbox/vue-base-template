<template>
  <div id="app">
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="userInfo">
      <div>
        Logged in as <b>{{ userInfo.id }}</b>
      </div>
      <Patients />
    </div>
  </div>
</template>

<script>
import Patients from "./components/Patients";

export default {
  name: "App",
  inject: ["aidbox"],
  components: {
    Patients,
  },
  data() {
    return {
      error: null,
      userInfo: null,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const res = await this.aidbox.getUserInfo();

      if (res.status === 200) {
        this.error = null;
        this.userInfo = res.data;
      } else if (res.status === 0) {
        this.error = "Aidbox server is unreachable.";
      } else {
        this.authorize();
      }
    },
    async authorize() {
      const res = await this.aidbox.authorize({
        username: "admin",
        password: "secret",
      });

      if (res.status === 200) {
        this.error = null;
        this.userInfo = res.data.userinfo;
      } else {
        this.error = res.data.error_description || res.data.error;
      }
    },
  },
};
</script>

<style></style>
