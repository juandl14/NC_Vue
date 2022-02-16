<template>
  <v-footer
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="tertiary white--text">
        Copyright
        <v-spacer></v-spacer>
        All rights reserved
      </v-card-title>

      <v-card-text class="black white--text text-center">
        {{ new Date().getFullYear() }} — Juan De Luca
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>