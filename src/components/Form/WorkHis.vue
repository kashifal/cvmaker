<template>
  <!-- Work History FORM -->
  <div :class="activeForm === 1 ? 'block' : 'hidden'" class="w-full h-auto   mt-12   p-3">
    <h1 class="text-gray-700 text-3xl">Work History</h1>
    <div class="  grid grid-cols-3 relative mt-4 gap-4" v-for="form in fromList" :key="form.id">
    <i :class="fromList.length <= 1 ? 'hidden' : 'block'" @click="removeForm(form)" class="fa fa-times h-6 w-6 bg-emerald-100 text-emerald-700 rounded-full flex cursor-pointer items-center justify-center absolute right-0 -top-10"></i>
      <Input type="text"  placeholder="eg:SoftPyramid" label="Company Name" />
      <Input type="date" placeholder="eg:Kashif@gmail.com" label="Date From" />
      <Input type="date" placeholder="eg:3067250955" label="Date To" />
      <Input type="text" placeholder="eg: Web Developer" label="Your Role" />
      <MultiSelect label="Tech I Worked on" :data="languages" />
      <Select label="Job Type" :option="jobType" />
      <Checkbox id="workhis" label="Currently Working Here" />
<!--      <Test />-->
    </div>

    <button @click="setForm()" type="button" :class="styles" class="px-4 py-2 rounded hover:scale-95 text-white mt-8 hover:text-white transition-all bg-emerald-600">
      Add More Experience
    </button>
 
  </div>
</template>

<script>
import {onMounted,ref} from 'vue';
import Input from "../Input.vue";
import Select from "../Select.vue";
import { v4 as uuidv4 } from 'uuid';

import Checkbox from "../Checkbox.vue";
import Button from "../Button.vue";
import MultiSelect from "../MultiSelect.vue"; 
import Test from '../Test.vue';
const languages = ref([]);
import axios from 'axios'; 

const fromList = ref([{
    id:'',
    company:'',
    email:'',
    from_date:'',
    to_date : '',
    role:'',
    tech:[],
    job_type:'',
    work_history:null

  }]);
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
        option : 'Bachelor'
      }
    ];
    const major = [
      {
        id:1,
        option : 'Science'
      }
    ];
    const jobType = [{id:1,option:'Permanent' },{id:2,option:'Contract'}];

onMounted(() => {
axios.get('http://localhost:3000/languages')
  .then((response) => {
    languages.value = response.data;
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})


function setForm(){
  fromList.value = [...fromList.value, {
    id:uuidv4(),
    company:'',
    email:'',
    from_date:'',
    to_date : '',
    role:'',
    tech:[],
    job_type:'',
    work_history:null

  }]

console.log(fromList.value, '.....');
}

function removeForm(id){
     if (fromList.value.includes(id)) {
       fromList.value.splice(fromList.value.indexOf(id), 1);
     }
   
}

    return {
      degree,
      major,
      jobType,
      languages,
      setForm,
      fromList,
      removeForm
    }
  }
}



</script>

<style lang="scss" scoped>

</style>