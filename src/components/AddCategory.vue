<template>
  <div class="flex justify-center items-center md:w-[80vw]">
    <form action="" @submit="handleSubmit">
      <div class="flex flex-col px-10 input-control">
        <label>Category Name</label>
        <input
          type="text"
          class="md:w-[425px] lg:h-[35px] h-8 px-3 rounded-[5px] focus:outline-none"
          v-model="categoryName"
        />
        <div class="error"></div>
      </div>
      <div class="px-10">
        <!-- More Content  -->
        <div>
          <div
            class="flex gap-6 mt-5 items-center"
            v-for="(row, index) in rows"
            :key="index"
          >
            <div class="flex flex-col">
              <label>Label:</label>
              <input
                type="text"
                class="md:w-[70%] lg:w-[200px] lg:h-[35px] h-8 px-3 rounded-[5px] focus:outline-none" v-model="row.name"
              />
            </div>

            <div class="flex flex-col">
              <label>Unit:</label>
              <input
                type="text"
                class="md:w-[70%] lg:w-[200px] lg:h-[35px] h-8 px-3 rounded-[5px] focus:outline-none" v-model="row.unit"
              />
            </div>

            <div class="flex justify-center items-center mt-8 my-2 py-2">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                  fill="rgba(255,5,5,1)"
                  class="cursor-pointer"
                  @click="deleteRow(index)"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- Add More -->
      <div class="">
        <div class="flex items-center mt-4 bg-transparent text-black text-md font-bold w-28 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept" @click="addMore()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              class="cursor-pointer"
            />
          </svg>

          <button>
            Add More
          </button>
        </div>
        <div>
          <button
            class="bg-primary-color text-white text-sm font-bold w-28 mt-7 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept"
          >
            Save
          </button>
        </div>
      </div>
      </div>  
    </form>
  </div>
 
</template>

<script>
  import axios from "axios";
  import {ref} from 'vue'
  export default {
    name: "AddCategory",

  setup() {
    const rows = ref([{label: '', unit: ''}]);

    const label = ref('');
    const unit = ref('');

    const addMore = () => {
      rows.value = [...rows.value, {name: "", unit: ""}]
    }

    const deleteRow = (index) => {
      rows.value.splice(index, 1);
    }
    return { rows, label, unit, addMore, deleteRow }
  },

  data() {
    return {
      isAddMoreCLicked: false,
      newRow: [],
      categoryName: "",
      errors: "",
      rowIdCount: 1,
      unitValue: '',
      labelUnit: ''
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("categories", {
          categoryName: this.categoryName,
        });
        
        console.log(response);
        this.errors = response.data.message;
      } catch (error) {
        this.errors =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data;
      }
    },

    removeItem(index) {
     this.newRow.splice(index, 1);
    },
  },

};
</script>

<style scoped>
  .input-control.success input {
    border-color: #09c372
  }

  .input-control.error input{
    border-color: #ff3860
  }

  .input-control .error {
    border-color: #ff3860;
    font-size: 9px;
    height: 13px
  }
</style>
