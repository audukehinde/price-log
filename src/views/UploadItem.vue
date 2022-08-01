<template>
    <div class="flex flex-col-reverse lg:flex-row lg:w-screen lg:h-screen">
        <button type="submit" class="flex justify-center items-center bottom-0 lg:hidden lg:rounded-lg rounded text-sm font-semibold text-white w-32 h-8 bg-primary-color">Done</button>
        <div class="bg-sidebar h-[100vh] lg:w-1/2">        
             <img src="../img/PriceLog.png" alt="" class="mt-2 mb-8 ml-20 w-32">
             <div class="flex flex-col lg:hidden">
                <div class="flex justify-center">
                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-32 h-32 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col">
                            <img src="../img/img-logo.png" alt="" class="w-16 h-16">
                            <p class="text-xs text-gray-500 dark:text-gray-400"><span class=" font-medium">Drag and drop image, or </span><span class="text-btn-yellow font-semibold">Browse</span></p>
                        </div>
                        <input id="dropzone-file" type="file" class="" /> 
                    </label>
                </div>
            </div>
            <div class="flex flex-col items-center">
             <div class="flex flex-col">
                <label>Title</label>
                <input type="text" class=" md:w-[100%] lg:w-[400px] lg:h-[35px] h-8 px-3 rounded-[5px] border-1 border-primary-color focus:outline-none" />
             </div>
             <div class="flex flex-col m-1">
                <label>Manufacturer</label>
                <input type="text" class="lg:w-[400px] lg:h-[35px] h-8 px-3 rounded-[5px] border-1 border-primary-color focus:outline-none" />
             </div>
              <div class="flex flex-col m-1">
                <label>Model No.</label>
                <input type="text" class="lg:w-[400px] lg:h-[35px] px-3 rounded-[5px] h-8 border-1 border-primary-color focus:outline-none" />
             </div>
              <div class="flex flex-col m-1">
                <label>Description</label>
                <input type="message" class="lg:w-[400px] lg:h-24 px-2 h-16 rounded-[5px] border-1 border-primary-color focus:outline-none" />
             </div>
             <div class="flex flex-col m-1">
                <label>Category</label>
                <select id="quantity_disabled" @change="onItemSelected($event)"  class="px-4 lg:w-[400px] lg:h-[35px] h-8 rounded-[5px] border-primary-color focus:outline-none">
                    <option selected></option>
                    <option value="consumables">Consumables</option>
                    <option value="electronics">Electronics</option>
                    <option value="tools">Tools</option>
                    <option value="batteries">Batteries</option>
                    <option value="laptops">Laptops</option>
                    <option value="clothes">Clothes</option>
                </select>
             </div>
             <div v-if="isCategorySelected">
                <div v-for="property in propertiesCategories" :key="property.label">
                <div  class="flex flex-col m-1">
                    <label>{{property.label}}</label>
                    <input type="text" class="lg:w-[400px] lg:h-[35px] px-3 rounded-[5px] h-8 border-1 border-primary-color focus:outline-none" />
                </div>
             </div>

         

             </div>
                    
            </div>
        </div>
         <div class="w-1/2 p-10 lg:flex md:justify-center md:items-center flex-col hidden bg-sidebar">
             <div class="">
                <label for="dropzone-file" class="flex flex-col justify-center items-center h-[60vh] w-[30vw] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                        <img src="../img/img-logo.png" alt="">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Drag and drop image, or </span><span class="text-orange font-bold">Browse</span></p>
                    </div>
                    <!-- <input id="dropzone-file" type="file" class="bg-transparent border-none text-center p-10" />  -->
                </label>
            </div>
            <button type="submit" class="rounded-[3px] text-sm font-bold text-white px-8 py-2 bg-primary-color mt-6">Upload</button>
         </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
     data() {
        return {
            isCategorySelected: false,
            propertiesCategories: [],
            item: '',
            // getCategories: []
        }
    },

  methods: {
     onItemSelected(event) {
      this.isCategorySelected = true
    //   alert(event.target.value);
      this.propertiesCategories =  [{
            label: 'Width',
            unit : 'kg'
            },
            {
            label: 'Color',
            unit : ""
            },
            {
            label: 'Height',
            unit : 'meter'
            }
        ]
                    
    },
     async getCategories () {
        const res = await axios.get('categories');
        this.item = res.data;
        console.log(res);
    },
   
    
  },
    created(){
    this.getCategories()
    console.log('working')
  }
  
}
</script>

<style>
    select {
        border: 1px solid red;
    }
</style>