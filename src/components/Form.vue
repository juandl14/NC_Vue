<template>

    <v-card class="px-8 py-3" elevation="10">
      <validation-observer
        ref="observer"
        v-slot="{ invalid }"
      >
        <form
          @submit.prevent="submit"
          method="post"
        >
          <validation-provider
            v-slot="{ errors }"
            name="First Name"
            rules="required"
          >
            <v-text-field
                v-model="posts.firstName"
                :error-messages="errors"
                label="First Name"
                required
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Last Name"
            rules="required"
          >
            <v-text-field
                v-model="posts.lastName"
                :error-messages="errors"
                label="Last Name"
                required
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="Address"
            rules="required"
          >
            <v-text-field
                v-model="posts.address"
                :error-messages="errors"
                label="Address"
                required
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            name="SSN"
            :rules="{
              required: true,
              regex: '^[0-9]{3}-?[0-9]{2}-[0-9]{4}',
            }"
          >
            <v-text-field
                v-model="posts.ssn"
                :error-messages="errors"
                label="SSN"
                :counter="11"
                required
            ></v-text-field>
          </validation-provider>

          <v-btn
              color="error"
              class="mt-5 mx-5 mb-2"
              @click="reset"
          >
            Reset
          </v-btn>

          <v-btn
              :disabled="invalid"
              color="success"
              class="mt-5 mx-5 mb-2"
              @click="submit"
              type="submit"
          >
            Submit
          </v-btn>
        </form>
      </validation-observer>

      <v-alert
          type="error"
          v-if="badRequest"
          transition="slide-y-transition"
      >
        SSN is already registered
      </v-alert>

    </v-card>

</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { required, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

Vue.use(VueAxios, axios)

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('regex', {
  ...regex,
  message: '{_value_} is an invalid {_field_}',
})

export default {
  name: "Form",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      posts: {
        firstName: '',
        lastName: '',
        address: '',
        ssn: '',
      },
      valid: true,
      badRequest: false,
      list: undefined
    }
  },

  methods: {
    submit (e) {
      this.$refs.observer.validate()
      this.axios.post("http://localhost:8081/api/members", this.posts)
          .then((result) => {
            if (result.status === 201) {
              window.location.reload();
            }
            console.log(result.data.code);
          }).catch((error) => {
            console.log(error.message);
            this.badRequest = true;
      })
      e.preventDefault();
    },

    reset () {
      this.posts.firstName = '';
      this.posts.lastName = '';
      this.posts.address = '';
      this.posts.ssn = '';
      this.badRequest = false;
      this.$refs.observer.reset();
    }
  },
}
</script>

<style scoped>

</style>