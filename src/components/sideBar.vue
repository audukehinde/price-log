<template>
  <div class="hidden md:block  md:w-56 md:bg-secondary md:h-[100vh]">
    <div class="pt-8">
      <router-link to="/item">
      <Dropdown
        title="Items Category"
        :items="Category"
        class="pl-8 h-[30px] gap-2 bg-primary-color text-white"
      />
      </router-link>
    </div>
    <div class="pt-6">
      <div class="bg-sidebar-secondary h-[30px] flex items-center">
        <h2 class="text-[13px] font-[600] text-sidebar-tags pl-8">TAGS</h2>
      </div>

      <div class="pl-8 mt-2 flex items-center gap-3">
        <input
          type="checkbox"
          id="home-appliances"
          name="home-appliances"
          value="home-appliances"
        />
        <label for="home-appliances" class="text-[14px]">
          HOME APPLIANCES
        </label>
      </div>

      <div class="pl-8 mt-4 flex items-center gap-3">
        <input
          type="checkbox"
          id="office-appliances"
          name="office-appliances"
          value="office-appliances"
        />
        <label for="office-appliances" class="text-[14px]">
          OFFICE APPLIANCES
        </label>
      </div>

      <div class="pl-8 mt-4 flex items-center gap-3">
        <input
          type="checkbox"
          id="plumbing-tools"
          name="plumbing-tools"
          value="plumbing-tools"
        />
        <label for="plumbing-tools" class="text-[14px]"> PLUMBING TOOLS </label>
      </div>

      <div class="pl-8 mt-4 flex items-center gap-3">
        <input
          type="checkbox"
          id="consumables"
          name="consumables"
          value="consumables"
        />
        <label for="consumables" class="text-[14px]"> CONSUMABLES </label>
      </div>
    </div>

    <div class="pt-6">
      <div class="bg-sidebar-secondary h-[30px] flex items-center">
        <h2 class="text-[13px] font-[600] text-sidebar-tags pl-8">USERS</h2>
      </div>

      <!-- <form action=""> -->
      <router-link to="/users">
        <div class="pl-8 mt-2 flex items-center gap-3">
          <input
            type="radio"
            id="home-appliances"
            name="home-appliances"
            value="home-appliances"
          />
          <label for="home-appliances" class="text-[14px]"> ALL USERS </label>
        </div>
      </router-link>

      <div class="pl-8 mt-4 flex items-center gap-3">
        <input
          type="radio"
          id="office-appliances"
          name="office-appliances"
          value="office-appliances"
        />
        <router-link to="/usersRequest">
          <label for="office-appliances" class="text-[14px]">
            USER REQUEST
          </label>
        </router-link>
      </div>

      <div class="pl-8 mt-4 flex items-center gap-3">
        <input
          type="radio"
          id="plumbing-tools"
          name="plumbing-tools"
          value="plumbing-tools"
        />
        <label for="plumbing-tools" class="text-[14px]"> CREATE ADMIN </label>
      </div>
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
  name: "sideBar",
  components: {
    Dropdown,
  },
  data() {
    return {
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
};
</script>

<style>
.isExpanded {
  margin-bottom: 72%;
}
</style>
