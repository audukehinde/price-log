<template>
  <div class="bg-sidebar w-[100vw] h-[100vh] flex justify-center items-center">
    <div class=" bg-[#016A9A] w-[350px] h-[350px] flex justify-center items-center rounded-[15px] flex-col">
      <div class=" justify-start items-start mb-10 mx-8">
        <p class="text-white text-[19px] text-left mb-1 font-bold">Forget Password</p>
        <p class="text-white text-[15px] text-left">Enter your E-mail address to reset your Password</p>
      </div>
      <div>
        <div class="">
          <input type="text" placeholder="E-mail"
          class="p-2 text-black rounded-[5px] md:w-[18vw] md:text-sm md:mb-2 focus:outline-none">
        </div>
        <div class="flex justify-center mt-2">
        <button class="bg-[#F86D62] md:py-2 md:px-5 rounded-[5px] md:w-[40%] md:text-[18px] text-white">
            Submit
        </button>
        </div>
        <div class="mt-4 md:flex md:justify-center md:items-center">
      <p class="text-sm mr-2 text-white">Return to</p>
      <router-link to="/login">
        <a class="text-sm text-white font-bold cursor-pointer">Login</a>
      </router-link>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassword'

}
</script>

<style>

</style>