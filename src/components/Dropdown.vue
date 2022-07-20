<template>
  <div class="menu-item flex items-center" @click="isOpen = !isOpen" :class="`${isOpen ? 'isExpanded' : '' }`">
    <!-- <a href="#">{{ title }}</a> -->
    <p class="cursor-pointer">{{ title }}</p>
    <svg viewBox="0 0 1030 638" width="10px" class=" cursor-pointer">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu text-black" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link">{{ item.title}}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style>
  .menu-item {
    background: #fff;
    padding: 5px 10px;
  }

  .sub-menu {
    position: absolute;
    top: 18%; 
    left: 8%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>