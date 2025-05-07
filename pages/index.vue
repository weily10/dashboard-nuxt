<script setup>
// import { useCounterStore } from '../stores/theme'


//  const store = useCounterStore()

definePageMeta({
    middleware: ['authenticated'],
})

</script>

<template>
    <div>
        <h1 class="mb-3"> </h1>
        <div class="grid grid-flow-col gap-3 ">
            <Card>
                <div class="flex justify-center flex-col items-center gap-2">
                    <h4 class="flex  items-center justify-content-center">
                        <span class=" rounded-full bg-red-800 w-[0.5rem] h-[0.5rem]">
                        </span>
                        <span class="ps-2 card-title-1">手機完成驗證數
                        </span>
                    </h4>
                    <div class="text-3xl">
                        3,658.7萬
                    </div>
                    <div class="text-danger mt-3 ">
                        <span class="fw-semibold  ">
                            <i class=" icon-double-down text-success "></i>
                            <span class=" font-support text-success fs-5 ">
                                -12%</span>
                        </span>
                        <span class="ps-1">
                            (對比上個時段)
                        </span>
                    </div>
                </div>
            </Card>
            <Card></Card>
            <Card></Card>
        </div>
    </div>
</template>