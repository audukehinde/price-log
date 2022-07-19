<template>
  <div>
    <form action="">
    <input
      type="text"
      placeholder="Email"
      class="p-3 text-black rounded-[10px] md:p-2 md:w-[80%] md:text-xl md:mb-2"
    />
    <input
      type="password"
      placeholder="Password"
      class="p-3 text-black mt-8 rounded-[10px] md:p-2 md:w-[80%] md:text-xl md:mb-2"
    />

    <button
      class="mt-8 bg-btn-yellow w-5/6 py-4 rounded-[10px] md:p-2 md:w-[80%] md:text-xl"
    >
      Log in
    </button>
    <div class="mt-4 md:flex md:justify-center md:items-center">
      <p class="text-sm mr-2">Don't have an Account?</p>
      <a class="text-sm text-btn-yellow font-bold cursor-pointer">Sign Up</a>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  
  },
};
</script>

<style></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
