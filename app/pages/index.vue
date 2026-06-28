<template>
    <div>
        <button @click="goToTickets">go to ticket page</button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

const goToTickets = () => {
    router.push('/tickets')
}
</script>
