<script setup>
// import { useCounterStore } from '../stores/theme'
// import { createPinia } from 'pinia';

// const pinia = createPinia()
// const store = useCounterStore(pinia)
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


function showMenu() {
  isOpen.value = !isOpen.value

  console.log(isOpen.value);
}


function handleClick() {
  // store.setTitle('Home')
}
</script>

<template>
  <div class="flex">
    <div class="px-3 pt-3 border-r border-gray-200 w-[260px]  h-[100vh] bg-white lg:hidden  max-lg:absolute" v-show="isOpen">
      <div class="flex border-b-1 border-gray-200 justify-between">
        <div class="font-bold  p-3 text-purple-700 mr-3 text-center cursor-pointer">
          <NuxtLink to="/" @click.prevent="handleClick()">
            NxTDash
          </NuxtLink>
        </div>
        <button type="button" class="btn cursor-pointer rounded-full px-1 flex items-center hover:bg-gray-200 h-[2rem]" @click="isOpen = !isOpen">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
      </div>
      <div v-for="(item, index) in menuItems" :key="index" class="pl-3">
        <MenuItem :item="item" :index="index" :level="0">
        </MenuItem>
      </div>
    </div>

    <div class="grow  bg-gray-50">
      <TopBar @showMenu="showMenu"></TopBar>
      <div class="px-5 py-3 ">
        <slot />
      </div>

    </div>
  </div>
</template>


<style scoped></style>