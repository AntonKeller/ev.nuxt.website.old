<template>
  <div
    class="pb-2 h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)] md:h-screen flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start md:pl-6 lg:pl-8 xl:pl-10 background overflow-y-scroll">

    <div class="hidden w-4/12 md:flex flex-col justify-center items-start border-r border-r-gray-600 md:pt-32">
      <ul class="w-full flex flex-col justify-center items-start">
        <li
          class="hover:text-red-700 cursor-pointer show-left font-bold text-lg lg:text-xl mb-4 text-red-50 text-center w-full transition-colors duration-150"
          v-for="tab of serviceTabs"
          @click="activeTab=tab.id"
          :class="{'uppercase mt-4':tab.sub, 'md:pl-10':!tab.sub}">
          {{ tab.title }}
          <div v-if="tab.id === 8" class="w-full gray-line"></div>
        </li>
      </ul>
    </div>



    <div
      class="md:hidden w-full flex flex-col justify-start text-red-50 text-lg text-center p-4 sm:px-10">
      <div
        @click="dropMenuIsOpen=!dropMenuIsOpen"
        class="border border-gray-600 w-full rounded-lg flex flex-row justify-between p-2 px-4">
        <div>Услуги</div>
        <div :class="{'-rotate-90': dropMenuIsOpen}" class="duration-150"><</div>
      </div>
      <div
        v-if="dropMenuIsOpen"
        class="rounded-lg border-t border-t-gray-900 border-x border-b border-l-gray-600 border-b-gray-600 border-r-gray-600 px-4">
        <ul class="w-full flex flex-col justify-center items-start">
          <li
            v-for="tab of serviceTabs"
            @click="serviceSelect(tab.id)"
            :class="{'uppercase mt-4':tab.sub, 'pl-10':!tab.sub}"
            class="cursor-pointer show-left font-bold text-base mb-4 text-red-50 text-center w-full transition-colors">
            {{ tab.title }}
            <div v-if="tab.id === 8" class="w-full border-b border-b-gray-600"></div>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-for="currentTab of serviceTabContent"
      v-if="activeTab===currentTab.id"
      class="w-full md:w-8/12 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-28 md:pt-32 flex flex-col justify-start items-start text-red-50">

      <div v-for="content of currentTab.content" class="flex flex-col justify-start items-start md:max-w-full">

        <h4 v-if="content.title.length" class="show-left font-bold text-2xl mb-4">
          {{ content.title }}
        </h4>

        <div v-if="content.underline" class="w-full gray-line"></div>

        <p v-if="content.textContent.length" v-for="text of content.textContent" class="text-lg mb-6">{{ text }}</p>

        <ul v-if="content.enums.length" class="text-red-50 mt-4">
          <li v-for="enumValue of content.enums" class="text-lg">
            <span class="inline-block  w-4 h-2 rounded-sm red-line-heavy"></span>
            {{ enumValue }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

import {serviceTabContent, serviceTabs} from "@/configs/servicesConfig"
import evFooter from "@/components/widgets/ev-footer"

export default {
  name: "services",

  head() {
    return {
      title: "Наши услуги",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Оценка нематериальных активов, бизнеса, материальных активов (недвижимое имущество, машины и оборудование, транспортные средства и пр.)",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://antonkeller.github.io/ev_nuxtjs_website_page-1/services",
        },
      ],
    }
  },

  components: {
    evFooter: evFooter,
  },

  methods: {
    serviceSelect(id) {
      this.activeTab = id;
      this.dropMenuIsOpen = false;
    }
  },

  data() {
    return {
      dropMenuIsOpen: false,
      hoverTab: 0,
      activeTab: 2,
      serviceTabContent,
      serviceTabs
    }
  },
}


</script>

<style scoped>

/**::-webkit-scrollbar {*/
/*  width: 0;*/
/*}*/

.background {
  background: url("@/assets/background/background-red-circles.png") transparent no-repeat center / cover;
}

.red-line, .gray-line {
  min-height: 2px;
}

.red-line-heavy {
  background: linear-gradient(to right, rgba(99, 75, 91, 0.5), rgb(129, 99, 125), rgba(99, 75, 87, 0.5));
}

.gray-line {
  background: linear-gradient(to right, rgba(75, 85, 99, 0.1), rgba(75, 85, 99, 0.35), rgb(99, 112, 129), rgba(75, 85, 99, 0.35), rgba(75, 85, 99, 0.1));
}

.red-line {
  background: linear-gradient(to right, rgba(99, 75, 92, 0.1), rgba(99, 75, 91, 0.35), rgb(129, 99, 125), rgba(99, 75, 87, 0.93), rgba(75, 85, 99, 0.1));
}

h1, h2, h3, h4, h5, li, p {
  animation: showFast ease 0.7s;
  text-align: left;
}

@keyframes showFast {
  from {
    opacity: 0;
    transform: translateX(25px);
  }
}

</style>
