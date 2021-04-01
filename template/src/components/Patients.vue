<template>
  <div>
    <h3>Patients</h3>
    <div v-if="patients.length === 0">There is no patients yet. Add some!</div>
    <ul v-else>
      <li v-for="patient in patients" :key="patient.id">
        <span>{{ patient | name }}</span>
        [<a
          href="javascript:void(0)"
          @click.prevent="onClickPatientDelete(patient)"
          >x</a
        >]
      </li>
    </ul>
    <button type="button" @click="onAddPatientClick">Add patient</button>
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
  filters: {
    name(patient) {
      if (patient.resource.name) {
        return patient.resource.name[0].text;
      }
    },
  },
  mounted() {
    this.fetchPatients();
  },
  methods: {
    async fetchPatients() {
      const patientsData = await this.aidbox.request("/Patient");
      this.patients = patientsData.data.entry;
    },
    onAddPatientClick() {
      const name = window.prompt("Enter patient name");
      if (!name) {
        return;
      }
      this.addPatient(name);
    },
    async addPatient(name) {
      await this.aidbox.request("/Patient", {
        data: { name: [{ text: name }] },
      });
      this.fetchPatients();
    },
    async onClickPatientDelete(patient) {
      await this.aidbox.request(`/Patient/${patient.resource.id}`, {
        method: "DELETE",
      });
      this.fetchPatients();
    },
  },
};
</script>

<style scoped></style>
