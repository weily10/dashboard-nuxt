
<script setup >
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
    email: '',
    password: '',
})
const error = ref('')

definePageMeta({
    layout: 'auth'
})

async function login() {
    $fetch('/api/login', {
        method: 'POST',
        body: credentials
    })
        .then(async () => {
            console.log('sadsad',credentials);
            // Refresh the session on client-side and redirect to the home page
            await refreshSession()
            await navigateTo('/')
        })
        .catch(() => alert('Bad credentials'))
}


</script>

<template>
    <div>
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="login">
            <Input label="username" v-model:model="credentials.email"></Input>
            <Input type="password" label="password" v-model:model="credentials.password" class="mt-3"></Input>
            <div class="mt-4">
                <Button label="登入" :type="'submit'"></Button>
                <p v-show="error">{{ error }}</p>
            </div>
        </form>
        <p class="mt-3 text-sm text-gray-400">
            user: admin@admin.com / password: 12345678
        </p>

    </div>
</template>

