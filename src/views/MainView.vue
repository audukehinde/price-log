<template>
  <div class="flex overflow-y-hidden">
      <div class="fixed z-10">
        <sideBar />
      </div>
      <div class="ml-56">
        <div class=" sticky">
          <Nav />
        </div>
        <div class="flex-1 p-5"><router-view /></div>
        
      </div>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Item from '@/components/Item.vue';
import Users from '@/components/Users.vue';
import axios from 'axios';
import Nav from '@/components/Nav.vue';

export default {
  components: {
    sideBar,
    Item,
    Users,
    Nav,
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
