<script setup>
import { ref, watchEffect } from 'vue';
// import { useCounterStore } from '../stores/theme'
// import { createPinia } from 'pinia';

// const pinia = createPinia()
// const store = useCounterStore(pinia)

  
  
const viewPortWidth = ref(false)
const isOpen = ref(false)
const menuItems = ref([

  {
    title: "使用者中心",
    children: [
      { title: "主題標籤廣告", link: "/page1" },
      { title: "關鍵字廣告", link: "/themeAdv" },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        title: "Profile",
        link: "/settings/profile",
      },

      {
        title: "Security",
        subchildren: [
          { title: "Change Password", link: "/page3" },
          { title: "2FA Settings", link: "/page2" },
        ],
      },
    ],
  },
]);

watchEffect(() => {
  window.onresize = (e) => {
    // viewPortWidth.value = window.innerWidth
    if (window.innerWidth >= 1024) {
      isOpen.value = false
    }
  }

})

function showMenu() {
  return isOpen.value ? 'transform translate-x-0 transition-all duration-200' : '-translate-x-full transition-all duration-200'
}


function handleClick() {
  // store.setTitle('Home')
}


</script>

<template>
  <div class="h-[100vh]">
    <aside class=" px-3 border-r border-gray-200 w-[260px]  h-full bg-white max-lg:z-100  lg:hidden max-lg:absolute "
      :class="showMenu()">
      <div class="p-3 flex border-b-1 border-gray-200 justify-between items-center">
        <div class="font-bold  p-3 text-purple-700 mr-3 text-center cursor-pointer">
          <NuxtLink to="/" @click.prevent="handleClick()">
            NxTDash
          </NuxtLink>
        </div>
        <button type="button" class="btn cursor-pointer rounded-full px-1 flex items-center hover:bg-gray-200 h-[2rem]"
          @click="isOpen = !isOpen">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
      </div>
      <div v-for="(item, index) in menuItems" :key="index" class="pl-3">
        <MenuItem :item="item" :index="index" :level="0">
        </MenuItem>
      </div>
    </aside>
    <aside class="px-3  border-r border-gray-200 w-[260px]  h-[100vh] bg-white max-lg:z-100 max-lg:hidden fixed ">
      <div class="p-5 flex border-b-1 border-gray-200 justify-between items-center">
        <div class="font-bold   text-purple-700 mr-3 text-center cursor-pointer">
          <NuxtLink to="/" @click.prevent="handleClick()">
            NxTDash
          </NuxtLink>
        </div>

      </div>
      <div v-for="(item, index) in menuItems" :key="index" class="pl-3">
        <MenuItem :item="item" :index="index" :level="0">
        </MenuItem>
      </div>
    </aside>

    <div class="grow  bg-gray-50 min-lg:ps-[260px] h-[100vh]">
      <TopBar @showMenu="isOpen = !isOpen"></TopBar>
      <div class="px-5 py-3 ">
        <slot />
      </div>

    </div>
  </div>
</template>


<style scoped>
 

</style>