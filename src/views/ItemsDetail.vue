<template>
    <div class="flex flex-col-reverse lg:flex-row lg:w-screen lg:h-screen">
        <button type="submit" class="flex justify-center items-center bottom-0 lg:hidden lg:rounded-lg rounded text-sm font-semibold text-white w-32 h-8 bg-primary-color">Done</button>
        <div class="bg-sidebar lg:w-1/2 p-6">        
             <img src="../img/PriceLog.png" alt="" class="my-6 ml-5">
             <div class="flex flex-col lg:hidden">
                <div class="flex justify-center">
                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-32 h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col">
                            <img src="../img/img-logo.png" alt="" class="w-16 h-16">
                            <p class="text-xs text-gray-500 dark:text-gray-400"><span class=" font-medium">Drag and drop image, or </span><span class="text-btn-yellow font-semibold">Browse</span></p>
                        </div>
                        <input id="dropzone-file" type="file" class="" /> 
                    </label>
                </div>
            </div>
             <div class="flex flex-col m-2">
                <label>Title</label>
                <input type="text" class="lg:w-3/4 lg:h-12 h-8 px-3 rounded lg:rounded-lg border-2 border-primary-color" />
             </div>
             <div class="flex flex-col m-2">
                <label>Price</label>
                <input type="text" class="lg:w-3/4 lg:h-12 h-8 px-3 rounded lg:rounded-lg border-2 border-primary-color" />
             </div>
             <div class="flex flex-col m-2">
                <label>Category</label>
                <select id="quantity_disabled" class="bg-white px-4 lg:w-3/4 lg:h-12 h-8 rounded lg:rounded-lg border-2 border-primary-color">
                    <option selected></option>
                    <option value="consumables">Consumables</option>
                    <option value="electronics">Electronics</option>
                    <option value="tools">Tools</option>
                    <option value="batteries">Batteries</option>
                    <option value="laptops">Laptops</option>
                    <option value="clothes">Clothes</option>
                </select>
             </div>
             <div class="flex flex-col m-2">
                <label>Description</label>
                <input type="message" class="lg:w-3/4 lg:h-36 px-3 h-16 rounded lg:rounded-lg border-2 border-primary-color" />
             </div>
             <div class="flex flex-col m-2">
                <label>Vendor Details</label>
                <input type="text" class="lg:w-3/4 lg:h-12 px-3 h-8 rounded lg:rounded-lg border-2 border-primary-color" />
             </div>
             <div class="flex flex-col m-2">
                <label>Quantity</label>
                <select id="quantity_disabled" class="bg-white px-4 lg:w-3/4 lg:h-12 h-8 rounded lg:rounded-lg border-2 border-primary-color">
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
                <input type="text" class="lg:w-3/4 lg:h-12 px-3 lg:rounded-lg h-8 rounded border-2 border-primary-color" />
             </div>
        </div>
         <div class="w-1/2 p-10 lg:flex flex-col bg-white hidden">
             <div class="flex justify-center w-11/12 relative h-96">
                <label for="dropzone-file" class="flex flex-col justify-center items-center w-[32rem] h-[40rem] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                        <!-- <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> -->
                        <img src="../img/img-logo.png" alt="">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Drag and drop image, or </span><span class="text-btn-yellow font-bold">Browse</span></p>
                        <p class="text-xs text-gray-500 dark:text-gray-400"></p>
                    </div>
                    <input id="dropzone-file" type="file" class="" /> 
                </label>
            </div>
            <button type="submit" class="rounded-lg text-lg font-bold text-white absolute w-36 h-12 bottom-20 right-52 bg-primary-color">Done</button>
         </div>
    </div>
</template>