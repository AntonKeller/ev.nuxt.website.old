<template>
  <div
    class="h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)] md:h-screen background w-full text-red-50 overflow-y-scroll flex flex-col items-center md:pt-24">

    <div
      class="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl duration-300 sm:pt-10 md:pt-14 lg:pt-24 flex flex-col items-center sm:items-start title">
      <h1 class=" mt-2 sm:mt-4 md:mt-6 lg:mt-8 sm:tracking-wide">
        Everest consulting
      </h1>
      <h1
        class=" mt-2 sm:mt-4 md:mt-6 lg:mt-8 sm:tracking-wide">
        лидер оценки
      </h1>
      <div
        class="rounded-md w-full border-b-4 md:border-b-8 border-b-red-800 mt-2 sm:mt-4 md:mt-6 lg:mt-8"></div>
    </div>

    <div
      class="font-extrabold px-4 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 sm:pt-10 md:pt-14 lg:pt-24 flex flex-col items-center sm:flex-row sm:items-end duration-300">
      <img class="md:icon-animate mt-4 sm:mt-0 object-cover w-20 sm:w-24 md:w-32"
           src="../assets/stickers/company-sticker-red-50.png"
           alt="no img">
      <div class="show-from-top flex flex-col items-center sm:items-start md:items-end mt-4">
        <h2
          class="text-center sm:text-left md:text-right lg:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Наша компания
        </h2>
        <p
          class="mt-2 lg:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left md:text-right">
          Компания Эверест Консалтинг создана в 2010 году. Учредители компании ранее занимали руководящие позиции в
          группе оценки российского подразделения международной аудиторской компании
          <span
            class="z-50 bg-red-800 px-4 tracking-wider inline-block rounded-sm">
            «PricewaterhouseCoopers».
          </span>
        </p>
      </div>
    </div>


    <div
      class="bg-red-filler z-10 px-4 mt-2 md:mt-0 text-gray-700 flex flex-col md:flex-row items-center justify-center relative py-2 sm:py-6 md:py-16 px-4 sm:px-8 md:px-16 lg:px-44 xl:px-64 duration-300">
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


    <div class="mt-2 sm:mt-4 md:mt-6 lg:mt-8 px-4 sm:px-32 flex flex-col items-center w-12/12 sm:w-6/12">
      <h2 class="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center border-b-4 md:border-b-8">
        Наши преимущества
      </h2>
    </div>


    <div
      class="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-0 sm:mt-4 lg:mt-8 w-full px-4">
      <div
        class="bg-white-filler mt-2 content-animate rounded-md border duration-300 h-full border-gray-700 m-2 p-2 backdrop-blur-sm backdrop-brightness-75 sm:backdrop-brightness-100 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12"
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


    <div class="mt-2 sm:py-2 md:py-8 lg:py-8 px-4 sm:px-32 flex flex-col items-center w-12/12 sm:w-6/12">
      <h2 class="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center border-b-4 md:border-b-8 border-b-red-100">
        Руководство компании
      </h2>
    </div>


    <div
      class="mt-2 mb-4 sm:mb-8 px-4 sm:px-20 md:px-6 w-full text-red-50 flex flex-col justify-start md:flex-row duration-300">

      <div class="mt-2 md:mt-0">
        <img class="object-fill object-cover rounded-t-lg" src="../assets/avatars/avatar-1.webp" alt="no img">
        <h3
          class="font-extrabold px-2 py-2 md:py-4 rounded-b-lg text-xl lg:text-2xl text-center bg-red-800">
          <span class="block py-1 my-1 text-lg lg:text-xl bg-gray-800 rounded-lg">Директор</span>
          Иванов Генадий Викторович
        </h3>
      </div>

      <div class="mt-2 md:mt-0 md:mx-4">
        <img class="object-fill object-cover rounded-t-lg" src="../assets/avatars/avatar-2.jpg" alt="no img">
        <h3
          class="font-extrabold px-2 py-2 md:py-4 rounded-b-lg text-xl lg:text-2xl text-center bg-red-800">
          <span class="block py-1 my-1 text-lg lg:text-xl bg-gray-800 rounded-lg">Генеральный директор</span>
          Иванов Генадий Викторович
        </h3>
      </div>

      <div class="mt-2 md:mt-0">
        <img class="object-fill object-cover rounded-t-lg" src="../assets/avatars/avatar-3.jpg" alt="no img">
        <h3
          class="font-extrabold px-2 py-2 md:py-4 rounded-b-lg text-xl lg:text-2xl text-center bg-red-800">
          <span class="block py-1 my-1 text-lg lg:text-xl bg-gray-800 rounded-lg">Директор</span>
          Иванов Генадий Викторович
        </h3>
      </div>
    </div>


    <evFooter />

  </div>
</template>

<script>

import {mainContent} from "@/configs/mainPage"
import evFooter from "@/components/widgets/ev-footer"

export default {
  name: 'IndexPage',
  components: {
    evFooter: evFooter,
  },
  data() {
    return {
      mainContent: mainContent,
    }
  }
}

</script>

<style>

.show-from-top {
  animation: animate-from-top ease 0.8s;
}

@keyframes animate-from-top {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
}

/*.bg-white-filler {*/
/*  background: url("@/assets/background/background-filler-white-lines.png"), rgb(31 41 55) repeat;*/
/*}*/

/*.bg-red-filler {*/
/*  background: url("@/assets/background/background-filler-red-lines.png"), rgb(254 242 242) repeat;*/
/*}*/

/*.background {*/
/*  background: url("@/assets/background/background-humans.png") no-repeat center / cover;*/
/*}*/

.title {
  animation: show-title-animate ease 0.8s;
}

@keyframes show-title-animate {
  from {
    opacity: 0;
    transform: translateY(20vw);
  }
}

</style>
