<template>
  <div class="hidden md:block  md:w-56 bg-primary-color md:h-[100vh]">
   <img src="@/assets/logo1.png" alt="" class=" w-44 p-4">

    <div class="">
      <!-- <h1 class="text-center text-white font-bold">PRICE CATALOGUE</h1> -->
      <router-link to="/item">
      <!-- <Dropdown
        title="Items Category"
        :items="Category"
        
      /> -->
      
        <div class=" bg-primary-color text-white mt-16 flex items-center justify-start pl-3"><img src="@/assets/items.png" alt="" class="p-4 w-12">ITEMS</div>
      </router-link>
    </div>


    <div class="">

      <!-- <form action=""> -->
      <router-link to="/users">
       <div class=" bg-primary-color text-white mt-5 text-sm flex items-center justify-start pl-3"><img src="@/assets/users.svg" alt="" class="p-4 w-12">ALL USERS</div>
      </router-link>

      <router-link to="UsersRequest">
      <div class=" bg-primary-color text-white mt-5 text-sm flex items-center justify-start pl-3"><img src="@/assets/userRequest1.svg" alt="" class="p-4 w-12">USER REQUEST</div>
      </router-link>

      <router-link to="/createAdmin">
      <div class="bg-primary-color text-white mt-5 text-sm flex items-center justify-start pl-3"><img src="@/assets/Verified.svg" alt="" class="p-4 w-12">PRICE VERIFICATION</div>
      </router-link>

      <router-link to="/AddCategory">
      <div class=" bg-primary-color text-white mt-5 text-sm flex items-center justify-start pl-3"><img src="@/assets/Rectangle.svg" alt="" class="p-4 w-12">ADD CATEGORY</div>
      </router-link>
      <!-- </form> -->
    </div>

    <div class="flex justify-center h-10 mt-10">
      <button
        class="bg-primary-color text-white w-20 text-center rounded-[5px] py-1 font-bold"
      >
        Log Out
      </button>
    </div>
  </div>

</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
export default {
  name: 'sideBar',
  components: {
    Dropdown,
  },
  data() {
    return {
      isSidebarOpen: true,
      Category: [
        {
          title: "Electronic",
          link: "#",
        },
        {
          title: "Machines",
          link: "#",
        },
        {
          title: "Work Tools",
          link: "#",
        },
        {
          title: "Hand Tools",
          link: "#",
        },
        {
          title: "Electronic",
          link: "#",
        },
      ],
    };
  },
   methods: {
    toggleSidebar() {
      console.log('clicked');
      this.isSidebarOpen = !this.isSidebarOpen;
      console.log('clicked sdfbvldbfbsibs u bubeu bubl ub');
    }
  }
}
</script>

<style>
  .isExpanded {
    margin-bottom: 72%;
  }

  .closeSidebar {
    display: none;
  }
</style>