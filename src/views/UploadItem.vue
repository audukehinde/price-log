<template>
<form @submit.prevent="handleSubmit">
  <div class="flex flex-col-reverse lg:flex-row lg:w-screen">
    
    <button
      type="submit"
      class="flex justify-center items-center bottom-0 lg:hidden lg:rounded-lg rounded text-sm font-semibold text-white w-32 h-8 bg-primary-color"
    >
      Done
    </button>
    <!-- Input Field -->
   
    <div class="bg-sidebar  lg:w-1/2">
      <div class="flex justify-between items-center w-[100vw] py-2 my-2 ">
        <router-link to="/item">
          <img src="../img/PriceLog.png" alt="" class="mt-2 mb-8 ml-20 w-32" />
        </router-link>
        <router-link to="/item" active-class="none" class="z-40 pr-10">
            <div class="pl-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z" fill="#016A9A"/></svg>
            </div>
          </router-link>
      </div>
      <div class="flex flex-col lg:hidden">
        <div class="flex justify-center">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-32 h-32 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col">
              <img src="../img/img-logo.png" alt="" class="w-16 h-16" />
              <p class="text-xs text-gray-500 dark:text-gray-400">
                <span class="font-medium">Drag and drop image, or </span
                ><span class="text-btn-yellow font-semibold">Browse</span>
              </p>
            </div>
            <input id="dropzone-file" type="file" class="" />
          </label>
        </div>
      </div>
       <!-- <div class="overflow-y-auto p-10"> -->
      <div class="flex flex-col items-center">
        <div class="flex flex-col">
          
          <label>Title</label>
          <input
            type="text"
            class="md:w-[100%] lg:w-[400px] lg:h-[35px] h-8 px-3 rounded-[5px] border-1 border-primary-color focus:outline-none" v-model="title"
          />
        </div>
        <div class="flex flex-col m-1">
          <label>Manufacturer</label>
          <input
            type="text"
            class="lg:w-[400px] lg:h-[35px] h-8 px-3 rounded-[5px] border-1 border-primary-color focus:outline-none" v-model="manufacturer"
          />
        </div>
        <div class="flex flex-col m-1">
          <label>Model No.</label>
          <input
            type="text"
            class="lg:w-[400px] lg:h-[35px] px-3 rounded-[5px] h-8 border-1 border-primary-color focus:outline-none" v-model="modelNo"
          />
        </div>
        <div class="flex flex-col m-1">
          <label>Description</label>
          <input
            type="message"
            class="lg:w-[400px] lg:h-24 px-2 h-16 rounded-[5px] border-1 border-primary-color focus:outline-none" v-model="description"
          />
        </div>
        <div class="flex flex-col m-1">
          <label>Category</label>
          <select
            v-model="selected" 
            id="quantity_disabled"
            class="px-4 lg:w-[400px] lg:h-[35px] h-8 rounded-[5px] border-primary-color focus:outline-none"
            @change="onItemSelected($event)"
          >
            <option selected disabled>Select Category</option>
            
            <option
              v-for="category in categories"
              :value="category.categoryID"
              :key="category.categoryID"
            >
              {{ category.categoryName }}
            </option>
           
          </select>
        </div>
        <div v-if="isCategorySelected">
          <div v-for="property in propertiesCategories" :key="property.label">
            <div class="flex flex-col m-1">
              <label>{{ property.label }}</label>
              <input
                type="text"
                class="lg:w-[400px] lg:h-[35px] px-3 rounded-[5px] h-8 border-1 border-primary-color focus:outline-none"
              />
            </div>
          </div>
        </div>
      
      </div>
    </div>
    
    <div
      class="w-1/2 p-10 lg:flex md:justify-center md:items-center flex-col hidden bg-sidebar pt-20"
    >
      <div class="">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center h-[60vh] w-[30vw] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <img src="../img/img-logo.png" alt="" />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Drag and drop image, or </span
              ><span class="text-orange font-bold">Browse</span>
            </p>
          </div>
        </label>
      </div>
      <button
        type="submit"
        class="rounded-[3px] text-sm font-bold text-white px-8 py-2 bg-primary-color mt-6"
      >
        Upload
      </button>
    </div>
   
  </div>
   </form>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "choose your category",
      isCategorySelected: false,
      propertiesCategories: [],
      categories: [],
      title: "",
      manufacturer: "",
      modelNo: "",
      description: "",
      // category: ""
      // category: "",
    };
  },

  methods: {
    async onItemSelected(event) {
      try {
        this.isCategorySelected = true;
        const res = await axios.get(
          `categories/${event.target.value}/properties`
        );
        console.log(res.data);
        this.propertiesCategories = res.data;
        console.log(this.propertiesCategories)
      } catch (error) {
        this.propertiesCategories = [];
        throw new Error(error);
      }
    },
    async getCategories() {
      const res = await axios.get("categories");
      this.categories = res.data;
      console.log(res.data[0]);
    }, 

    async handleSubmit() {
      console.log(this.title, this.manufacturer, this.description)
       if (!this.title || !this.manufacturer || !this.modelNo || !this.description) {
            alert("Fill the Required Fields");
            return
          }
      try {
        const response = await axios.post("items", {
          title: this.title,
          manufacturer: this.manufacturer,
          modelNo: this.modelNo,
          description:this.description,
          category: this.category
        });
        // this.$router.push("/login");
        alert("Are you sure?")
        console.log(response);
        this.errors = response.data.message
      } catch (error) {
        this.errors =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data;

          //   setTimeout(() => {
          //  this.errors = ''
          //   }, 3000);
      }
    },

  },
  created() {
    this.getCategories();
    console.log("working");
  },
};
</script>

<style>
select {
  border: 1px solid red;
}
</style>
