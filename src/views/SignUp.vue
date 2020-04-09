<template>
  <div>
      <h1>SignUp View Component</h1>
      <form @submit.prevent="onSubmit">
          <div>
              <label for="first_name">
                  First Name
              </label>
              <input type="text" name="first_name" id="first_name" v-model="form.first_name">
          </div>

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
              <label for="password_confirmation">
                  Password Confirmation
              </label>
              <input type="password" name="password_confirmation" id="password_confirmation" v-model="form.password_confirmation">
          </div>


          <div>
              <button type="submit" class="btn">
                  Sign up
              </button>
          </div>

      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SignUp',

    data() {
        return {
            form: {
                first_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },

    methods: {
        ...mapActions({
            signUp: 'auth/signUp'
        }),
        
        onSubmit() {
            this.signUp(this.form)
        }
    }

}
</script>

<style>

</style>