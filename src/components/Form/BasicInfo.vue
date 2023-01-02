<template>
  <!-- BASIC INFORMATION FORM -->
  <div :class="activeForm === 0 ? 'block' : 'hidden'" class="w-full h-auto   mt-12   p-3">
    <h1 class="text-gray-700">Basic Information</h1>
    <div class="  grid grid-cols-3 mt-4 gap-4">
      <Input type="text" placeholder="eg:Kashif" label="Name" />
      <Input type="email" placeholder="eg:Kashif@gmail.com" label="Email" />
      <Input type="tel" placeholder="eg:3067250955" label="Phone" />
      <Input type="text" placeholder="eg:Lahore" label="Address" />
      <!-- <Select label="Degree" :option="degree"  />
      <Select label="Major" :option="major"  /> -->
    </div>
  </div>
</template>

<script>
import Input from "../Input.vue";
import Select from "../Select.vue";
export default {
  components:{
    Input,
    Select
  },
  props:{
    activeForm:Number
  },
  setup() {
    const degree = [
      {
        id:1,
        option : 'Bachelor'
      }
    ];
    const major = [
      {
        id:1,
        option : 'Science'
      }
    ];

    return {
      degree,
      major
    }
  }
}
</script>

<style lang="scss" scoped>

</style>