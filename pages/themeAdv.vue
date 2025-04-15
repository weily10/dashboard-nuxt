<script setup lang="ts">
import { useRoute } from 'vue-router'


const route = useRoute()
const modelTheme = ref()


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
            <div class="flex justify-end mt-5">
                <div class="w-[6rem]">
                    <Button label="確定"></Button>
                </div>
            </div>
        </Card>
    </div>
</template>