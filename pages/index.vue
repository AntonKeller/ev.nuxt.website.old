<template>
  <!--  h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)]-->
  <div class="bg-gray-800 min-w-full overflow-y-scroll flex flex-col items-center">

    <!--  БЛОК 1  -->
    <div
      class="relative pt-20 sm:pt-0 px-4 sm:px-8 md:px-8 lg:px-12 xl:px-12 background min-w-full h-auto lg:min-h-[calc(100vh-60px)] flex flex-col justify-around">


      <!--  ЗАГОЛОВОК С КНОПКОЙ  -->
      <div class="flex flex-col items-center mt-3 lg:flex-row lg:justify-around md:items-startr md:text-left">

        <div
          class="w-full lg:w-5/12 title text-center text-gray-800 font-extrabold flex flex-col justify-start mt-8 lg:mt-0"
        >
          <h1 class="txt-shadow text-gray-100 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Эверест Консалтинг
          </h1>
          <div>
            <h2 class="txt-shadow text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 text-gray-200">
              Работаем с 2010 года
            </h2>
            <button
              class="duration-700 text-sm sm:text-lg md:text-xl active:scale-[98%] hover:bg-transparent hover:border-gray-100 hover:text-gray-100 mt-4 sm:mt-6 lg:mt-8 transition-all duration-150 px-6 py-2 border-2 sm:border-4 bg-gray-50 border-gray-800 rounded-xl">
              Связаться с нами
            </button>
          </div>
        </div>

        <!--https://www.jsdelivr.com/package/npm/vue-carousel-v2-->
        <carousel
          autoplay autoplay-timeout="5000" :per-page="1" :mouse-drag="false"
          class="text-xl text-gray-100 w-full lg:w-6/12 mt-12 lg:mt-0">
          <slide
            v-for="infoBannerContentCard of infoBannerContentCards"
            :key="infoBannerContentCard.id"
            class="text-center lg:text-left"
          >
            <h3 class="text-xl lg:text-2xl xl:text-3xl">{{infoBannerContentCard.title}}</h3>
            <p class="text-base lg:text-lg xl:text-xl mt-3">{{ infoBannerContentCard.description}}</p>
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
            class="flicker text-4xl sm:text-5xl md:text-6xl xl:text-7xl  sm:mt-4 md:mt-5 xl:mt-5  font-extrabold  text-gray-50">
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
    <div
      class="bg-15 py-8 px-4 sm:px-8 md:px-8 lg:px-12 xl:px-12 h-auto sm:min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">


      <p class="text-2xl text-gray-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur autem consequuntur deleniti
        dolor dolore dolores dolorum eaque eligendi error est expedita id illum, iste iure iusto laudantium nesciunt
        nisi nobis perferendis quam quasi reiciendis sequi sint totam unde velit, voluptas. Culpa magnam, provident? A
        amet architecto beatae delectus distinctio doloremque eaque earum enim fugit, harum laboriosam minus molestias
        odio possimus ratione rerum sequi voluptas voluptatum. Beatae distinctio dolor enim eum facilis impedit magnam
        nesciunt nihil omnis, quibusdam reiciendis sint temporibus veritatis? Cum, deleniti ducimus excepturi magnam
        mollitia nemo nulla provident quibusdam quis quisquam, sapiente similique soluta tempore. Architecto, odit.
      </p>

      <!--      -->
      <div class="md: flex flex-wrap gap-4 justify-between items-center mt-6">
        <div
          v-for="exLogotype of exLogotypes"
          class="md:block w-[70.333%] md:w-[44.333%] lg:w-[31.333%] xl:w-[22.333%] rounded-2xl bg-gray-800 shadow-2xl shadow-gray-900 px-4 py-6 hover:bg-gray-900"
        >
          <div class="p-2">
            <img class="object-fill m-0 w-full object-contain border-b border-b-gray-600 border-dashed"
                 :src="require(`./../assets/experience_logotypes/${exLogotype.img}.png`)" alt="err">
          </div>

          <div class="flex flex-col items-start justify-center mx-2 mt-3 pb-2 flex gap-1 text-sm">
            <span class="px-2 py-0.5 rounded-md text-center font-bold text-gray-100 text-base ">Оценка бизнеса</span>
            <span class="px-2 py-0.5 rounded-md text-center font-bold text-gray-100 text-base ">Технический надзор</span>
            <span class="px-2 py-0.5 rounded-md text-center font-bold text-gray-100 text-base ">Строительная экспертиза</span>
            <span class="px-2 py-0.5 rounded-md text-center font-bold text-gray-100 text-base ">Оценка</span>
            <span class="px-2 py-0.5 rounded-md text-center font-bold text-gray-100 text-base ">Строительный аудит</span>
          </div>
        </div>
      </div>

<!--            <div-->
<!--              v-for="priceInfoCard of priceInfoCards"-->
<!--              :key="priceInfoCard.id"-->
<!--              class="before shadow-2xl shadow-black pt-4 pb-8 px-12 text-gray-50 bg-gray-800 flex flex-col justify-start items-center max-w-xl text-center rounded-xl">-->

<!--              <img class="z-[2] mt-6 md:icon-animate object-cover w-20 sm:w-1/6 md:w-24"-->
<!--                   :src="require(`../assets/stickers/${priceInfoCard.sticker}.png`)"-->
<!--                   alt="no img">-->

<!--              <h3 class="z-[2] text-gray-50 text-xs sm:text-xs md:text-base lg:text-xl xl:text-xl mt-3 font-extrabold">-->
<!--                {{ priceInfoCard.title }}</h3>-->

<!--              <div class="mt-28">-->
<!--                <p class="text-xs sm:text-xs md:text-xs lg:text-base xl:text-base">{{ priceInfoCard.description }}</p>-->
<!--                <span class="font-extrabold text-gray-800">PriceWaterHouseCoopers</span>-->
<!--              </div>-->

<!--              <div class="px-4 py-1.5 w-full text-gray-100 border-n border-b-gray-300 rounded-md">Обзор</div>-->

<!--            </div>-->

    </div>


    <!--  БЛОК 3  -->
    <div
      class="bg-red-filler z-10 px-4 mt-2 md:mt-0 text-gray-100 flex flex-col md:flex-row items-center justify-center relative py-2 sm:py-6 md:py-16 px-4 sm:px-8 md:px-16 lg:px-44 xl:px-64 duration-300">
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
import {exLogotypes} from "@/configs/experience_2";
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

  data() {
    return {
      activeInfoBannerElementId: 1,
      infoBannerContentCards,
      buttonShow: false,
      exLogotypes,
      priceInfoCards,
      ratingCards,
      mainContent: mainContent,
    }
  }
}

</script>

<style>

/*animation list*/
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}

/*------------*/
.bg-15 {
  background-blend-mode: multiply;
  background: rgba(41, 55, 72, 0.5) top / cover no-repeat fixed url("@/assets/background/ev-bg-15.jpg");
}

@keyframes animate-from-top {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
}

.bg-white-filler {
  background: url("@/assets/background/background-filler-white-lines.png"), rgb(31 41 55) repeat;
}

.bg-red-filler {
  background: url("@/assets/background/background-filler-red-lines.png"), rgb(254 242 242) repeat;
}

.background {
  background-blend-mode: multiply;
  background: rgba(41, 55, 72, 0.5) top / cover no-repeat fixed url("@/assets/background/main_page/ev-bg-mauntain.jpg");
  /*border: 1px dashed white;*/
}

.flicker {
  animation: anim-flicker 4.5s infinite;
}

@keyframes anim-flicker {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

.selectSpan {
  display: inline-block;
  background: #F9FAFBFF;
  border-radius: 0.55rem;
  color: #1F2937FF;
  padding: 0.15rem 0.55rem;
}

.book {
  position: absolute;
  top: 5em;
  right: 0;
  background: top / contain no-repeat url("@/assets/background/main_page/book.png");
  width: 950px;
  height: 950px;
  opacity: 0.3;
  transform: rotate(-45deg);
}

.before {
  position: relative;
  overflow: hidden;
}

.before:hover {
  box-shadow: 0 15px 35px #cb3131f9, -15px 0 35px #3150cbf9, 15px 0 35px #cb3131f9, 0 -15px 35px #3150cbf9;
  transition: ease-out 0.25s;
}


.text-border-shadow {
  text-shadow: 0 0 4px #F9FAFBFF;
}

.before::before {
  content: "";
  position: absolute;
  top: -20%;
  left: 32%;
  width: 60%;
  height: 70%;
  transform: rotate(45deg);
  z-index: 1;
  background: linear-gradient(45deg, #3150cb, #cb3131);
  border-radius: 2.5rem;
}

.title {
  animation: show-title-animate ease 0.95s;
}

.txt-shadow {
  text-shadow: #4d4d56 2px 4px 5px;
}

@keyframes show-title-animate {
  from {
    opacity: 0;
  }
}

</style>
