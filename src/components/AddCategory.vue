<template>
  <div class="flex justify-center items-center mt-20">
    <form action="">
                  <div class="flex flex-col">
                      <label>Category Name</label>
                      <input type="text" class=" md:w-[100%] lg:w-[509px] lg:h-[35px] h-8 px-3 rounded-[5px]  focus:outline-none" />
                    </div>
                  
                  <div class="flex gap-6 mt-10 items-center">
                  
                    <div class="flex flex-col">
                      <label>Label:</label>
                      <input type="text" class=" md:w-[70%] lg:w-[300px] lg:h-[35px] h-8 px-3 rounded-[5px]  focus:outline-none" />
                    </div>
                  
                  
                    <div class="flex flex-col">
                      <label>Unit:</label>
                      <input type="text" class=" md:w-[70%] lg:w-[300px] lg:h-[35px] h-8 px-3 rounded-[5px]  focus:outline-none" />
                    </div>

                    <button class="bg-[#F86D62] text-white text-sm font-bold w-28 mt-7 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">Remove</button>
                  </div>

                  <div class="flex gap-6 mt-12 items-center">
                  
                    <div class="flex flex-col">
                      <label>Label:</label>
                      <input type="text" class=" md:w-[70%] lg:w-[300px] lg:h-[35px] h-8 px-3 rounded-[5px]  focus:outline-none" />
                    </div>
                  
                  
                    <div class="flex flex-col">
                        <label>Unit:</label>
                        <input type="text" class=" md:w-[70%] lg:w-[300px] lg:h-[35px] h-8 px-3 rounded-[5px]  focus:outline-none" />
                    </div>

                    <button class=" bg-primary-color text-white text-sm font-bold w-28 mt-7 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">Save</button>
                  </div>

                  <div>
                      <button class=" bg-primary-color text-white text-sm font-bold w-28 mt-7 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">Submit</button>
                  </div>
            
    </form>
  </div>
  <div></div>
</template>
<script>
  export default {
    name: "AddCategory",
  };
</script>
