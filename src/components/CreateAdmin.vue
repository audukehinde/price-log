<template>
    <div class=" flex justify-center items-center w-full h-70 py-16">
        <div class="bg-primary-color flex justify-center items-center p-7 w-[40vw]">
            <form class="flex flex-col justify-center " action="">
                <input
                 class="h-16 w-[36vw] p-5 my-5 rounded-xl"
                type="text"
                placeholder="name"
                >
                <input
                 class="h-16 w-[36vw] p-5 my-5 rounded-xl"
                type="text"
                placeholder="username"
                >
                <input
                 class="h-16 p-5 w-[36vw] my-5 rounded-xl"
                type="text"
                placeholder="password"
                >
                <button class="h-16 bg-orange flex justify-center items-center text-white font-bold text-2xl text-center p-5 w-[36vw] my-5 rounded-xl">Create</button>
            </form>

        </div>
        

    </div>
    <!-- <div class=" w-screen flex justify-center items-center">
        <div class="flex justify-center m-2 px-8 items-center bg-primary-color">
        <div class="w- font-medium flex items-center text-2xl h-64 drop-shadow-lg ">Wande has requ</div>
        <form action="">
            <input 
            type="text"
            placeholder="Name"
            >
        
        </form>
        <button class="bg-btn-yellow text-white w-60 text-2xl p-2 h-16 font-bold drop-shadow-lg rounded-lg">Add Request</button>
    </div>
    </div> -->
</template>


<script>
import { sideBar } from '../components/sideBar.vue'

export default {
    components: { sideBar },
    setup() {
        
    },
}
</script>
