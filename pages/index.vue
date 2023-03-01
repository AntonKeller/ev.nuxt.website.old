<template>
  <div
    class="overflow-y-scroll h-screen background px-2.5 pb-8 md:pt-24 lg:pt-20 flex justify-center items-start">

    <div class="h-screen pt-20 text-gray-200 flex flex-row flex-wrap justify-center items-center w-11/12 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">


      <div class="h-56 w-full bg-red-800 text-gray-300">

      </div>


      <div
        v-for="el of mainContent"
        :style="{animationDuration: 0.5 + el.id / 5 + 's'}"
        class="w-12/12 content rounded-md border sm:border-0 border-gray-700 mt-4 p-4 backdrop-blur-sm backdrop-brightness-75 sm:backdrop-brightness-100">
        <h1
          class="font-bold text-lg sm:text-xl md:text-2xl text-center md:text-left">
          {{ el.title }}
        </h1>
        <div class="flex flex-col-reverse md:flex-row justify-center items-center mt-2">
          <p class="text-center md:text-left text-base lg:text-xl transition-all ease-in">{{ el.description }}</p>
          <img
              class="w-20 h-20 md:w-24 md:h-24 object-fill object-cover mt-2 md:mt-0"
            :src="require(`../assets/images/${el.sticker}.png`)"
            alt="no image">
        </div>
        <div class="hidden sm:block border-b border-b-gray-700 mt-2"></div>
      </div>

    </div>

  </div>
</template>

<script>

import {mainContent} from "@/configs/mainPage"

export default {
  name: 'IndexPage',
  data() {
    return {
      mainContent: mainContent,
    }
  }
}

</script>

<style>

.background {
  background: url("@/assets/background/b-3.png"), url("@/assets/background/background-humans.png") transparent no-repeat center / cover;
}

.content {
  animation: content-animate ease;
}

@keyframes content-animate {
  from {
    opacity: 0;
    /*scale: 0;*/
    transform: translateX(100vw);
  }
}

</style>
