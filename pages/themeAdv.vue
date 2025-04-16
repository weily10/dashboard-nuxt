<script setup lang="ts">
import { useRoute } from 'vue-router'


const route = useRoute()
const modelTheme = ref()
const isActive = ref([false])
const name = ref('')
function toggleAccordion(index: number) {
    console.log(isActive.value[index]);
    isActive.value[index] = !isActive.value[index]

    console.log(isActive.value[index]);


}

</script>

<template>
    <h1 class="mb-3 ">
        關鍵字廣告
    </h1>
    <div>
        <Card>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <Input label="主題名稱" :isRequired="true" placeholder="主題名稱" v-model:model="modelTheme" class="w-full"></Input>
                <Input label="策展主題名稱" :isRequired="true" placeholder="策展主題名稱" v-model:model="modelTheme"
                    class="w-full"></Input>
                <Input label="限用戶需於幾日內瀏覽相關文章" :isRequired="true" placeholder="限用戶需於幾日內瀏覽相關文章" v-model:model="modelTheme"
                    class="w-full"> </Input>
                <Input label="限瀏覽篇數達幾篇以上" :isRequired="true" placeholder="限瀏覽篇數達幾篇以上" v-model:model="modelTheme"
                    class="w-full"></Input>
            </div>
            <div class="border-b border-slate-200  mt-3">
                <button @click="toggleAccordion(0)"
                    class="w-full flex justify-between items-center py-5 text-slate-800 cursor-pointer ">
                    <span> 策展面向</span>
                    <span id="icon-1" class="text-slate-800 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path
                                d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
                    </span>
                </button>
                <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-200 ease-in-out "
                    :class="isActive[0] ? 'max-h-60' : ''">
                    <div class="py-3 text-sm text-slate-500 border-t border-slate-200">
                        <Input label="策展面向名稱 " :isRequired="true" placeholder="策展面向名稱 " v-model:model="name"
                            class="w-full"></Input>
                    </div>
                </div>
            </div>

            <div class="flex justify-end mt-5">
                <div class="w-[6rem]">
                    <Button label="下一步"></Button>
                </div>
            </div>
        </Card>

    </div>
</template>