<template>
        
    <div class=" flex justify-center items-center gap-2 flex-col w-[80vw]">
        <div class="flex px-8 items-center justify-center bg-sidebar w-[50vw]">
            <div class="w-full flex items-center text-[16px] h-5 drop-shadow-lg ">Wande has requested for authorisation</div>
            <div class="flex items-center gap-3">
                <button class="bg-primary-color text-white text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">Accept</button>
                <button class="myborder text-black text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg mybold">Decline</button>
            </div>
        </div>

        <div class="flex px-8 items-center justify-center bg-sidebar w-[50vw]">
            <div class="w-full flex items-center text-[16px] h-5 drop-shadow-lg ">Kenny has requested for authorisation</div>
            <div class="flex items-center gap-3">
                <button class="bg-primary-color text-white text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">Accept</button>
                <button class="myborder text-black text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg mybold">Decline</button>
            </div>
        </div>

          <div class="flex px-8 items-center justify-center bg-sidebar w-[50vw]">
            <div class="w-full flex items-center text-[16px] h-5 drop-shadow-lg ">Samuel has requested for authorisation</div>
            <div class="flex items-center gap-3">
                <button class="bg-primary-color text-white text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg  hover:bg-transparent hover:text-black accept">Accept</button>
                <button class="myborder text-black text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg mybold">Decline</button>
            </div>
        </div>

          <div class="flex px-8 items-center justify-center bg-sidebar w-[50vw]">
            <div class="w-full flex items-center text-[16px] h-5 drop-shadow-lg ">Pelumi has requested for authorisation</div>
            <div class="flex items-center gap-3">
                <button class="bg-primary-color text-white text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg hover:bg-transparent hover:text-black accept">Accept</button>
                <button class="myborder text-black text-sm font-bold w-20 my-2 py-2 drop-shadow-lg rounded-lg mybold">Decline</button>
            </div>
        </div>
        
    </div>

</template>

<script>
import { sideBar } from '../components/sideBar.vue'

export default {
    components: { sideBar },
    setup() {
        
    },
}
</script>

<style>
    .myborder {
        border: 1px solid #016A9A;
    }

    .accept:hover {
        border: 1px solid #016A9A;
    }

    .mybold:hover {
        background-color: #016A9A;
        color: #fff;
    }
</style>
