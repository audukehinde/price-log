<template>
  <div class="md:flex justify-center md:w-[70vw] ml-10 hidden">
  <div class="flex justify-center md:justify-between mt-8 w-[80vw]">
    <div class="flex items-center gap-2">
      <span class="relative z-10 pl-2">
        <svg width="17" height="17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.25 19.25L15.1378 15.1305M17.4167 9.62504C17.4167 11.6915 16.5958 13.6734 15.1345 15.1346C13.6733 16.5958 11.6915 17.4167 9.625 17.4167C7.55852 17.4167 5.57668 16.5958 4.11546 15.1346C2.65424 13.6734 1.83334 11.6915 1.83334 9.62504C1.83334 7.55856 2.65424 5.57672 4.11546 4.1155C5.57668 2.65428 7.55852 1.83337 9.625 1.83337C11.6915 1.83337 13.6733 2.65428 15.1345 4.1155C16.5958 5.57672 17.4167 7.55856 17.4167 9.62504V9.62504Z" stroke="black" stroke-opacity="0.53" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>
      <input type="text" placeholder="Search" class="w-32 md:absolute pl-7 py-1 rounded-[5px] shadow-md border-t-1 md:w-96 focus:outline-primary-color">
    </div>
    <router-link to="/uploadItem" class="bg-primary-color py-2 px-3 text-white rounded-lg font-bold">
      Upload
    </router-link>
    </div>
  </div>

   <div class="grid grid-cols-2 gap-6 place-content-center place-items-center md:mt-10 md:grid-cols-5 md:gap-4">
      <div class="w-[150px] md:w-[200px] shadow-md border-2 ">
        <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658236875/Rectangle_23_aqictg.png" alt="Tool Name">
        <p class="mt-4 pl-4">Spanner</p>
        <p class="my-2 pl-4">$50</p>
      </div>
      <div class="w-[150px] md:w-[200px] shadow-md border-2 ">
        <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658240853/Rectangle_25_otlmif.png" alt="Tool Name">
        <p class="mt-4 pl-4">Wire</p>
        <p class="my-2 pl-4">$90</p>
      </div>
      <div class="w-[150px] md:w-[200px] shadow-md border-2 ">
        <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658240853/Rectangle_29_wkfgi3.png" alt="Tool Name">
        <p class="mt-4 pl-4">Car Battery</p>
        <p class="my-2 pl-4">$70</p>
      </div>
      <div class="w-[150px] md:w-[200px] shadow-md border-2 ">
        <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658240853/Rectangle_30_zmiail.png" alt="Tool Name">
        <p class="mt-4 pl-4">Limit Switch</p>
        <p class="my-2 pl-4">$30</p>
      </div>
      <div class="w-[150px] md:w-[200px] shadow-md border-2 ">
        <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658240853/Rectangle_36_ltzbjo.png" alt="Tool Name">
        <p class="mt-4 pl-4">Standing Fan</p>
        <p class="my-2 pl-4">$10</p>
      </div>
      <div class="w-[150px] md:w-[200px] shadow-md border-2 ">
        <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658240853/Rectangle_35_gll32b.png" alt="Tool Name">
        <p class="mt-4 pl-4">Plier</p>
        <p class="my-2 pl-4">$200</p>
      </div>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Item',
}
</script>

<style>
  input {
    border: 1px solid gray;
  }
</style>