<script setup >
const route = useRoute()

const { user, clear: clearSession } = useUserSession()


const isOpen = ref(false);
const handleFocusOut = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
        isOpen.value = false;
    }
};

const emit = defineEmits(['showMenu'])

async function logout() {
  await clearSession()
  await navigateTo('/login')
}

</script>

<template>
    <div class="w-full h-[4rem] border-b border-gray-200 flex justify-between place-items-center px-3 bg-white">
        <button type="button" class="rounded-full  cursor-pointer me-2 lg:hidden" @click="emit('showMenu')">
            <span class="material-symbols-outlined">
                menu
            </span>
        </button>
        <Input placeholder="search" class="me-2" />
        <div class="relative " @focusout="handleFocusOut">
            <div class="rounded-full flex justify-center items-center bg-purple-700 w-[40px] h-[40px] p-1 text-white cursor-pointer"
                @click="isOpen = !isOpen">
                W
            </div>
            <div v-show="isOpen"
                class="absolute w-50  top-full mt-2 p-3 bg-white shadow-sm shadow-md rounded transform -translate-x-[90%] text-sm z-2"
                tabindex="0">
                <div>
                    <h1 class="flex flex-wrap ">
                        Profile Info
                    </h1>
                    <hr class="border-gray-200 mt-3">
                    <div class="mt-3">
                        <p class="text-gray-500">王小明</p>
                    </div>
                </div>
                <div class="mt-3">
                    <Button label="logout" @onClick="logout"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
