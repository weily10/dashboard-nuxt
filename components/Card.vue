<script setup>

</script>

<template>
    <div class="p-5   rounded-lg   border border-gray-200 bg-white grow">
        <slot>
            <div>
                <div class=" text-white w-100">
                    <h3 class="card-title-1  ">有效會員數
                    </h3>
                    <div class="  right-0 top-0 p-3">
                        <div class="rounded-full flex justify-center items-center bg-red-700 w-[40px] h-[40px] p-1  ">
                            W
                        </div>
                    </div>
                </div>
                <div class="mt-3 text-3xl">
                    3,658.7萬
                </div>
                <div class="mt-3 text-sm text-gray-400">
                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">

                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                            style=" top:106%;right: -10%;">
                            對比上個時段
                        </span>
                        <span class="text-red-500">
                            -12%
                        </span>
                    </div>

                </div>
            </div>
        </slot>
    </div>
</template>