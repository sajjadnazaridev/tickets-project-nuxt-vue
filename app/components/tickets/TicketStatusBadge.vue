<template>
    <div v-if="TICKET_STATUS_MAP[status!]" class="inline-flex items-center gap-2">
        <span :class="['w-2 h-2 rounded-full', TICKET_STATUS_MAP[status!].colorClass]"></span>
        <span :class="['text-[11px] font-black', TICKET_STATUS_MAP[status!].textClass]">
            {{ label || TICKET_STATUS_MAP[status!].label }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { TICKET_STATUS_MAP } from '~/constants/ticket';
import type { TicketStatus } from '~/types/tickets/ticket.type';

defineProps<{
    status: TicketStatus;
    label?: string;
}>();
</script>