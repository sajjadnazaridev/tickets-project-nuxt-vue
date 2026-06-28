<template>
    <div v-if="totalPages > 1" class="p-6 border-t border-gray-100 flex items-center justify-center gap-2">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
            class="w-8 h-8 rounded-xl flex items-center justify-center border border-gray-200 text-gray-400 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-400 disabled:cursor-not-allowed">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <button v-for="p in visiblePages" :key="p" @click="goToPage(p)" :class="[
            'w-8 h-8 rounded-xl text-[10px] font-black font-inter transition-all',
            currentPage === p
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                : 'text-gray-400 hover:bg-gray-100'
        ]">
            {{ p }}
        </button>

        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
            class="w-8 h-8 rounded-xl flex items-center justify-center border border-gray-200 text-gray-400 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-400 disabled:cursor-not-allowed">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    currentPage: number;
    totalPages: number;
}>();

const emit = defineEmits<{
    (e: 'changePage', page: number): void;
}>();

const visiblePages = computed(() => {
    const total = props.totalPages;
    const current = props.currentPage;
    const delta = 1;

    let start = Math.max(1, current - delta);
    let end = Math.min(total, current + delta);

    if (end - start < 2) {
        if (start === 1) {
            end = Math.min(total, start + 2);
        } else {
            start = Math.max(1, end - 2);
        }
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
});

const goToPage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
        emit('changePage', page);
    }
};
</script>