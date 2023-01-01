<template>
  <div class="w-full h-16 shadow sticky top-0 bg-white">
  <div class="max-w-6xl h-full mx-auto flex items-center justify-between">
    <div class="logo">
      <router-link to="/" class="text-lg text-gray-600" @click="ActiveLink(0)">CV<span class="text-blue-500">.com</span> </router-link>
    </div>
    <div class=" flex gap-x-10 ">
      <router-link v-for="(link, index) in links" @click="ActiveLink(index)" :class="active === link.to ? 'text-blue-500 transition-all' : ''" :key="link.title" :to="link.to" class="text-sm font-light">{{link.title}}</router-link>
    </div>
    <div @click="showDropDown()" class="relative hover:bg-blue-50/5 p-1 rounded-lg transition-all cursor-pointer flex items-center justify-end gap-x-2">
      <div  class="h-8 cursor-pointer hover:shadow-md transition-all w-8 rounded-full ring-1 ring-blue-500 bg-blue-600"></div>
      <div :class="showModal ? 'block transition-all' : 'hidden transition-all'" class="px-3 py-3 rounded-md shadow-sm  transition-all min-h-20 right-0 bg-white  ring-1 ring-gray-200 top-12  min-w-32 absolute">
        <router-link class="text-sm block whitespace-nowrap font-light text-gray-600 transition-all hover:text-blue-500" to="/"><i class="fa fa-user-o"></i> <span class="ml-2">Kashif Sulehria</span></router-link>
        <router-link class="text-sm block whitespace-nowrap font-light text-gray-600 transition-all mt-1 hover:text-blue-500" to="#"><i class="fa fa-linkedin"></i> <span class="ml-2">Follow us</span></router-link>
        <router-link class="text-sm block whitespace-nowrap font-light text-gray-600 transition-all mt-1 hover:text-blue-500" to="#"><i class="fa fa-sign-out"></i> <span class="ml-2">Logout</span></router-link>

      </div>
      <i class="fa fa-angle-down text-blue-600"></i>
    </div>
  </div>
  </div>
</template>

<script>
import {ref,watchEffect,computed} from 'vue';
import {useRoute} from "vue-router";
const showModal = ref(false);

export default {
  setup() {
    const route = useRoute()
    const currentPath = computed(() => route.path)
    const active = ref(currentPath.value);


    const links = [
      {
        title:'Home',
        to:'/'
      },{
        title:'About Us',
        to:'/about'
      },{
        title:'Templates',
        to:'/templates'
      },{
        title:'Create Resume',
        to:'/create-resume'
      }
    ]


    function showDropDown(){
      showModal.value = !showModal.value;
    }

    function  ActiveLink(index){
      active.value = index;
      console.log(active,'active')
    }
    watchEffect(() => {
      active.value = currentPath.value
    })
    return {
      showDropDown,
      showModal,
      links,
      active,
      ActiveLink
    }
  }
}
</script>

<style lang="scss" scoped>

</style>