<template>
  <div class=" block">
    <label class="block text-sm text-lg font-normal py-2 text-gray-600">{{ label }}</label>
    <select class="ring-1 block px-2 py-2 text-sm w-full shadow focus:border-1 block focus:ring-1 focus:ring-red-600 ring:outline-1 text-gray-700 focus:outline-emerald-600 focus:border-red-400 focus:ring-red-600 rounded ring-gray-300">
      <option selected disabled>Select {{label}}</option>
      <option v-for="option in option" :key="option.id">{{option.option}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    label: String,
    option:Object
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>