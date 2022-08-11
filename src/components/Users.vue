<template>
  <div
    class="w-[90vw] overflow-x-auto relative md:w-[80vw] md:flex justify-center"
  >
    <table class="w-[90%] text-left">
      <thead class="text-center">
        <tr>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            NAME
          </th>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            ROLE
          </th>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            AUTHORISATION
          </th>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr
          v-for="user in users"
          :key="user.idusers"
          class="border-b-8 border-white"
        >
          <td class="px-6 py-4 text-sm font-bold">
            {{ user.name }}
          </td>
          <td class="text-sm font-bold">
            {{ user.isAdmin ? "Admin" : "User" }}
          </td>
          <td class="text-sm font-bold px-6">
            
            <div :class="user.isVerified ? 'text-blue-400' : 'text-red-400'">
              {{ user.isVerified ? "Granted" : "Pending" }}
            </div>
           
          </td>

          <td>
            <div class="flex cursor-pointer">
             <img src="@/assets/Vector.svg" alt="" class="p-4 w-12">
              <img src="@/assets/edit.svg" alt="" class="p-4 w-12">
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
export default {
  name: "Users",
  setup() {
    const users = ref([]);
    const err = ref(null);
    const user = ref({});

    const router = useRouter();

    const getUsers = async () => {
      try {
        const res = await axios.get("users");
        users.value = res.data;
        console.log(res.data);
      } catch (error) {
        err.value = error.res.data;
      }
    };

    return { users, err, getUsers, user };
  },
  created() {
    this.getUsers();
  },
};
</script>

<style>
tbody {
  background: rgba(197, 217, 219, 0.19);
}
</style>
