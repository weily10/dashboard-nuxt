<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => {
    const matchedRoutes = route.matched;
    let fullPath = "";
    
    return [{ name: "Home", path: "/" }].concat(
        matchedRoutes.map((matchedRoute) => {
            fullPath += matchedRoute.path.replace(/\/:/g, "/"); // Append to build the full path

            return {
                name: matchedRoute.meta.title || matchedRoute.name || "Unnamed",
                path: fullPath,
            };
        })
    );
});
</script>

<template>
    <nav class="breadcrumb py-2 text-sm">
        <ul class="flex space-x-2">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
                <NuxtLink
                    v-if="index < breadcrumbs.length - 1"
                    :to="crumb.path"
                    class="text-blue-500 hover:underline"
                >
                    {{ crumb.name }}
                </NuxtLink>
                <span v-else class="text-gray-500">{{ crumb.name }}</span>
                <span v-if="index < breadcrumbs.length - 1" class="mx-1 text-gray-400">/</span>
            </li>
        </ul>
    </nav>
</template>

<style>
.breadcrumb ul {
    list-style: none;
    padding: 0;
    display: flex;
}
</style>
