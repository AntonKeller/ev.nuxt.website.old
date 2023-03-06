<template>
  <div>
    <div
      class="h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] md:h-screen overflow-y-scroll back pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-32 lg:pr-32 xl:pl-56 xl:pr-56 w-auto overflow-hidden pt-6 md:pt-28">

      <div class="w-full overflow-x-scroll flex md:flex-wrap md:w-full md:justify-center text-red-50 font-extrabold">
        <div
          class="flex bg-red-800 rounded-md justify-center items-center duration-300 cursor-pointer hover:bg-transparent border-2 border-red-800 rounded-sm px-4 pt-2 pb-2 m-2 first:ml-0 md:text-lg"
          v-for="element of getRatingYears()"
          @click="setActiveYear(element.year)">
          <span class="select-none duration-300" :class="{'-rotate-90': activeYear === element.year}"><</span>
          <h3 class="ml-5">{{ element.year }}</h3>
        </div>
      </div>

      <div class="flex flex-row flex-wrap w-full items-end justify-evenly">
        <div
          class="ratingShowAnimate w-full flex flex-col justify-center items-center m-1 p-2 md:p-4 text-xl md:w-5/12 lg:w-3/12 text-red-50 border-b-4 border-b-red-50"
          v-for="description of getDescriptionOfActiveYear()">
          <div
            class="flex justify-center items-center text-center w-16 h-16 font-extrabold text-lg md:text-xl  lg:text-3xl rounded-full border-8 border-red-700">
            <p>{{ description.value }}</p>
          </div>
          <div class="text-center">{{ description.title }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import evHeader from "@/components/widgets/ev-header.vue"
import {rating} from "@/configs/ratingConfig.ts"

export default {
  name: "rating",

  head() {
    return {
      title: "Достижения / Рейтинг - компании",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "..........",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://antonkeller.github.io/ev_nuxtjs_website_page-1/rating",
        },
      ],
    }
  },

  components: {
    'aboutHeader': evHeader,
  },

  data() {
    return {
      rating,
      activeYear: Number,
    }
  },

  mounted() {
    this.activeYear = 2021;
  },

  methods: {

    getRatingYears() {
      return this.rating.map(el => {
        return {
          id: el.id,
          year: el.year,
        }
      })
    },

    getDescriptionOfActiveYear() {
      let buff = this.rating.filter(el => el.year === this.activeYear);
      if (buff.length === 0) return null;
      return buff[0].description;
    },

    setActiveYear(id) {
      this.activeYear = id;
    }
  },
}
</script>

<style scoped>

.back {
  background: url("@/assets/background/bg-rgb-three-lines-2.png") no-repeat center / cover;
}

.ratingShowAnimate {
  animation: moveRating-1 ease 0.8s;
}

@keyframes moveRating-1 {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
}

@keyframes years-buttons-animate {
  from {
    opacity: 0;
  }
}

</style>
