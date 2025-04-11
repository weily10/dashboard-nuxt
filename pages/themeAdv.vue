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
            <div class="flex gap-3 flex-wrap w-full">
                <Input label="主題名稱" :isRequired="true" placeholder="主題名稱" v-model:model="modelTheme"></Input>
                <Input label="主題名稱" :isRequired="true" placeholder="主題名稱" v-model:model="modelTheme"></Input>
                <Input label="主題名稱" :isRequired="true" placeholder="主題名稱" v-model:model="modelTheme"></Input>
                <Input label="主題名稱" :isRequired="true" placeholder="主題名稱" v-model:model="modelTheme"></Input>
            </div>
            <div class="flex justify-end mt-5">
                <div class="w-[6rem]">
                    <Button label="確定"></Button>
                </div>
            </div>
        </Card>
    </div>
</template>