<template>
  <header
    class="w-full flex flex-col items-stretch bg-gray-50 sm:bg-gray-800 px-2 py-2.5 sm:px-4 md:px-16 lg:px-32">
    <div
      class="border-b border-b-gray-200 sm:border-b-gray-800 z-20 w-full flex items-center justify-center sm:justify-between transition-all md:text-red-50">

      <NuxtLink class="ml-auto sm:ml-0 sm:mr-auto flex justify-center items-center" to="/">
        <img @click="activePage=0" class="hidden sm:block select-none w-12 h-10 sm:w-20 sm:h-11 md:w-24 md:h-12"
             src="@/assets/images/logotype-2.png" alt="img err">
        <h2 class="md:ml-6 font-extrabold text-xl text-gray-800 sm:text-gray-50">
          Everest consulting
        </h2>
      </NuxtLink>

      <nav class="hidden sm:flex sm:items-center sm:justify-center md:pr-3 md:mr-3 mr-3">
        <ul class="flex text-gray-50">
          <li
            @click="activePage=link.id"
            class="hover:text-gray-400 ml-6 md:ml-8 lg:ml-12 flex items-center transition-all ease-out cursor-pointer"
            v-for="link of navLinks">
            <NuxtLink :to="link.url">
              <h5
                :class="{'text-red-600': activePage === link.id}"
                class="sm:text-xs md:text-sm lg:text-base font-bold">{{ link.title }}</h5>
              <!--              <p class="hidden md:block sm:text-xs md:text-sm lg:text-base ">{{ link.description }}</p>-->
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!--      <div class="text-gray-300 sm:hidden text-sm">-->
      <!--        <img class="inline w-4 h-4 mr-1.5" src="../../assets/icons/phone-icon.png" alt="no img">-->
      <!--        <span class="font-extrabold">+7 (951) 696-21-21</span>-->
      <!--      </div>-->

      <div @click="menuIsOpen=!menuIsOpen" class="ml-auto block sm:hidden flex items-center">
        <svg class=" cursor-pointer w-10 h-10 sm:ml-4 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </div>

    </div>
    <!--    border-b border-b-gray-700-->
    <div
      v-if="menuIsOpen"
      class="sm:hidden bg-transparent pt-4">
      <ul class="flex flex-col text-gray-800">
        <li
          @click="openPage(link.id)"
          class="cursor-pointer p-2 pl-4"
          v-for="link of navLinks">
          <NuxtLink :to="link.url">
            <h5 class="text-sm font-extrabold">{{ link.title }}</h5>
          </NuxtLink>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
import {navLinks} from '@/configs/headerConfig';

export default {
  name: "ev-header",

  props: {
    textColor: String
  },

  methods: {
    openPage(id) {
      this.activePage = id;
      this.menuIsOpen = false;
    }
  },

  data() {
    return {
      navLinks,
      activePage: 0,
      menuIsOpen: false
    }
  },

}
</script>

<style>

.menu-not-visible {
  animation: anim-menu-hide ease 1s
}

.menu-visible {
  animation: anim-menu ease 1.2s
}

@keyframes anim-menu-hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
}

@keyframes anim-menu-drop {
  from {
    opacity: 0;
  }
  to {
    display: block;
    opacity: 1;
  }
}

</style>


