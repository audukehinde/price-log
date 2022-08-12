<template>
 <div
    class="w-[90vw] overflow-x-auto relative md:w-[80vw] md:flex justify-center"
  >
    <table class="w-[90%] text-center">
      <thead>
        <tr >
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
          v-for="user in users" :key="user.idusers"
          class="border-b-8 border-white"
        >
          <td class="px-6 py-4 text-sm font-bold">
            {{ user.name }}
          </td>
          <td class="text-sm font-bold">
            {{ user.email }}
          </td>
          <td class="text-sm font-bold px-6">
             <div class="flex items-center justify-center gap-3">
                <button class="bg-primary-color text-white text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">Accept</button>
                <button class="myborder text-black text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg mybold">Decline</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 
</template>


<script>
import { sideBar } from './sideBar.vue'

export default {
    components: { sideBar },
    setup() {
        
    },
}
</script>
