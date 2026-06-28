<template>
    <div class="min-h-screen flex flex-col">
        <TheHeader />
        <main class="grow">
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';
</script>

<style></style>