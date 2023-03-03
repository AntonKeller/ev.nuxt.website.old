<template>
  <div class="bg">

    <div class="h-screen w-full flex flex-col justify-start">

      <div
        class="overflow-x-scroll font-bold flex flex-row items-start text-gray-300 text-lg uppercase md:pt-24">
        <div
          v-for="tab of tabs"
          :key="tab.id"
          @click.left="activeTab = tab.id"
          :class="{'backdrop-brightness-75': activeTab === tab.id}"
          class="text-center border border-gray-600 text-base md:text-lg tab-transition duration-300 hover:backdrop-brightness-75 cursor-pointer border-b border-b-gray-600 p-6 w-full">
          {{ tab.value }}
        </div>
      </div>


      <div class="flex overflow-x-scroll border-b border-b-gray-600">

        <img
          class="whitespace-nowrap break hover:opacity-50 img-animate p-4 object-contain w-48 h-48"
          v-for="logotype of getTabLogotypes()"
          :key="logotype.id"
          :style="{animationDuration: 0.7 + logotype.id / 10 + 's'}"
          :src="require(`./../../assets/experience_logotypes/${logotype.img}.png`)"
          alt="no image">

      </div>

    </div>
  </div>

</template>

<script>

import {tabs} from "@/configs/experience"

export default {

  name: "experience",

  data() {
    return {
      tabs,
      activeTab: 1,
    }
  },

  methods: {
    getTabLogotypes() {
      let tab = this.tabs.filter(el => el.id === this.activeTab);
      return tab[0].logotypes;
    }
  },
}
</script>

<style scoped>

.tab-transition {
  animation: show-tab ease;
}

@keyframes show-tab {
  from {
    opacity: 0;
    transform: translateY(-100vh);
  }
}

.bg {
  background: url("assets/background/f-10.png") transparent no-repeat center / cover;
}

.img-animate {
  animation: show ease;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translateX(100vw);
  }
}
</style>
