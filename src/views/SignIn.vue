<template>
  <div class="main">
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
import { mapActions } from 'vuex'

export default {
    name: 'SignIn',
    props: ['emailInput'],

    data() {
        return {
            form: {
                email: this.$props.emailInput,
                password: ''
            }
        }
    },
    
    created() {
        console.log(this.form.email)
        console.log(this.$props.emailInput)
    },

    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        
        onSubmit() {
            this.signIn(this.form)
        }
    }

}
</script>

<style scoped>
  
</style>