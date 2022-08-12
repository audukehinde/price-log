<template>
  <div class="login-background">
    <div class="overlay">
      <div class="flex justify-center text-3xl text-white h-screen">
        <div class="flex flex-col justify-center items-center h-auto">
          <div class="flex flex-col text-center h-5/6 md:flex-row">
            <div class="md:flex md:justify-center md:flex-col md:w-[30vw]">
              <h1
                class="text-5xl font-bold item-center mb-4 md:text-start md:underline md:text-4xl"
              >
                Welcome
              </h1>
              <p class="text-[25px] md:text-start md:text-3xl md:leading-10 md:font-bold">
                Login / Register to <br />start your Adventure
              </p>
            </div>

            <div
              class="mt-6 md:flex md:justify-center md:items-center md:flex-col md:w-[28vw] md:bg-secondary md:rounded-[25px]"
            >
              
              <div class="flex mb-8 bg-white rounded-3xl border-0 mx-[100px] md:mx-[10px]">
                <button
                  @click="toggle"
                  class="bg-primary-color rounded-3xl px-6 py-1 signme font-bold"
                >
                  Login
                </button>
                <button
                  @click="toggle"
                  class="rounded-3xl px-4 py-1 text-primary-color signme font-bold"
                >
                  Sign Up
                </button>
              </div>
              <!-- Calling Loging and Signin component -->
              <login v-if="showLoginForm"/>
              <sign-up v-if="!showLoginForm" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><router-view /></div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignUp from "@/components/SignUp.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "LoginView",
  components: {
    Login,
    SignUp,
  },
  setup() {
    const showLoginForm = ref(true);
    const toggle = () => {
      showLoginForm.value = !showLoginForm.value;
    };

    return {
      toggle,
      showLoginForm,
    };
  },
};
</script>

<style>
.login-background {
  height: 100vh;
  background-image: url("https://res.cloudinary.com/dfaseubju/image/upload/v1657904153/Freedom_pl0f9p.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 23, 32, 0.6);
  z-index: 2;
}

.signme {
  font-size: 18px;
}
</style>
