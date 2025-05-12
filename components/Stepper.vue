<script setup>
import { ref, onMounted } from 'vue'

const active = ref([])
const steps = ref([{ no: 1, desc: '第一步' }, { no: 2, desc: '第二步' }, { no: 3, desc: '第三步' }, { no: 4, desc: '第四步' }])


function onclick(n) {
    for (let i of steps.value) {
        if (!active.value[n]) {
            active.value[i.no] = ''
        }
    }
    active.value[n] = 'bg-purple-500 border-purple-200 text-white  border-4  '

}

onMounted(() => {
    active.value[1] = 'bg-purple-500 border-purple-200 text-white  border-4  '
})


</script>

<template>
    <div class="flex items-center w-full text-sm text-gray-500 font-medium sm:text-base">
        <template v-for="i in steps" :key="i">
            <div class="cursor-pointer  text-center " @click="onclick(i.no)">
                <div class="flex items-center whitespace-nowrap ">
                    <span :class="active[i.no]"
                        class="transition  duration-300 ease-in-out  w-7 h-7 bg-gray-200  rounded-full flex justify-center items-center mx-3 text-sm  sm:w-12 sm:h-12">
                        {{ i.no }}
                    </span>
                </div>
                <span class="pt-3">
                    {{ i.desc }}
                </span>
            </div>
            <div class="w-full   pb-3 relative" v-show="steps.length !== i.no">
                <hr class="h-px my-8 bg-gray-200 border-0 w-1 absolute"
                    :class="active[i.no + 1] ? 'transition-all duration-300 ease-in-out w-full bg-purple-500' : ''">
                <hr class="h-px my-8 bg-gray-200 border-0  w-full" style="z-index:1 !important">



            </div>
        </template>
    </div>
</template>

 