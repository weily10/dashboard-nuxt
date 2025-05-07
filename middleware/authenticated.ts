export default defineNuxtRouteMiddleware(() => {
   
    const { loggedIn } = useUserSession()
    console.log('asaa',useUserSession());
    
    if (!loggedIn.value) {
        return navigateTo('/login')
    }
})