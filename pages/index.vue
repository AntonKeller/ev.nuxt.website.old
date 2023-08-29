<template>
  <!--  h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)]-->
  <div class="bg-gray-800 w-full overflow-y-scroll flex flex-col items-center">


    <!--  БЛОК 1  -->
    <div
      class="relative px-2 py-2.5 sm:px-4 md:px-16 lg:px-32 background w-full h-[calc(100vh-70px)] flex flex-col justify-center">

      <div class="flicker absolute bottom-0 left-[calc(49.55%)] select-none cursor-pointer text-gray-300 text-8xl rotate-90 border border-gray-300">
        <span class="inline-block -translate-y-1.5 py-6"> > </span>
      </div>

      <!--  ЗАГОЛОВОК С КНОПКОЙ  -->
      <div class="title text-gray-800 font-extrabold flex flex-col justify-center">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Эверест Консалтинг
        </h1>

        <div class="text-base sm:text-lg md:text-xl lg:text-2xl mt-2.5">
          <h2>Работаем с 2010 года</h2>
          <button
            class="hover:bg-transparent transition-all duration-300 mt-3.5 px-6 py-2 border-2 bg-gray-50 border-gray-800 rounded-md">
            Связаться с нами
          </button>
        </div>

      </div>

      <!--  ТЕКСТОВЫЕ СПИСКИ С ЗАГОЛОВКОМ  -->
      <div class="mt-8 flex flex-col md:flex-row gap-2 md:gap-6 justify-between text-gray-300 text-center">
        <div class="bg-[#1f2937e9] rounded-md px-8 pt-4 pb-10">
          <h4 class="font-extrabold text-xl">Lorem ipsum dolor.</h4>
          <div class="text-sm mt-1.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
            architecto aut
            consectetur debitis delectus, deserunt distinctio dolore dolores dolorum eius enim impedit ipsum modi
            molestiae, nemo nobis nulla numquam officiis perspiciatis placeat possimus quae quam quidem quisquam quo
            reiciendis reprehenderit saepe sapiente sint tempore tenetur vel, voluptate? Alias animi beatae
            exercitationem facilis ipsam possimus quae repellat sunt suscipit vero!
          </div>
        </div>

        <div class="bg-gray-800 rounded-md px-8 pt-4 pb-10">
          <h4 class="font-extrabold text-xl">Lorem ipsum dolor.</h4>
          <div class="text-sm mt-1.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
            asperiores atque
            consequatur cupiditate, delectus dicta dolore doloremque et ex expedita impedit in magni nemo neque
            nesciunt nobis, odio odit placeat quasi quos ratione recusandae repudiandae saepe sapiente sequi sint
            suscipit temporibus totam ut. Aliquam blanditiis cupiditate dolore ea fuga labore minus nesciunt optio
            porro provident quae, quo saepe sunt!
          </div>
        </div>

        <div class="bg-[#1f2937e9] rounded-md px-8 pt-4 pb-10">
          <h4 class="font-extrabold text-xl">Lorem ipsum dolor.</h4>
          <div class="text-sm mt-1.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda at
            atque autem
            commodi, distinctio dolorum eligendi enim, harum hic id illo iste iusto laborum libero magnam magni minima
            minus necessitatibus nemo optio praesentium provident quia, quos ratione rem reprehenderit sed sit velit
            voluptas! Ad aut distinctio, error et fuga porro repellat sit tempore? A eum minima nam quae unde!
          </div>
        </div>
      </div>

      <div></div>


      <div class="z-50 mt-10 z-0 bg-people"></div>

      <!--        <div class="bg-red-900 h-16 mt-10 rounded-2xl opacity-75 flex flex-row">-->
      <!--          <div class="bg-gray-900 w-8 h-36"></div>-->
      <!--          <div class="ml-4 bg-gray-900 w-12 h-48"></div>-->
      <!--          <div class="ml-4 bg-gray-900 w-12 h-56"></div>-->
      <!--          <div class="ml-4 bg-gray-900 w-12 h-64"></div>-->
      <!--          <div class="ml-4 bg-gray-900 w-12 h-72"></div>-->
      <!--          <div class="ml-4 bg-gray-900 w-12 h-80"></div>-->
      <!--        </div>-->

      <!--        <div class="mt-10 z-0 book"></div>-->


      <div
        class="mt-10 border opacity-75 border-dashed border-gray-50 flex flex-row text-center font-extrabold flex text-3xl text-gray-50 w-1/6">
        <div class="flex flex-col mr-auto">
          <h4>100%</h4>
          <!--            <div class="mt-2 bg-red-900 w-32 h-4 rounded-2xl"></div>-->
        </div>
        <div class="flex flex-col">
          <h4>75%</h4>
          <!--            <div class="mt-2 bg-red-900 w-32 h-4 rounded-2xl"></div>-->
        </div>
      </div>

    </div>


    <!--  БЛОК 2  -->
    <div
      class="px-2 py-2.5 sm:px-4 md:px-16 lg:px-32 background-2 w-full h-screen text-gray-50 py-36 px-16 font-extrabold flex flex-col items-center sm:flex-row sm:items-end duration-300">

      <img class="md:icon-animate mt-4 sm:mt-0 object-cover w-20 sm:w-24 md:w-32"
           src="../assets/stickers/company-sticker-red-50.png"
           alt="no img">

      <div class="text-lg md:text-xl show-from-top flex flex-col items-center sm:items-start md:items-end mt-4">


        <div>
          <h4 class="font-extrabold text-2xl">Наша компания</h4>
          <div class="mt-4">
            Компания Эверест Консалтинг создана в 2010 году.
            Учредители компании ранее занимали руководящие позиции в группе оценки российского подразделения
            международной аудиторской компании
            <span
              class="bg-gray-50 text-red-900 p-2 tracking-wider inline-block rounded-sm">PriceWaterHouseCoopers</span>
          </div>
        </div>

      </div>

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
        class="bg-white-filler mt-2 content-animate rounded-md border duration-300 h-full border-gray-100 m-2 p-2 backdrop-blur-sm backdrop-brightness-75 sm:backdrop-brightness-100 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12"
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
          <span class="block py-1 my-1 text-base lg:text-lg bg-gray-800 rounded-md">Директор</span>
          Иванов Генадий Викторович
        </div>
      </div>

      <div class="mt-2 md:mt-0 md:mx-4">
        <img class="object-fill object-cover rounded-t-md" src="../assets/avatars/avatar-2.jpg" alt="no img">
        <div class="font-extrabold px-2 py-2 md:py-4 rounded-b-md bg-red-800">
          <span
            class="block p-2 my-1 text-base md:text-lg lg:text-xl bg-gray-800 rounded-md">Генеральный директор</span>
          <p class="text-sm md:text-base lg:text-lg">Иванов Генадий Викторович</p>
        </div>
      </div>

      <div class="mt-2 md:mt-0">
        <img class="object-fill object-cover rounded-t-md" src="../assets/avatars/avatar-3.jpg" alt="no img">
        <div class="font-extrabold px-2 py-2 md:py-4 rounded-b-md bg-red-800">

          <span class="block py-1 my-1 text-base lg:text-lg bg-gray-800 rounded-md">Директор</span>
          <p class="text-sm md:text-base lg:text-lg">Иванов Генадий Викторович</p>
        </div>
      </div>
    </div>


    <evFooter/>

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

.ev-element-main-page-statistic {

}

.bg-white-filler {
  background: url("@/assets/background/background-filler-white-lines.png"), rgb(31 41 55) repeat;
}

.bg-red-filler {
  background: url("@/assets/background/background-filler-red-lines.png"), rgb(254 242 242) repeat;
}

.background {
  background: top / cover no-repeat fixed url("@/assets/background/main_page/ev-bg-mauntain.jpg");
  border: 1px dashed white;
}

.background-2 {
  background: top / cover no-repeat fixed url("@/assets/background/main_page/ev-bg-20.jpg");
  border: 1px dashed white;
}

.flicker {
  animation: anim-flicker 2.5s infinite;
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
