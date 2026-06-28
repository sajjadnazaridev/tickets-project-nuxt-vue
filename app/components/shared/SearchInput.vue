<template>
    <div class="relative w-full md:w-64">
        <input v-model="searchQuery" type="text" :placeholder="placeholder"
            class="w-full bg-white/40 border border-white/60 rounded-2xl pl-10 pr-5 py-3 text-[11px] font-medium outline-none transition-all duration-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

withDefaults(defineProps<{
    placeholder?: string;
}>(), {
    placeholder: 'جستجو...'
});

const emit = defineEmits<{
    (e: 'debounce-search', value: string): void;
}>();

const searchQuery = ref('');
let timeoutId: ReturnType<typeof setTimeout> | null = null;

watch(searchQuery, (newValue) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        emit('debounce-search', newValue.trim());
    }, 500);
});
</script>