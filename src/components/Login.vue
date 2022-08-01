<template>
  <div>
    <form action="" @submit="handleSubmit">
    <input
      type="text"
      placeholder="Email" v-model="email"
      class="text-black rounded-[10px] p-2 md:w-[70%] md:text-sm md:mb-2 focus:outline-none"
    />
    <input
      type="password"
      placeholder="Password" v-model="password"
      class=" text-black mt-12 md:mt-6 rounded-[10px] p-2 md:w-[70%] md:text-sm md:mb-2  focus:outline-none"
    />

    <button
      class="mt-12 bg-btn-yellow rounded-[10px] w-[90%] md:w-[70%] text-[17px] h-[50px] md:h-[40px] md:font-bold md:mt-6"
    >
      Log in
    </button>
    <router-link to="/forgetpassword">
    <p class="text-sm mr-2 mt-1 cursor-pointer">Forget Password?</p>
    </router-link>
    <div class="mt-4 md:flex md:justify-center md:items-center">
      <p class="text-sm mr-2">Don't have an Account?</p>
      <a class="text-sm text-btn-yellow font-bold cursor-pointer">Sign Up</a>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Login",
  props: {
    msg: String,
  
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

   methods: {
    async handleSubmit() {
      const response = await axios.post('users/login', {
        email: this.email,
        password: this.password
      });
      this.$router.push("/main");
     
      console.log(response);

      localStorage.setItem('token', response.data.data.token);
      
    }
  }
};
</script>

<style></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
