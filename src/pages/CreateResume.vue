<template>
  <div class="w-full h-auto mt-12">
  <div class="max-w-6xl mx-auto">
    <div class="flex gap-x-2">
      <div v-for="(tab, index)  in tabs" :key="tab.icon" @click="setForm(index)" :class="activeForm >= index ? 'bg-emerald-100' : '' " class="hover:bg-emerald-50 cursor-pointer  inline-flex items-center justify-center py-1 rounded-full px-4">
        <span><i :class="tab.icon" class=" text-sm text-emerald-600"></i></span>
        <span class="ml-4 text-emerald-600 text-sm">{{ tab.title }}</span>
      </div>
    </div>

<form>
<BasicInfo :activeForm="activeForm" />
<WorkHis :activeForm="activeForm" />
<Button :state="activeForm" text="Next" type="button" styles="bg-emerald-600 text-white hover:text-white mt-6 px-6" />

</form>
  </div>
  </div>
</template>

<script>
import BasicInfo from "../components/Form/BasicInfo.vue";
import WorkHis from "../components/Form/WorkHis.vue";
import {ref} from "vue";
import Input from "../components/Input.vue";
import Select from "../components/Select.vue";
import Button from "../components/Button.vue";
const activeForm = ref(1);
export default {
  components:{
    Input,
    Select,
    Button,
    BasicInfo,
    WorkHis
  },
  setup() {

    const tabs = [
        {
          icon:'fa fa-user',
          title:'Basic Information'
        },
      {
        icon:'fa fa-tasks',
        title:'Work History'
      },
       {
        icon:'fa fa-graduation-cap',
        title:'Education'
      },
      {
        icon:'fa fa-cogs',
        title:'Skills'
      },
      {
        icon:'fa fa-square',
        title:'Projects'
      },
      {
        icon:'fa fa-check',
        title:'Done'
      }
    ]


    function  setForm(index){
      activeForm.value = index;
    }

    return {
      tabs,
      setForm,
      activeForm
    }
  }
}
</script>

<style lang="scss" scoped>

</style>