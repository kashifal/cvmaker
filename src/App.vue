<template>
  <Header />
  <router-view></router-view>
  <div class="h-96 "></div>


</template>

<script>
import Header from "./components/Header.vue";
export default {
  components:{
    Header
  },
  setup() {


    return {}
  }
}
</script>

<style scoped>

</style>