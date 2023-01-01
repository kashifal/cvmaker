<template>
  <!-- Work History FORM -->
  <div :class="activeForm === 1 ? 'block' : 'hidden'" class="w-full h-auto   mt-12   p-3">
    <h1 class="text-gray-700">Work History</h1>
    <div class="  grid grid-cols-3 mt-4 gap-4">
      <Input type="text" placeholder="eg:SoftPyramid" label="Company Name" />
      <Input type="date" placeholder="eg:Kashif@gmail.com" label="Date From" />
      <Input type="date" placeholder="eg:3067250955" label="Date To" />
      <Input type="text" placeholder="eg: Web Developer" label="Your Role" />
      <MultiSelect label="Tech I Worked on" />
      <Input type="text" placeholder="eg: Web Developer" label="Your Role" />
      <Checkbox id="workhis" label="Currently Working Here" />
<!--      <Test />-->
    </div>

    <Button type="button" styles="bg-blue-600 text-white hover:text-white  mt-8" text="Add More Experience" />


  </div>
</template>

<script>
import Input from "../Input.vue";
import Select from "../Select.vue";
import Checkbox from "../Checkbox.vue";
import Button from "../Button.vue";
import MultiSelect from "../MultiSelect.vue";
// import Test from "src/components/Test.vue";
import Test from '../Test.vue';
export default {
  components:{
    Input,
    Select,
    Checkbox,
    Button,
    MultiSelect,
    Test
  },
  props:{
    activeForm:Number
  },
  setup() {
    const degree = [
      {
        id:1,
        degree : 'Bachelor'
      }
    ];
    const major = [
      {
        id:1,
        degree : 'Science'
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