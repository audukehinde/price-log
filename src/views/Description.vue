<template>
  <div>
     <div class="bg-primary-color h-14 flex items-center">
    <div class="pl-24">
      <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658150866/Group_161_qkw2qi.png" alt="" class="pb-14 w-44">
    </div>
    <img 
    />
  </div>

   <div class="flex mytable justify-center items-center  bg-[#D9E9F0] mx-28 flex-col rounded-[21px] transform hover:bg-gray-300 hover:text-white transition duration-500 hover:scale-110 mt-10">
      <div class="flex justify-between items-center w-[85vw] px-20 py-2 my-2">
        <p class="font-bold text-sm text-gray-700">Price History</p>
         <button type="submit" class="rounded-[3px] text-sm font-bold text-white bg-primary-color px-3 p-2 justify-end" @click="toggleModal">+ Add Price</button>
      </div>
       <table class="w-[100%] text-gray-700 text-md h-auto mb-4">
          <thead>
            <tr>
              <th class="py-1">Price</th>
              <th class="py-1">Date</th>
              <th class="py-1">Vendor Name</th>
              <th class="py-1">Vendor Address</th>
              <th class="py-1">Phone Number</th>
              <th class="py-1">Discount</th>
            </tr>
          </thead>
          
          <tr class="text-center">
            <td class="py-1">#10,000</td>
            <td class="py-1">Sep. 22, 2024</td>
            <td class="py-1">Suliya Ajara</td>
            <td class="py-1">Brick and Motal</td>
            <td class="py-1">09067895432</td>
            <td class="py-1">None</td>
          </tr>

          <tr class="text-center">
            <td class="py-1">#12,000</td>
            <td class="py-1">Sep. 22, 2024</td>
            <td class="py-1">Saburi Ologbojo</td>
            <td class="py-1">Online</td>
            <td class="py-1">09067895432</td>
            <td class="py-1">None</td>
          </tr>
         
        </table>

        <div class="flex justify-start">
                <button class="bg-primary-color text-white text-sm font-bold w-28 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">See More...</button>
        </div>
          
    </div>

    <div class="flex justify-center myfont">
      <div class="flex justify-center w-[85vw] p-7">
      <div class="w-[50%]">
        <p class=" font-bold text-gray-600 mb-2">{{ item.name }}</p>
        <p class="text-sm text-gray-700">{{ item.description }}</p>
        <p class="mt-4 text-gray-700 text-[15px]"><span class="font-bold">Brand Type: </span>{{ item.categoryName }}</p>
        <p class=" border-t-[1px] border-b-[1px] py-3 my-4 font-bold text-gray-700 text-[15px]">#10,000</p>
        <p class="text-gray-700 text-sm mb-4"><span class="font-bold">Vendor Details: </span>{{ item.vendorName }}</p>
        <div class="text-gray-700 text-sm">
          <p class="font-bold mb-2">Product Features:</p>
          <ul>
            <li>- Automatic shutdown when left unattended to.</li>
            <li>- Large tank for long use.</li>
            <li>- Light weight and compact for easy use and storage.</li>
          </ul>
        </div>
      </div>
      <div class="w-[50%] transform bg-white transition duration-500 hover:scale-110">
        <img src="https://res.cloudinary.com/dfaseubju/image/upload/v1658331359/Rectangle_70_xljcle.png" alt="Item Image" class="w-[60%] m-auto">
      </div>
      </div>
    </div>

   
   <div v-if="showAddprice">
   <AddPrice> 
    <div @click="toggleModal" class=" cursor-pointer flex justify-end pt-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(248,109,98,1)"/></svg>
    </div>
       <form action="" class="py-5">
        <div class="mx-3">
          <label class="text-left text-sm text-gray-700">Price</label>
          <input type="text"
            class="p-2 text-black rounded-[5px] md:w-[100%] md:text-sm md:mb-2 focus:outline-none ">
        </div>
         <div class="mx-3">
          <label class="text-left text-sm text-gray-700">Vendor Name</label>
          <input type="text"
          class="p-2 text-black rounded-[5px] md:w-[100%] md:text-sm md:mb-2 focus:outline-none">
        </div>
         <div class="mx-3">
          <label class="text-left text-sm text-gray-700">Vendor Address</label>
          <input type="text"
          class="p-2 text-black rounded-[5px] md:w-[100%] md:text-sm md:mb-2 focus:outline-none">
        </div>
         <div class="mx-3">
          <label class="text-left text-sm text-gray-700">Discount</label>
          <input type="text"
          class="p-2 text-black rounded-[5px] md:w-[100%] md:text-sm md:mb-2 focus:outline-none">
        </div>
        <div class="mx-3">
          <label class="text-left text-sm text-gray-700">Phone Number</label>
          <input type="number"
            class="p-2 text-black rounded-[5px] md:w-[100%] md:text-sm md:mb-2 focus:outline-none">
        </div>
        <div class="mx-3 my-4">
          <button class="bg-[#016A9A] w-5/6 py-4 rounded-[10px] md:p-2 md:w-[100%] md:text-sm text-white font-bold">
            + Add Price
            </button>
        </div>
   
    </form>
   </AddPrice>
      
 </div>
  </div>
</template>

<script>
import AddPrice from '../components/AddPrice.vue'
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  components: {AddPrice},
  data() {
    return {
      showAddprice: false,
    }
  },

  methods: {
    toggleModal() {
      this.showAddprice = !this.showAddprice
    }
  },
  setup() {
    const item = ref({});

      const route = useRoute();
      
      const getItem = async () => {
        const res = await axios.get(`items/${route.params.itemId}`);
        item.value = res.data;
        console.log(res);
        // getExperience(res.data)
        // getAvailability(res.data)
      };
    
    return {item, getItem}
  },
  created(){
    this.getItem()
  }
}
</script>

<style>
  .mytable {
    border: 1px solid #016A9A;
  }
  .myfont {
    font-family: 'Poppins';
  }
</style>