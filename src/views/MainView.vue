<template>
  <div class="">
      <div class="bg-primary-color h-14 flex items-center overflow-y-hidden">
        <div class="flex items-center justify-between w-[100%]">

          <!-- <div class="md:hidden ml-2" @click="toggleSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
          </div> -->
          <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658150866/Group_161_qkw2qi.png" alt="" class="pb-14 w-44">
          <div class="pr-5">
            <h1 v-if="user" class="text-white text-[20px] font-bold">Welcome, {{ user.name }}</h1>
          </div>
        </div>
        <img 
        />
      </div>
      <div class="flex overflow-y-hidden">
        <sideBar />
        <div class="flex-1 p-5"><router-view /></div>
        <!-- <div class="ml-6"><item/></div> -->
        <!-- <div><Users /></div> -->
        
      </div>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Item from '@/components/Item.vue';
import Users from '@/components/Users.vue';
import axios from 'axios';

export default {
  components: {
    sideBar,
    Item,
    Users,
  },

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

  methods: {
     toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    
  }
};
</script>

<style></style>
