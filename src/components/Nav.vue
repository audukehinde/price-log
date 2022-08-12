<template>
  <div class="bg-primary-color h-14 flex items-center overflow-y-hidden">
        <div class="flex items-center justify-between w-[100%]">
          <router-link to="/item" active-class="none">
            <div class="pl-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z" fill="rgba(255,255,255,1)"/></svg>
            </div>
          </router-link>
          <div class="pr-5">
            <h1 v-if="user" class="text-white text-[15px] font-bold">{{ user.name }}</h1>
          </div>
        </div>
        
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
    // console.log(response.data);
  },

}
</script>