<template>
  <v-card class="pa-2" elevation="10">
      <v-layout column>
        <v-flex md6 style="overflow: auto">
          <v-simple-table fixed-header height="50vh">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">First Name</th>
                  <th class="text-left">Last Name</th>
                  <th class="text-left">Address</th>
                  <th class="text-left">SSN</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in list"
                  v-bind:key="item.ssn"
                >
                  <td>{{ item.firstName }}</td>
                  <td>{{ item.lastName }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.ssn }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-flex>
      </v-layout>
  </v-card>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: "Table",
  data() {
    return { list: undefined }
  },
  mounted() {
    Vue.axios.get("http://localhost:8081/api/members")
    .then((result) => {
      this.list = result.data
      console.warn(result)
    })
  }
}
</script>


<style scoped>

</style>