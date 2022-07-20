<template>
    <div class="flex flex-col-reverse lg:flex-row lg:w-screen lg:h-screen">
        <button type="submit" class="flex justify-center items-center bottom-0 lg:hidden lg:rounded-lg rounded text-sm font-semibold text-white w-32 h-8 bg-primary-color">Done</button>
        <div class="bg-sidebar h-[100vh] lg:w-1/2">        
             <img src="../img/PriceLog.png" alt="" class="mt-4 mb-8 ml-5 w-32">
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
            <div class="ml-6">
             <div class="flex flex-col m-2">
                <label>Title</label>
                <input type="text" class="lg:w-[400px] lg:h-[35px] h-8 px-3 rounded lg:rounded-lg border-2 border-primary-color bg-transparent" />
             </div>
             <div class="flex flex-col m-2">
                <label>Price</label>
                <input type="text" class="lg:w-[400px] lg:h-[35px] h-8 px-3 rounded lg:rounded-lg border-2 border-primary-color bg-transparent" />
             </div>
             <div class="flex flex-col m-2">
                <label>Category</label>
                <select id="quantity_disabled" class="px-4 lg:w-[400px] lg:h-[35px] h-8 rounded lg:rounded-lg border-2 border-primary-color bg-transparent">
                    <option selected></option>
                    <option value="consumables">Consumables</option>
                    <option value="electronics">Electronics</option>
                    <option value="tools">Tools</option>
                    <option value="batteries">Batteries</option>
                    <option value="laptops">Laptops</option>
                    <option value="clothes">Clothes</option>
                </select>
             </div>
             <div class="flex flex-col m-2 bg-transparent">
                <label>Description</label>
                <input type="message" class="lg:w-[400px] lg:h-24 px-3 h-16 rounded lg:rounded-lg border-2 border-primary-color bg-transparent" />
             </div>
             <div class="flex flex-col m-2">
                <label>Vendor Details</label>
                <input type="text" class="lg:w-[400px] lg:h-[35px] px-3 h-8 rounded lg:rounded-lg border-2 border-primary-color bg-transparent" />
             </div>
             <div class="flex flex-col m-2">
                <label class="bg-transparent">Quantity</label>
                <select id="quantity_disabled" class="px-4 lg:w-[400px] lg:h-[35px] h-8 rounded lg:rounded-lg border-2 border-primary-color bg-transparent">
                    <option selected></option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                </select>
                </div>
            
             <div class="flex flex-col m-2">
                <label>Promo/Discount Price</label>
                <input type="text" class="lg:w-[400px] lg:h-[35px] px-3 lg:rounded-lg h-8 rounded border-2 border-primary-color bg-transparent" />
             </div>
             </div>
        </div>
         <div class="w-1/2 p-10 lg:flex md:justify-center md:items-center flex-col hidden">
             <div class="">
                <label for="dropzone-file" class="flex flex-col justify-center items-center h-[60vh] w-[30vw] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                        <img src="../img/img-logo.png" alt="">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Drag and drop image, or </span><span class="text-btn-yellow font-bold">Browse</span></p>
<<<<<<< HEAD:src/views/ItemsDetail.vue
                        <p class="text-xs text-gray-500 dark:text-gray-400"></p>
=======
>>>>>>> 35fc01d6bb0d18144b4386a979bc44e05369d8ae:src/views/UploadItem.vue
                    </div>
                    <!-- <input id="dropzone-file" type="file" class="bg-transparent border-none text-center p-10" />  -->
                </label>
            </div>
            <button type="submit" class="rounded-[3px] text-sm font-bold text-white px-8 py-2 bg-primary-color mt-6">Upload</button>
         </div>
    </div>
</template>