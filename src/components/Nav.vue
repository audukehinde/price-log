<template>
  <div class="bg-primary-color h-14 flex items-center overflow-y-hidden">
        <div class="flex items-center justify-end w-[100%]">

          <div class="pr-5">
            <h1 v-if="user" class="text-white text-[15px] font-bold">{{ user.name }}</h1>
          </div>
        </div>
        <img 
        />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  props: [''],
  name: 'Nav',

  data() {
    return {
      showSidebar: false,
      user: null,
    }
  }, 

   async created() {
    console.log(localStorage.getItem('token'));
    const response = await axios.get('users/profile');
    this.user = response.data;
    // console.log(localStorage.getItem('token'));
    console.log(response.data);
  },

}
</script>