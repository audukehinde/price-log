<template>
  <div
    class="w-[90vw] overflow-x-auto relative md:w-[80vw] md:flex justify-center"
  >
    <table class="w-[90%]">
      <thead>
        <tr class="text-center">
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            REQUEST
          </th>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            DATE
          </th>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            STATUS
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="price in prices"
          :key="price.priceID"
          class="border-b-8 border-white text-center"
        >
          <td class="py-4 text-sm font-bold w-[350px]">
            {{ price.poster }}
            <p>Submitted price for</p>
            {{ price.name }}
          </td>
          <td class="text-sm font-bold">
            {{ (price.createdAt.split('T')[0]) }}
          </td>
          <td class="text-sm font-bold px-6">
            <div class="flex items-center justify-center gap-3">
              <button
                class="bg-primary-color text-white text-[12px] w-20 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept"
              >
                REVIEW
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { sideBar } from "./sideBar.vue";

export default {
  components: { sideBar },
  setup() {
    const prices = ref([]);
    const err = ref(null);
    // const item = ref({})

    const router = useRouter();

    const getPrice = async () => {
      try {
        const res = await axios.get("prices");
        prices.value = res.data;
        console.log(res.data);
      } catch (error) {
        err.value =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data;
      }
    };

    return { getPrice, prices, err };
  },

  created() {
    this.getPrice();
  },
};
</script>
