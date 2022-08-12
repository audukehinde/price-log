<template>
  <div>
    <form action="" @submit="handleSubmit">
      <input
        type="text"
        placeholder="Name"
        class="text-black rounded-[10px] p-2 md:w-[70%] md:text-sm md:mb-2 focus:outline-none"
        v-model="name"
      />
      <input
        type="text"
        placeholder="Email"
        class="text-black rounded-[10px] mt-6 p-2 md:w-[70%] md:text-sm md:mb-2 focus:outline-none"
        v-model="email"
      />
      <input
        type="password"
        placeholder="Password"
        class="text-black mt-6 rounded-[10px] p-2 md:w-[70%] md:text-sm md:mb-2 focus:outline-none"
        v-model="password"
      />

      <div class="flex justify-center">
        <p
          class="text-sm font-semibold bg-white text-red-600 md:w-[70%] text-center rounded-md p-3"
          v-if="errors"
        >
          {{ errors }}
        </p>
      </div>

      <button
        type="submit"
        class="mt-8 bg-btn-yellow rounded-[10px] w-[90%] md:w-[70%] text-[17px] h-[50px] md:h-[40px] md:font-bold"
      >
        Sign Up
      </button>
      <div class="mt-4 md:flex md:justify-center md:items-center">
        <p class="text-sm mr-2">Already have an Account?</p>
        <a class="text-sm text-btn-yellow font-bold cursor-pointer">Sign In</a>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  props: {
    msg: String,
    test: String,
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("users/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
        console.log(response);
        this.errors = response.data.message
        // setTimeout(() => {
        //   this.errors = true;
        // }, 2000);

      } catch (error) {
        this.errors =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data;

            setTimeout(() => {
          // console.log('Timer working');
           this.errors = ''
            }, 3000);
      }
    },
  },
};
</script>

<style></style>
