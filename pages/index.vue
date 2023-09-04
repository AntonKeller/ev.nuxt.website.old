<template>
  <!--  h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)]-->
  <div class="main-container">

    <!--  БЛОК 1  -->
    <div class="content-container-1">

      <!--  ЗАГОЛОВОК С КНОПКОЙ  -->
      <div class="flex flex-col items-center mt-3 lg:flex-row lg:justify-around md:items-startr md:text-left">

        <div
          class="w-full lg:w-5/12 text-center text-gray-800 font-extrabold flex flex-col justify-start mt-8 lg:mt-0"
        >
          <h1 class="txt-shadow text-gray-100 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Эверест Консалтинг
          </h1>
          <div>
            <h2 class="txt-shadow text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 text-gray-100">
              Работаем с 2010 года
            </h2>
            <button
              class="duration-700 text-sm sm:text-lg md:text-xl active:scale-[98%] hover:bg-transparent hover:border-gray-100 hover:text-gray-100 mt-4 sm:mt-6 lg:mt-8 transition-all duration-150 px-6 py-2 border-2 sm:border-4 bg-gray-50 border-gray-800 rounded-xl">
              Связаться с нами
            </button>
          </div>
        </div>

        <!--  https://www.jsdelivr.com/package/npm/vue-carousel-v2  -->
        <carousel
          pagination-padding=6
          paginationColor="rgb(243 244 246)"
          paginationActiveColor="rgb(220 38 38)"
          autoplay autoplay-timeout=5000
          :per-page="1"
          :mouse-drag="false"
          class="text-xl text-gray-100 text-red-600 w-full lg:w-6/12 mt-12 lg:mt-0">
          <slide
            v-for="infoBannerContentCard of infoBannerContentCards"
            :key="infoBannerContentCard.id"
            class="text-center lg:text-left"
          >
            <h3 class="text-xl lg:text-2xl xl:text-3xl">{{ infoBannerContentCard.title }}</h3>
            <p class="text-base lg:text-lg xl:text-xl mt-3">{{ infoBannerContentCard.description }}</p>
          </slide>
        </carousel>

      </div>


      <!--RATING-->
      <div class="flex flex-col gap-3 md:gap-6 lg:gap-8 xl:gap-12 items-center sm:flex-row sm:justify-between mt-5">

        <div
          v-for="ratingCard of ratingCards"
          class="text-center flex flex-col w-12/12 sm:w-3/12 sm:w-5/12"
        >
          <div
            class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl  sm:mt-4 md:mt-5 xl:mt-5  font-extrabold  text-gray-50">
            {{ ratingCard.title }}
          </div>
          <div class="text-base sm:text-lg md:text-xl xl:text-2xl   sm:mt-3  font-bold text-red-400">
            {{ ratingCard.sTitle }}
          </div>
          <div class="text-xs sm:text-sm md:text-sm xl:text-lg   sm:mt-3  font-extralight text-gray-50">
            {{ ratingCard.description }}
          </div>
          <div class="mb-4 px-8 sm:px-10">
            <div class="border-b border-b-gray-300 mt-4"></div>
          </div>
        </div>

      </div>

    </div>


    <!--  БЛОК 2  -->
    <div class="content-container-2">

      <div
        class="flex flex-row flex-wrap justify-center gap-x-2 lg:gap-x-0 gap-y-3 text-center text-sm sm:text-sm md:text-sm xl:text-base">

        Наши специалисты успешно осуществили и завершили проекты для 45 компаний из
        рейтинга «Крупнейшие компании
        России» (рейтинг Эксперт-400), совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.

        Основным деловым преимуществом нашей компании является высокий профессионализм
        сотрудников, а также опыт
        выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими
        международными аудиторскими компаниями.

        Специалисты Компании Everest Consulting являются членами таких
        профессиональных организаций, как
        Саморегулируемая Межрегиональная Ассоциация Оценщиков (СМАО), Восточно-Европейский союз экспертов (OSV), а
        также
        получили квалификации Американского общества оценщиков (ASA).
      </div>

      <div class="flex flex-wrap gap-4 justify-center md:gap-y-6 md:gap-x-2 md:justify-evenly mt-5">
        <div
          v-for="customerCompany of customerCompanyGroup"
          class="hidden sm:block sm:w-[45.333%] md:w-[31.333%] lg:w-[31.333%] xl:w-[22.333%] rounded-2xl bg-gray-800 shadow-2xl shadow-gray-900 px-1.5 md:px-4 py-3.5 md:py-6 hover:bg-gray-900"
        >
          <div class="p-2 md:p-2">
            <img class="object-fill m-0 w-full object-contain border-b border-b-gray-600"
                 :src="require(`./../assets/experience_logotypes/${customerCompany.img}.png`)" alt="err">
          </div>

          <div class="flex flex-wrap justify-center md:mt-3 pb-2 gap-x-1 gap-y-2 text-sm sm:text-xs lg:sm">
            <span class="px-2 py-0.5 rounded-xl border-2 border-gray-700 font-medium bg-red-800">Оценка бизнеса</span>
            <span
              class="px-2 py-0.5 rounded-xl border-2 border-gray-700 font-medium bg-cyan-800">Технический надзор</span>
            <span class="px-2 py-0.5 rounded-xl border-2 border-gray-700 font-medium bg-fuchsia-800">Строительная экспертиза</span>
            <span class="px-2 py-0.5 rounded-xl border-2 border-gray-700 font-medium bg-violet-800">Оценка</span>
            <span
              class="px-2 py-0.5 rounded-xl border-2 border-gray-700 font-medium bg-blue-800">Строительный аудит</span>
          </div>
        </div>
      </div>

      <div class="sm:hidden max-w-full text-center px-6">
        <carousel
          paginationSize=5
          pagination-padding=4
          paginationColor="rgb(243 244 246)"
          paginationActiveColor="rgb(220 38 38)"
          navigationEnabled
          navigationNextLabel="||"
          navigationPrevLabel="||"
          autoplay
          autoplay-timeout=5000
          :per-page="1"
          :mouse-drag="false"
        >
          <slide
            v-for="customerCompany of customerCompanyGroup"
            :key="customerCompany.id"
            class="border-b border-b-gray-800"
          >

            <div>
              <img class="object-fill ml-auto mr-auto object-contain"
                   :src="require(`./../assets/experience_logotypes/${customerCompany.img}.png`)" alt="err">
            </div>

            <div class="flex flex-wrap justify-center pb-2 gap-1 mt-2 text-xs">
                <span
                  class="px-2 py-0.5 rounded-xl font-medium bg-gray-100 text-cyan-800"
                  v-for="currService of customerCompany.services"
                  :key="currService.id"
                >
                  {{ currService.title }}
                </span>
            </div>

          </slide>
        </carousel>
      </div>

    </div>


    <!--  БЛОК 3  -->
    <div class="content-container-3">
      <img class="show-from-left object-cover object-fill w-20 sm:w-24 md:w-36"
           src="../assets/stickers/target-sticker-gray-shadow.png"
           alt="no img">
      <p class="text-lg sm:text-xl md:text-xl lg:text-2xl text-center font-extrabold">
        <span class="uppercase">Наша цель</span> – оказание полного комплекса консультационных услуг в области
        оценки и консалтинга (финансового,
        управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и
        значительным опытом выполнения подобных проектов как в России, так и за рубежом.
      </p>
    </div>


    <!--  БЛОК 4  -->
    <div class="mt-2 sm:mt-4 md:mt-6 lg:mt-8 px-4 sm:px-32 flex flex-col items-center w-12/12 sm:w-6/12">
      <h2 class="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center border-b-4 md:border-b-8">
        Наши преимущества
      </h2>
    </div>


    <!--  БЛОК 5  -->
    <div
      class="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-0 sm:mt-4 lg:mt-8 w-full px-4">
      <div
        class="bg-white-filler mt-2 content-animate rounded-xl border duration-300 h-full border-gray-100 m-2 p-2 backdrop-blur-sm backdrop-brightness-75 sm:backdrop-brightness-100 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12"
        v-for="el of mainContent"
        :style="{animationDuration: 0.5 + el.id / 6 + 's'}">

        <div class="flex flex-col justify-center items-center mt-2">
          <h1 class="font-extrabold text-xl md:text-2xl text-red-50">{{ el.title }}</h1>
          <img class="mt-4 w-20 h-20 md:w-24 md:h-24 object-fill object-cover"
               :src="require(`../assets/stickers/${el.sticker}.png`)"
               alt="no img">
        </div>

        <p class="mt-4 text-center text-lg lg:text-xl transition-all ease-in text-red-50">{{ el.description }}</p>
      </div>
    </div>


    <!--  БЛОК 6  -->
    <div class="mt-2 sm:py-2 md:py-8 lg:py-8 px-4 sm:px-32 flex flex-col items-center w-12/12 sm:w-6/12">
      <h2
        class="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center border-b-4 md:border-b-8 border-b-red-100">
        Руководство компании
      </h2>
    </div>


    <!--  БЛОК 7  -->
    <div
      class="mt-2 mb-4 sm:mb-8 px-4 sm:px-20 md:px-6 w-full text-red-50 flex flex-col justify-start md:flex-row duration-300">

      <div class="mt-2 md:mt-0">
        <img class="object-fill object-cover rounded-t-md" src="../assets/avatars/avatar-1.webp" alt="no img">
        <div class="font-extrabold px-2 py-2 md:py-4 rounded-b-md bg-red-800">
          <span class="block py-1 my-1 text-base lg:text-lg bg-gray-800 rounded-xl">Директор</span>
          Иванов Генадий Викторович
        </div>
      </div>

      <div class="mt-2 md:mt-0 md:mx-4">
        <img class="object-fill object-cover rounded-t-md" src="../assets/avatars/avatar-2.jpg" alt="no img">
        <div class="font-extrabold px-2 py-2 md:py-4 rounded-b-md bg-red-800">
          <span
            class="block p-2 my-1 text-base md:text-lg lg:text-xl bg-gray-800 rounded-xl">Генеральный директор</span>
          <p class="text-sm md:text-base lg:text-lg">Иванов Генадий Викторович</p>
        </div>
      </div>

      <div class="mt-2 md:mt-0">
        <img class="object-fill object-cover rounded-t-md" src="../assets/avatars/avatar-3.jpg" alt="no img">
        <div class="font-extrabold px-2 py-2 md:py-4 rounded-b-md bg-red-800">
          <span class="block py-1 my-1 text-base lg:text-lg bg-gray-800 rounded-xl">Директор</span>
          <p class="text-sm md:text-base lg:text-lg">Иванов Генадий Викторович</p>
        </div>
      </div>
    </div>


    <evFooter/>

  </div>
</template>

<script>

import Vue from 'vue';
import {mainContent} from "@/configs/mainPage"
import evFooter from "@/components/widgets/ev-footer"
import {priceInfoCards} from '@/configs/priceListInfo';
import {ratingCards} from "@/configs/ratingCards";
import {customerCompanyGroup} from "@/configs/experience_2";
import {infoBannerContentCards} from "~/configs/infoBannerCarousel";
import VueCarousel from 'vue-carousel';
import {Carousel, Slide} from "vue-carousel/src";

Vue.use(VueCarousel);

export default {
  name: 'IndexPage',
  components: {
    evFooter: evFooter,
    Carousel,
    Slide
  },

  methods: {
    customerCompanyGroupSorted() {
      return this.customerCompanyGroup.sort((e1, e2) => e1.services.length > e2.services.length ? 1 : -1)
    }
  },

  data() {
    return {
      activeInfoBannerElementId: 1,
      infoBannerContentCards,
      buttonShow: false,
      customerCompanyGroup,
      priceInfoCards,
      ratingCards,
      mainContent: mainContent,
    }
  }
}

</script>


<style scoped>

.main-container {
  @apply bg-gray-800 min-w-full overflow-y-scroll flex flex-col items-center;
}

.content-container-1 {
  @apply relative;
  @apply min-w-full h-auto lg:min-h-[calc(100vh-60px)];
  @apply flex flex-col justify-around;
  @apply pt-20 sm:pt-0 px-4 sm:px-8 md:px-8 lg:px-12 xl:px-12;
  /**/
  background-blend-mode: multiply;
  background: rgba(41, 55, 72, 0.5) top / cover no-repeat fixed url("@/assets/background/main_page/ev-bg-mauntain.jpg");
}

.content-container-2 {
  @apply w-full h-auto sm:min-h-screen;
  /*@apply flex flex-col items-center justify-start;*/
  @apply text-gray-100 font-normal;
  @apply bg-gray-50;
  @apply py-2 md:py-8 px-4 sm:px-8 md:px-8 lg:px-12 xl:px-12;
  /**/
  background-blend-mode: multiply;
  background: rgba(41, 55, 72, 0.5) top / cover no-repeat fixed url("@/assets/background/ev-bg-15.jpg");
}

.content-container-3 {
  @apply z-10 relative;
  @apply flex flex-col md:flex-row items-center justify-center;
  @apply text-gray-100;
  @apply py-2 px-4 mt-2 md:mt-0 sm:py-6 md:py-16 px-4 sm:px-8 md:px-16 lg:px-44 xl:px-64;
  @apply duration-300;
}

.txt-shadow {
  text-shadow: #4d4d56 2px 4px 5px;
}

</style>
