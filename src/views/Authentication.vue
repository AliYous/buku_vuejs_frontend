<template>
    <div>
        <Signin />
        <Signup />
    </div>
  
</template>

<script>
import Signin from '../components/authentication/Signin'
import Signup from '../components/authentication/Signup'
export default {
    name: "Authentication",
    components: {
        Signin,
        Signup
    }

}
</script>

<style>

</style>