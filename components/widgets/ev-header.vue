<template>

  <header
    class="overflow-hidden fixed top-0 left-0 right-0 z-20 sm:static border-4 sm:border-0 border-gray-600 flex flex-col items-stretch bg-gray-50 sm:bg-gray-800 rounded-3xl mt-3 sm:m-0 mx-3 py-2.5 px-4 sm:px-8 md:px-4 lg:px-4 xl:px-12">
    <div
      class=" z-20 w-full flex items-center justify-center sm:justify-between transition-all md:text-red-50">

      <NuxtLink class="sm:ml-0 sm:mr-auto flex justify-center items-center" to="/">
        <img @click="activePage=0" class="hidden sm:block select-none w-10 h-10 sm:w-16 sm:h-8 md:w-20 md:h-10"
             src="@/assets/images/logotype-2.png" alt="img err">
        <h2 class="sm:ml-3 md:ml-6 font-extrabold text-base lg:text-xl text-gray-800 sm:text-gray-50">
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
              <!--<p class="hidden md:block sm:text-xs md:text-sm lg:text-base ">{{ link.description }}</p>-->
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!--      <div class="text-gray-300 sm:hidden text-sm">-->
      <!--        <img class="inline w-4 h-4 mr-1.5" src="../../assets/icons/phone-icon.png" alt="no img">-->
      <!--        <span class="font-extrabold">+7 (951) 696-21-21</span>-->
      <!--      </div>-->

      <div @click="menuIsOpen=!menuIsOpen" class="ml-auto block sm:hidden flex items-center">
        <svg class=" cursor-pointer w-10 h-10 sm:ml-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </div>

    </div>

    <!--    border-b border-b-gray-700-->

    <div v-if="menuIsOpen" class="sm:hidden bg-transparent mt-1.5 pt-1 border-t border-t-gray-200">
      <ul class="flex flex-col text-gray-800">
        <li
          @click="openPage(link.id)"
          class="cursor-pointer py-1.5"
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


