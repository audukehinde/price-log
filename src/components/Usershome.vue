<template>
    <div class="bg-primary-color h-14 flex justify-center">
      <div class="flex items-center justify-between w-[90vw] ">

        <!-- <img src="" alt="" class="pb-14 w-40"/> -->
        <img src="@/assets/logo1.png" alt="" class=" w-32">
        
        <div>
          <ul class="flex text-sm gap-4 text-white">
            <li class="border-[1px] border-white p-[6px] flex items-center gap-2">ELECTRONICS
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(255,255,255,1)"/></svg>
            </li>
            <li class="border-[1px] border-white p-[6px] flex items-center gap-2">MACHINES
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(255,255,255,1)"/></svg>
            </li>
            <li class="border-[1px] border-white p-[6px] flex items-center gap-2">WORK TOOLS
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(255,255,255,1)"/></svg>
            </li>
            <li class="border-[1px] border-white p-[6px] flex items-center gap-2">HAND TOOLS
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(255,255,255,1)"/></svg>
            </li>
          </ul>
        </div>

        <div class="flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 18.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" fill="rgba(255,255,255,1)"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" fill="rgba(255,255,255,1)"/></svg>
        </div>
      </div>
  </div>
  <div class="flex">
    <sideBar />
    <!-- <div class="flex-1 p-5"><router-view /></div> -->
    <!-- <div class=""><item/></div> -->
  
    
  </div>
</template>

<script>
export default {
  name: 'Userhome'

}
</script>

<style>

</style>