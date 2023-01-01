<template>
  <div class="w-full h-screen bg-blue-600">
<div class="max-w-6xl mx-auto flex items-center justify-center">
  <div class="h-full    py-28 text-left">
    <p class="text-sm text-center font-thin text-white">Highlighted & Professional Resume  </p>
    <h1 class="text-6xl max-w-4xl text-white font-bold py-2   text-center">Make Your Professional Resume in 4 Clicks</h1>
    <p class="text-white font-light text-center   py-2 max-w-4xl">
      We make professional Resume for you. Your Personal resume
      We make professional Resume for you. Your Personal resume
      We make professional Resume for you. Your Personal resume
    </p>
    <div class="flex gap-x-2  mt-2 justify-center">
     <Button text="Create Resume" styles="shadow-lg hover:ring-1 hover:bg-blue-600 hover:ring-white hover:text-white" />
     <Button text="Register Now" styles="shadow-lg bg-blue-600 text-white hover:text-white hover:ring-1 hover:ring-white" />
    </div>
  </div>
  <div></div>
</div>
<div class="flex gap-4 w-full overflow-x-hidden px-4 py-4 scroll">
  <img  style="width: 30%" class="rounded border-2 border-blue-600" :src="certificate" />
  <img  style="width: 30%" class="rounded  border-2 border-blue-600" :src="certificate" />
  <img  style="width: 30%" class="rounded  border-2 border-blue-600" :src="certificate" />
  <img  style="width: 30%" class="rounded  border-2 border-blue-600" :src="certificate" />
</div>
  </div>
  <div class="h-12 w-full bg-blue-50 top-12 absolute flex items-center justify-center top-[100%]">
    <p class="font-thin text-gray-700">@2023 Made with ❤️ By @Kashif</p>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import certificate from '../assets/cv.png';
export default {
  components:{
    Button
  },
  setup() {


    return {
      certificate
    }
  }
}
</script>

<style lang="scss" scoped>

</style>