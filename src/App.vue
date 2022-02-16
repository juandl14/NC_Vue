<template>
  <v-app>
    <v-main class="primary">
      <c-top-bar></c-top-bar>
      <v-row>
        <v-col>
          <div class="centered">
            <c-form></c-form>
          </div>
        </v-col>
        <v-col>
          <div class="centered">
            <c-table></c-table>
          </div>
        </v-col>
      </v-row>
    </v-main>
    <c-footer></c-footer>
  </v-app>
</template>

<script>
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Table from "@/components/Table";

export default {
  name: 'App',

  components: {
    CTopBar: TopBar,
    CForm: Form,
    CTable: Table,
    CFooter: Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

.centered {
  max-width: 100%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  alignment: center;
  margin-top: 10%;
}
</style>
