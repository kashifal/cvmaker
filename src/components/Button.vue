<template>

    <button @click="setFunc()" :class="styles" class="px-4 py-2 rounded hover:scale-95 bg-white text-gray-700 hover:text-blue-600 transition-all">
      {{text}}
    </button>

</template>

<script>
export default {
  props:{
    text: String, styles:String, state:Number
  },
  setup(props) {

    function setFunc(){
      props.state = props.state++;

    }

    return {
      setFunc
    }
  }
}
</script>

<style lang="scss" scoped>

</style>