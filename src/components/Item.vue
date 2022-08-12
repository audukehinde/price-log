<template>
  <div class="md:flex justify-center hidden">
     
    <div class="flex justify-center md:justify-between mt-8 w-[95%]">
      <div class="flex items-center gap-2">
        <span class="relative z-10 pl-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(149,164,166,1)" class="cursor-pointer"/></svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          class="w-32 md:absolute pl-9 py-1 rounded-[5px] shadow-md border-t-1 md:w-96 focus:outline-primary-color"
        />
      </div>
      <router-link
        to="/uploadItem"
        class="bg-primary-color py-2 px-3 text-white rounded-lg font-bold"
      >
        + Add Item
      </router-link>
    </div>
  </div>
  <!-- <div class="overflow-y-auto h-[80vh] p-10"> -->
  <div
    class="grid grid-cols-2 gap-4 place-content-center place-items-center md:mt-5 md:grid-cols-5 md:gap-8" 
  >
    <div
      v-for="item in items"
      :key="item.itemId"
      class="w-[150px] md:w-[200px] shadow-md border-2 cursor-pointer"
      @click="fetchItem(item.itemId)"
    >
      <img
        src="https://res.cloudinary.com/dfaseubju/image/upload/v1658240853/Rectangle_35_gll32b.png"
        alt="Tool Name"
      />
      <p class="mt-4 pl-4">{{ item.name }}</p>
      <p class="my-2 pl-4 text-3xl font-semibold text-gray-800">$200</p>
    </div>
    <div class="w-[150px] md:w-[200px] shadow-md border-2">
      <img
        src="https://res.cloudinary.com/dfaseubju/image/upload/v1658236875/Rectangle_23_aqictg.png"
        alt="Tool Name"
      />
      <p class="mt-4 pl-4">Spanner</p>
      <p class="my-2 pl-4 text-3xl font-semibold text-gray-800">$50</p>
    </div>

    <div class="w-[150px] md:w-[200px] shadow-md border-2">
      <img
        src="https://res.cloudinary.com/dfaseubju/image/upload/v1658240853/Rectangle_25_otlmif.png"
        alt="Tool Name"
      />
      <p class="mt-4 pl-4">Wire</p>
      <p class="my-2 pl-4 text-3xl font-semibold text-gray-800">$90</p>
    </div>

    <router-view />
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  name: "Item",

  setup() {
    const items = ref([]);
    const err = ref(null);
    const item = ref({})

    const router = useRouter();

    const getItems = async () => {
      try {
        const res = await axios.get("items");
        items.value = res.data.items;
        console.log(res.data.items);
      } catch (error) {
        err.value = error.res.data;
      }
    };

     const fetchItem = async (id) => {
        const res = await axios.get(`items/${id}`);
        console.log(res);
        item.value = res.data;
        router.push(`/description/${id}`);
        // toggleModal();
      };

    return { items, err, getItems, fetchItem, item };
  },
  created() {
    this.getItems();
  },
};
</script>

<style>
input {
  border: 1px solid gray;
}
</style>
