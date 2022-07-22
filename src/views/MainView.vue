<template>
  <div class="bg-primary-color h-14 flex items-center">
    <div class="flex items-center justify-between w-[90vw] ">

      <!-- <div class="md:hidden ml-2" @click="toggleSidebar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg>
      </div> -->
      <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658150866/Group_161_qkw2qi.png" alt="" class="pb-14 w-44">
    </div>
    <img 
    />
  </div>
  <div class="flex">
    <sideBar />
    <div class="flex-1 p-5"><router-view /></div>
    <!-- <div class="ml-6"><item/></div> -->
    <!-- <div><Users /></div> -->
    
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Item from '@/components/Item.vue';
import Users from '@/components/Users.vue';

export default {
  components: {
    sideBar,
    Item,
    Users,
  },
   data() {
    return {
      showSidebar: false,
    }
  },
  methods: {
     toggleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  }
};
</script>

<style></style>
