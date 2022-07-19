<template>
  <div class="bg-primary-color h-14 flex items-center">
    <div class="">
      <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658150866/Group_161_qkw2qi.png" alt="" class="pb-14 w-44">
    </div>
    <img 
    />
  </div>
  <div class="flex">
    <div><sideBar /></div>
    <div class="ml-6"><item/></div>
  </div>
</template>

<script>
import sideBar from "@/components/sideBar.vue";
import Item from '@/components/Item.vue';

export default {
  components: {
    sideBar,
    Item,
  }
};
</script>

<style></style>
