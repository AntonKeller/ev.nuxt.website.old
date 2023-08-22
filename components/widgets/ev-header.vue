<template>
  <!--fixed top-0-->
  <header class="flex flex-col items-stretch z-50">

    <div
      class="bg-[#222126] z-20 w-full flex items-center justify-between sm:justify-between md:justify-between border-b border-b-gray-700 p-2 sm:p-4 md:pl-11 md:pr-11 z-10 backdrop-blur-sm transition-all text-black md:text-red-50">

      <NuxtLink class="move sm:mr-auto ml-1 sm:ml-5 flex justify-center items-center" to="/">
        <img @click="activePage=0" class="select-none w-12 h-10 sm:w-20 sm:h-11 md:w-24 md:h-12"
             src="@/assets/images/logotype-2.png" alt="">
        <h2 class="ml-3 font-extrabold text-xl text-gray-50">
          Эверест Консалтинг <!--Everest consulting-->
        </h2>
      </NuxtLink>

      <nav class="hidden sm:flex sm:items-center sm:justify-center md:pr-3 md:mr-3 mr-3">
        <ul class="flex text-gray-50">
          <li
            @click="activePage=link.id"
            class="hover:text-gray-400 ml-6 md:ml-3 lg:ml-14 flex items-center transition-all ease-out cursor-pointer"
            v-for="link of navLinks">
            <div :class="{'-rotate-90': activePage === link.id}"
                 class="hidden md:block text-center w-4 h-4 transition-all duration-150 ease-in-out"><
            </div>
            <NuxtLink class="md:ml-4" :to="link.url">
              <h5 class="sm:text-base md:text-lg lg:text-xl font-extrabold">{{ link.title }}</h5>
              <p class="hidden md:block sm:text-xs md:text-sm lg:text-base ">{{ link.description }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="text-gray-300 sm:hidden text-sm">
        <img class="inline w-4 h-4 mr-1.5" src="../../assets/icons/phone-icon.png" alt="no img">
        <span class="font-extrabold">+7 (951) 696-21-21</span>
      </div>

      <div @click="menuIsOpen=!menuIsOpen" class="block sm:hidden flex items-center">
        <svg class=" cursor-pointer w-10 h-10 sm:ml-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </div>

    </div>

    <div v-if="menuIsOpen" class="a-menu sm:hidden bg-transparent pt-4 border-b border-b-gray-700">
      <ul class="flex flex-col text-gray-300">
        <li
          @click="openPage(link.id)"
          class="cursor-pointer p-2 pl-4"
          v-for="link of navLinks">
          <NuxtLink :to="link.url">
            <h5 class="text-base font-extrabold">{{ link.title }}</h5>
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
  .a-menu {
    animation: drop-menu ease 0.4s
  }

  @keyframes drop-menu {
    from {
      transform: translateX(-100vw);
      opacity: 0;
    }
  }
</style>


