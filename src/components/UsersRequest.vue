<template>
  
  <div
    class="w-[90vw] overflow-x-auto relative md:w-[80vw] md:flex justify-center"
  >
    <table class="w-[90%] text-center">
      <thead>
        <tr >
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            NAME
          </th>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            EMAIL
          </th>
          <th scope="col" class="text-[16px] font-bold text-gray-900 px-6 py-4">
            ACTIONS
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
                <button class="bg-primary-color text-white text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept" @click="verifyUser(user.idusers)">Accept</button>
                <button class="myborder text-black text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg mybold">Decline</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
// api/'
<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { sideBar } from "../components/sideBar.vue";

export default {
  components: { sideBar },
  setup() {
    const users = ref([]);
    const err = ref(null);
    const message = ref('');

    const router = useRouter();

    const getUnverifiedUsers = async () => {
      try {
        const res = await axios.get("users?newUsers=true");
        users.value = res.data.users;
        console.log(res.data.users);
      } catch (error) {
        err.value = error.res.data;
      }
    };

     const verifyUser = async (id) => {
      alert(' Are You Sure? ')
      try {
        const res = await axios.put(`users/verify/${id}`);
        message.value = res.data;
        console.log(res.data);
      } catch (error) {
        err.value = error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data;

      }
      window.location.reload();
    };

    return { getUnverifiedUsers, err, users, verifyUser };
  },
  created() {
    this.getUnverifiedUsers();
  },
  
};
</script>

<style>
.myborder {
  border: 1px solid #016a9a;
}

.accept:hover {
  border: 1px solid #016a9a;
}

.mybold:hover {
  background-color: #016a9a;
  color: #fff;
}
</style>
