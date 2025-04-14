<script setup>
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
const route = useRoute()
 
 

onMounted(()=>{
  console.log('dasdasdas',route);
})

</script>


<template>
  <div class="w-[100%]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scope></style>
