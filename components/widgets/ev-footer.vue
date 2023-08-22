<template>
  <footer
    class=" w-full flex flex-row items-center font-extrabold text-red-50 bg-gray-800 z-10 px-4 flex flex-col pt-4 sm:pt-8 md:pt-16 pb-4 px-4 sm:px-8 md:px-16 duration-300">

    <div class="w-full flex flex-col items-center sm:items-start border-b border-b-red-50">

      <div class="p-2 text-lg sm:text-xl md:text-xl text-center flex flex-col items-center sm:block">
        <img class="w-5 h-5 sm:w-6 sm:h-6 inline mr-2" src="../../assets/icons/address-icon.png" alt="no img">
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

      <div class="p-2 text-lg sm:text-xl md:text-xl text-center flex flex-col items-center sm:block">
        <img class="w-5 h-5 sm:w-6 sm:h-6 inline mr-2" src="../../assets/icons/phone-icon.png" alt="no img">
        <span class="p-1 mr-2">+7 (495) 717 01 01</span>
        <span>+7 (499) 557 07 97</span>
      </div>

      <div class="p-2 text-xl sm:text-2xl md:text-xl text-center flex flex-col items-center sm:block">
        <img class="w-5 h-5 sm:w-6 sm:h-6 block sm:inline mr-2" src="../../assets/icons/email-icon.png"
             alt="no img">
        <span class="block sm:inline">info@evcons.ru</span>
      </div>
    </div>

    <div
      class="w-full place-self-end justify-self-end mt-2 sm:mt-4 md:mt-8 text-base lg:text-lg">
      ©2023 "ООО Эверест Консалтиг"
    </div>
  </footer>
</template>

<script>
export default {
  name: "ev-footer"
}
</script>

<style scoped>

</style>
