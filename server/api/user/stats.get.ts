export default defineEventHandler(async (event) => {

    const { user } = await requireUserSession(event)

     
    return {
        username: user
    }
});