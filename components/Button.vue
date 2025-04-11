<script setup >
defineProps({
    label: String
})

</script>

<template>
    <button class="w-full bg-purple-700 p-2 text-white rounded-md   cursor-pointer text-sm" type="button">
        {{ label }}
    </button>
</template>
