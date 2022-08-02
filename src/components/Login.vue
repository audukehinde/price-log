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

    <!-- {{errors}} -->

     <div class="flex justify-center">
        <p
          class="text-sm font-semibold rounded-md bg-white text-red-600 md:w-[70%] text-center p-3"
          v-if="errors"
        >
          {{ errors }}
        </p>
      </div>

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
      password: '',
       errors:"",
    }
   
  },

   methods: {
    async handleSubmit() {
      try {
           const response = await axios.post('users/login', {
        email: this.email,
        password: this.password
      });
      this.$router.push("/main");
      // console.log(response);
      localStorage.setItem('token', response.data.data.token);
        
      } catch (error) {

         this.errors = error.response && error.response.data.error
                      ? error.response.data.error.message
                      : error.response.data.message;
        setTimeout(() => {
          // console.log('Timer working');
           this.errors = ''
            }, 3000);    
      }
    }
  }
};
</script>

<style></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
