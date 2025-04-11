<script setup >
// import { useCounterStore } from '../stores/theme'
import { onMounted } from 'vue';

// const store = useCounterStore()
const route = useRoute()
const router = useRouter()
const props = defineProps({
  item: Object,
  level: Number,
  index: Number,
  menuItems: Object,
  level: Number
});
const isOpen = ref(false);





function isActive(link) {

  return route.path === link
}

function openMenu(index, level) {
  localStorage.setItem('index', index)
  localStorage.setItem('level', level)
  isOpen.value = !isOpen.value
}


function isActiveMenu() {
  let index = localStorage.getItem('index')
  let level = localStorage.getItem('level')
  if (route.path != '/') {
    if (index == props.index) {

      if (props.item.subchildren && level == '2') {
        console.log('true', props.item.subchildren, level);
        isOpen.value = true
      } else {
        if (props.item.subchildren && level !== '2') {
          isOpen.value = false
        } else {
          isOpen.value = true
        }
      }
    }
  }
}


onMounted(() => {
  isActive()
  isActiveMenu()

  // isActiveMenu()
})

</script>

<template>
  <div class="cursor-pointer flex justify-between  hover:text-purple-700  place-items-center h-[3rem]"
    @click="openMenu(props.index, props.level)">
    <NuxtLink v-if="props.item.link" :to="props.item.link"
      class="w-[220px] block h-[3rem] flex place-items-center duration-300 rounded-md px-3"
      :class="isActive(props.item.link) ? 'bg-purple-700  text-white hover:text-white rounded-md  ' : ''">
      {{ props.item.title }}
    </NuxtLink>

    <span v-else class="w-full">{{ props.item.title }}</span>

    <span v-if="props.item.children || props.item.subchildren" class="text-sm transform duration-300 "
      :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen }">
      <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
        fill="#1f1f1f">
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"
        :class="{ 'rotate-0': isOpen, 'rotate-360': !isOpen }">
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
      </svg>
    </span>
  </div>
  <transition name="slide">
    <div v-show="isOpen" class="overflow-hidden">
      <div v-for="(child, index1) in props.item.children || props.item.subchildren" :key="index1">
         <MenuItem :item="child" :index="index" :level="props.item.subchildren ? 2 : 1" />
      </div>
    </div>
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.2s linear, 0.2s linear;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;

}

.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  /* Adjust based on content */

}
</style>