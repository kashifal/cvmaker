<template>
  <div class=" flex items-center   justify-start gap-x-2 col-span-0">
    <input :id="id" type="checkbox"    class="   px-2 py-2 text-sm   focus:border-1 block focus:ring-1 focus:ring-blue-600 ring:outline-1 text-gray-700 focus:outline-blue-600 focus:border-blue-400 focus:ring-blue-600 rounded"/>
    <label :for="id" class="block text-sm text-lg font-normal py-2 text-gray-600">{{ label }}</label>

  </div>
</template>

<script>
export default {
  props:{
    label: String,
    id:String
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>