<template>
  <div
    class="h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)] md:h-screen background w-full text-red-50 overflow-y-scroll flex flex-col items-center md:pt-24">

    <div
      class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl duration-500 sm:pt-10 md:pt-14 lg:pt-24 flex flex-col items-center sm:items-start title">
      <h1 class=" font-extrabold mt-2 sm:mt-4 md:mt-6 lg:mt-8 sm:tracking-wide">
        Everest consulting
      </h1>
      <h1
        class=" font-extrabold mt-2 sm:mt-4 md:mt-6 lg:mt-8 sm:tracking-wide">
        лидер оценки
      </h1>
      <div
        class="rounded-md w-full border-b-4 md:border-b-8 border-b-red-700 mt-2 sm:mt-4 md:mt-6 lg:mt-8"></div>
    </div>


    <div
      class="px-4 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 sm:pt-10 md:pt-14 lg:pt-24 flex flex-col items-center sm:flex-row sm:items-end">
      <img class="icon-animate mt-4 sm:mt-0 object-cover object-fill w-20 sm:w-24 md:w-32 duration-500"
           src="../assets/stickers/company-sticker-red-50.png"
           alt="not found sticker company">
      <div class="show-from-top flex flex-col items-center sm:items-start md:items-end font-extrabold mt-4">
        <h2
          class="text-center sm:text-left md:text-right lg:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl duration-500">
          Наша компания
        </h2>
        <p
          class="mt-2 lg:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left md:text-right duration-500">
          Компания Эверест Консалтинг создана в 2010 году. Учредители компании ранее занимали руководящие позиции в
          группе оценки российского подразделения международной аудиторской компании
          <span
            class="z-50 bg-red-700 px-4 font-extrabold tracking-wider inline-block duration-500 rounded-sm">
            «PricewaterhouseCoopers».
          </span>
        </p>
      </div>
    </div>


    <div
      class="bg-red-filler z-10 px-4 mt-2 md:mt-0 text-gray-700 flex flex-col md:flex-row items-center justify-center relative py-2 sm:py-6 md:py-16 px-4 sm:px-8 md:px-16 lg:px-28">
      <div
        class="w-full md:w-11/12 xl:w-10/12 z-30 min-h-56 flex flex-col md:flex-row items-center">
        <img class="show-from-left object-cover object-fill w-24 sm:w-32 md:w-48 duration-500"
             src="../assets/stickers/target-sticker-gray-shadow.png"
             alt="not found sticker target">
        <p class="text-lg sm:text-xl md:text-xl lg:text-2xl text-center font-extrabold duration-500">
          <span class="uppercase">Наша цель</span> – оказание полного комплекса консультационных услуг в области
          оценки и консалтинга (финансового,
          управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и
          значительным опытом выполнения подобных проектов как в России, так и за рубежом.
        </p>
      </div>
    </div>


    <div class="mt-2 sm:mt-4 md:mt-6 lg:mt-8 px-4 sm:px-32 flex flex-col items-center w-12/12 sm:w-6/12">
      <h2 class="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Наши преимущества
      </h2>
      <div class="bg-red-100 mt-2 hidden md:block p-1.5 w-full rounded-sm"></div>
    </div>


    <div
      class="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-0 sm:mt-4 lg:mt-8 w-full px-4 sm:px-8 duration-500">
      <div
        class="bg-white-filler mt-2 content-animate rounded-md border hover:-translate-y-10 duration-500 h-full border-gray-700 m-2 p-2 backdrop-blur-sm backdrop-brightness-75 sm:backdrop-brightness-100 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12"
        v-for="el of mainContent"
        :style="{animationDuration: 0.5 + el.id / 6 + 's'}">

        <div class="flex flex-col justify-center items-center mt-2">
          <h1 class="font-extrabold text-xl md:text-2xl text-red-50">{{ el.title }}</h1>
          <img class="mt-4 w-20 h-20 md:w-24 md:h-24 object-fill object-cover"
               :src="require(`../assets/stickers/${el.sticker}.png`)"
               alt="no image">
        </div>

        <p class="mt-4 text-center text-lg lg:text-xl transition-all ease-in text-red-50">{{ el.description }}</p>
      </div>
    </div>


    <div class="mt-2 sm:py-2 md:py-8 lg:py-8 px-4 sm:px-32 flex flex-col items-center w-12/12 sm:w-6/12">
      <h2 class="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Руководство компании
      </h2>
      <div class="bg-red-100 mt-2 hidden md:block p-1.5 w-full rounded-sm"></div>
    </div>


    <div
      class="mt-2 mb-4 sm:mb-8 px-4 sm:px-20 md:px-6 w-full text-gray-300 flex flex-col justify-start md:flex-row duration-500">

      <div class="mt-2 md:mt-0">
        <img class="object-fill object-cover rounded-sm" src="../assets/avatars/avatar-1.webp" alt="no image">
        <h3
          class="shadow-gray-800 shadow-2xl font-extrabold px-2 py-2 md:py-4 rounded-sm text-xl lg:text-2xl text-center bg-red-700">
          <span class="block py-1 my-1 text-lg lg:text-xl bg-red-800 rounded-sm">Директор</span>
          Иванов Генадий Викторович
        </h3>
      </div>

      <div class="mt-2 md:mt-0 md:mx-4">
        <img class="object-fill object-cover rounded-sm" src="../assets/avatars/avatar-2.jpg" alt="no image">
        <h3
          class="shadow-gray-800 shadow-2xl font-extrabold px-2 py-2 md:py-4 rounded-sm text-xl lg:text-2xl text-center bg-red-700">
          <span class="block py-1 my-1 text-lg lg:text-xl bg-red-800 rounded-sm">Генеральный директор</span>
          Иванов Генадий Викторович
        </h3>
      </div>

      <div class="mt-2 md:mt-0">
        <img class="object-fill object-cover rounded-sm" src="../assets/avatars/avatar-3.jpg" alt="no image">
        <h3
          class="shadow-gray-800 shadow-2xl font-extrabold px-2 py-2 md:py-4 rounded-sm text-xl lg:text-2xl text-center bg-red-700">
          <span class="block py-1 my-1 text-lg lg:text-xl bg-red-800 rounded-sm">Директор</span>
          Иванов Генадий Викторович
        </h3>
      </div>
    </div>


    <div
      class=" w-full flex flex-row items-center font-extrabold text-red-50 bg-gray-800 z-10 px-4 flex flex-col pt-4 sm:pt-8 md:pt-16 pb-4 px-4 sm:px-8 md:px-16 duration-500">

      <div class="w-full flex flex-col items-center sm:items-start border-b border-b-red-50">

        <div class="p-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-center flex flex-col items-center sm:block">
          <img class="w-6 h-6 sm:w-10 sm:h-10 inline mr-2" src="../assets/icons/address-icon.png" alt="not found">
          <div class="inline">
            <span class="mr-1">125040,</span>
            <span class="mr-1">Россия,</span>
            <span class="mr-1">Москва,</span>
            <span class="mr-1">3-я улица Ямского поля,</span>
            <span class="mr-1">д.2</span>
            <span class="mr-1">корп.7,</span>
            <span class="mr-1">офис 301</span>
          </div>
        </div>

        <div class="p-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-center flex flex-col items-center sm:block">
          <img class="w-6 h-6 sm:w-10 sm:h-10 inline mr-2" src="../assets/icons/phone-icon.png" alt="not found">
          <span class="p-1 mr-2">+7 (495) 717 01 01,</span>
          <span>+7 (499) 557 07 97</span>
        </div>

        <div class="p-2 text-xl sm:text-2xl md:text-2xl lg:text-2xl text-center flex flex-col items-center sm:block">
          <img class="w-6 h-6 sm:w-10 sm:h-10 block sm:inline mr-2" src="../assets/icons/email-icon.png"
               alt="not found">
          <span class="block sm:inline">info@evcons.ru</span>
        </div>
      </div>

      <div
        class="w-full place-self-end justify-self-end mt-2 sm:mt-4 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl">
        <p class="place-self-start justify-self-center text-center">© Все права защищены, ООО Эверест
          Консалтинг, 2023</p>
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

@keyframes animate-from-left {
  from {
    opacity: 0;
    transform: translateX(-100vw);
  }
}

.show-from-top {
  animation: animate-from-top ease 0.8s;
}

@keyframes animate-from-top {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
}

.bg-white-filler {
  background: url("@/assets/background/background-filler-white-lines.png"), transparent repeat;
}

.bg-red-filler {
  background: url("@/assets/background/background-filler-red-lines.png"), rgb(254 242 242) repeat;
}

.background {
  background: url("@/assets/background/background-humans-index-page.png") no-repeat center / cover;
}

.title {
  animation: show-title-animate ease 0.8s;
}

.icon-animate{
  animation: show-icon-animate ease 0.8s;
}

@keyframes show-icon-animate {
  from {
    opacity: 0;
    transform: scale(0);
  }
}

@keyframes show-title-animate {
  from {
    opacity: 0;
    transform: translateY(20vw);
  }
}

</style>
