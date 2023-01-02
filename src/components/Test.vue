<template>
  <div>

    <div class="relative">
      <div class="ring-1 cursor-pointer overflow-auto block px-2 py-2 text-sm w-full shadow focus:border-1 block focus:ring-1
 focus:ring-red-600 flex gap-x-2 ring:outline-1 text-gray-700 focus:outline-emerald-600 focus:border-red-400 focus:ring-red-600 rounded ring-gray-300" @click="setDropdown()" >
        <p>{{ arr.length <= 0 ? 'Languages' : '' }}</p>
        <p class="bg-emerald-100  px-2  rounded-full"    v-for="item in arr" :key="item.value"  @click="deleteItem(item)">
          {{ item.text }}</p>
      </div>
      <div :class="dropdown ? 'block' : 'hidden'" class="w-full min-h-16 py-2 px-2 absolute shadow rounded ring-1 ring-gray-200 bg-white top-10">
        <p     class="text-sm font-light text-gray-700 hover:bg-emerald-700 px-1 py-2 rounded hover:text-white cursor-pointer transition-all" v-for="item in options"  @click="setValue(item)"  :key="item.value" >
          {{ item.text }}
        </p>
      </div>

    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const dropdown = ref(false);

export default {
  setup() {
    const count = ref(0);
    const arr = ref([]);
    let selected = ref();
    let options = ref([
      {
        value: 1,
        text: "One",
      },
      {
        value: 2,
        text: "Two",
      },
      {
        value: 3,
        text: "Three",
      },
      {
        value: 4,
        text: "Four",
      },
      {
        value: 5,
        text: "Five",
      },
      {
        value: 6,
        text: "Six",
      },
      {
        value: 7,
        text: "Seven",
      },
    ]);

    function  setDropdown(){
      dropdown.value = !dropdown.value;
    }
    const setValue = (value) => {
      const num =  value;
      if (arr.value.includes(num.value)) {
        arr.value.splice(arr.value.indexOf(num.value), 1);
      } else {
        arr.value.push(num);
        options.value = options.value.filter((val) => {
          return !arr.value.find((val2) => {
            //  console.log({valueID:val.id+":"+val2.id});
            return val.value === val2.value;
          });
        });
        console.log(options.value);
        console.log(arr.value);
      }
    };
    const deleteItem = (item) => {
      if (arr.value.includes(item)) {
        arr.value.splice(arr.value.indexOf(item), 1);
        options.value.unshift(item);
        selected.value=''
      console.log('cool',options.value.sort((item,index) => item.id - index));
      }
    };

    // function setValue(value){
    //   selected.value = [...selected.value, value];
    //   dropdown.value = !dropdown.value;
    //
    // }
    return {
      count,
      selected,
      // changeLang,
      deleteItem,
      arr,
      options,
      setDropdown,
      dropdown,setValue
    };
  },
};
</script>
<style scoped>
select {
  margin-top: 10px;
}
.option {
  position: relative;
  background: red;
  padding: 4px 16px;
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  margin-left: 10px;
}
.close {
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  top: -8%;
  left: -8%;
  background: purple;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>







