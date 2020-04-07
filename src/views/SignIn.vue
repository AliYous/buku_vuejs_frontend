<template>
  <div>
      <h1>SignIn View Component</h1>
      <form @submit.prevent="onSubmit">
          <div>
              <label for="email">
                  Email
              </label>
              <input type="email" name="email" id="email" v-model="form.email">
          </div>

          <div>
              <label for="password">
                  Password
              </label>
              <input type="password" name="password" id="password" v-model="form.password">
          </div>

          <div>
              <button type="submit" class="btn">
                  Sign in
              </button>
          </div>

      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignIn',

    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        async onSubmit() {
            let response = await axios.post('signin', this.form)
            console.log(response.data)
        }
    }

}
</script>

<style>

</style>