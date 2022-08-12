<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal w-[350px] bg-[#D9E9F0]" >
     <div class="actions">
       <slot></slot>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Addprice',
    methods: {
      closeModal() {
        this.$emit('close')
      }
    }
  }
</script>

<style>
  .modal {
    /* width: 350px; */
    padding: 0 5px;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
  }

  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }


  .modal .actions {
    /* text-align: center; */
    margin: 30px 0 0px 0;
  }
</style>