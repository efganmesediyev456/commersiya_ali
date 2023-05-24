<template>
  <form @submit.prevent="login">
    <input  v-model="email" type="email" name="email" >
    <input v-model="password" type="password" name="password">
    <input type="submit" value="Submit">



  </form>
</template>


<script>







  export default {
  // middleware: 'auth',

    layout:'auth',

  name: 'ShopPage',

    methods: {
      async login() {
        try{


         var test=await this.$axios.post('/login', {
            email: this.email,
            password: this.password
          });

         this.$auth.setUserToken(test.data.token);
         // this.$auth.setUser(test.data.user);








        }catch(e) {
          // eslint-disable-next-line
          console.log(e)
        }
      }
    },

  data(){
  return {
  password:'',
  email:'',
}
}




}


</script>


<style>

</style>
