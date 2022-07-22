<template>
  <div >
  <input type="text" placeholder="Name" class="text-black rounded-[10px] p-2 md:w-[70%] md:text-sm md:mb-2 focus:outline-none">
  <input type="text" placeholder="Email" class="text-black rounded-[10px] mt-6 p-2 md:w-[70%] md:text-sm md:mb-2 focus:outline-none">
  <input type="password" placeholder="Password" class="text-black mt-6 rounded-[10px] p-2 md:w-[70%] md:text-sm md:mb-2 focus:outline-none">
  
  <button
      class="mt-8 bg-btn-yellow rounded-[10px] w-[90%] md:w-[70%] text-[17px] h-[50px] md:h-[40px] md:font-bold"
    >
      Sign Up
    </button>
  <div class="mt-4 md:flex md:justify-center md:items-center">
    <p class="text-sm mr-2">Already have an Account?</p>
    <a class="text-sm text-btn-yellow font-bold cursor-pointer">Sign In</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String,
    test: String,
  }
}
</script>

<style>

</style>