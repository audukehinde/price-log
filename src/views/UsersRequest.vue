<template>
    <div class="flex gap-4">
        <sideBar />
        <div>
            <h1 class=" text-black  text-4xl font-bold">Hello, world!!!</h1>
        </div>
    </div>
       
    
</template>

<script>
import sideBar  from '../components/sideBar.vue'

export default {
    components: { sideBar },
    setup() {
        
    },
}
</script>
