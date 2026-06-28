<template>
    <div
        class="flex items-center gap-2 bg-white/30 p-1.5 rounded-2xl border border-white/60 overflow-x-auto no-scrollbar">
        <button v-for="tab in tabs" :key="tab.value ?? 'all'" @click="handleTabClick(tab.value)" :class="[
            'px-5 py-2 text-[10px] cursor-pointer font-bold transition-all whitespace-nowrap',
            modelValue === tab.value ? 'bg-white text-primary-500 rounded-xl shadow-sm' : 'text-gray-500 hover:text-primary-500'
        ]">
            {{ tab.label }}
        </button>
    </div>
</template>

<script setup lang="ts">
import type { TicketStatus } from '~/types/tickets/ticket.type';

const props = defineProps<{
    modelValue: TicketStatus;
}>();

const emit = defineEmits<{
    (e: 'change', value: TicketStatus): void;
}>();

const tabs: { label: string; value: TicketStatus }[] = [
    { label: 'همه', value: null },
    { label: 'در انتظار پاسخ', value: 9 },
    { label: 'بسته شده', value: 12 }
];

const handleTabClick = (value: TicketStatus) => {
    if (props.modelValue === value) return;
    emit('change', value);
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>