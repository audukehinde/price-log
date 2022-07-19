<template>
  <div >
  <input type="text" placeholder="Name" class="p-3 text-black rounded-[10px] md:p-2 md:w-[80%] md:text-xl md:mb-2">
  <input type="text" placeholder="Email" class="p-3 text-black rounded-[10px] mt-6 md:p-2 md:w-[80%] md:text-xl md:mb-2">
  <input type="password" placeholder="Password" class="p-3 text-black mt-6 rounded-[10px] md:p-2 md:w-[80%] md:text-xl md:mb-2">
  
  <button class="mt-8 bg-btn-yellow w-5/6 py-4 rounded-[10px] md:p-2 md:w-[80%] md:text-xl">Sign Up</button>
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