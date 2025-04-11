<script setup >
const route = useRoute()



const isOpen = ref(false);
const handleFocusOut = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
        isOpen.value = false;
    }
};

</script>

<template>
    <div class="w-full h-[4rem] border-b border-gray-200 flex justify-between place-items-center px-3 bg-white">
        <Input placeholder="search" />
        <div class="relative " @focusout="handleFocusOut">
            <div class="rounded-full flex justify-center items-center bg-purple-700 w-[40px] h-[40px] p-1 text-white cursor-pointer"
                @click="isOpen = !isOpen">
                W
            </div>
            <div v-if="isOpen"
                class="absolute w-50  top-full mt-2 p-3 bg-white shadow-sm shadow-md rounded transform -translate-x-[90%] text-sm"
                tabindex="0">
                <div>
                    <h1 class="flex flex-wrap ">
                        Profile Info
                    </h1>
                    <hr class="border-gray-200">
                    <div>
                        desc

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
