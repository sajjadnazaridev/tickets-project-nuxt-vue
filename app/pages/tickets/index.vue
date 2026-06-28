<template>
    <div class="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
        <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
                <TicketStatusTab :model-value="activeStatus" @change="changeStatus" />
                
                <SearchInput placeholder="جستجو در تیکت ها..." @debounce-search="changeSearch" />
            </div>
        </div>

        <div v-if="error"
            class="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold p-4 rounded-2xl text-center">
            {{ error }}
        </div>

        <TicketTable :tickets="tickets" :loading="isLoading" />

        <TicketPagination :current-page="page" :total-pages="totalPages" @change-page="changePage" />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import SearchInput from '~/components/shared/SearchInput.vue';
import TicketPagination from '~/components/tickets/TicketPagination.vue';
import TicketStatusTab from '~/components/tickets/TicketStatusTab.vue';
import TicketTable from '~/components/tickets/TicketTable.vue';
import { useTickets } from '~/composables/useTicket';

const {
    tickets,
    isLoading,
    error,
    page,
    totalPages,
    activeStatus,
    fetchTickets,
    changePage,
    changeStatus,
    changeSearch,
} = useTickets();

onMounted(() => {
    fetchTickets();
});
</script>