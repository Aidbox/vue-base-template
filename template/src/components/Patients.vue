<template>
  <div>
    <h3>Patients</h3>
    <ul>
      <li v-for="patient in patients" :key="patient.id">
        <a href="javascript:void(0)">{{ patient.resource.id }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Patients",
  inject: ["aidbox"],
  data() {
    return {
      patients: [],
    };
  },
  mounted() {
    this.fetchPatients();
  },
  methods: {
    async fetchPatients() {
      const patientsData = await this.aidbox.request("/Patient");
      this.patients = patientsData.data.entry;
    },
  },
};
</script>

<style scoped></style>
