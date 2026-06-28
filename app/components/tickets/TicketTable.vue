<template>
    <div class="w-full mt-8">
        <div class="md:hidden space-y-4">
            <template v-if="loading">
                <div v-for="i in 3" :key="'skeleton-mob-' + i"
                    class="bg-white p-5 rounded-2xl border border-gray-100 animate-pulse space-y-4">
                    <div class="flex justify-between items-center">
                        <div class="h-4 bg-gray-200 rounded-lg w-1/4"></div>
                        <div class="h-5 bg-gray-200 rounded-full w-1/5"></div>
                    </div>
                    <div class="h-4 bg-gray-200 rounded-lg w-3/4"></div>
                    <div class="flex justify-between items-center pt-3 border-t border-gray-50">
                        <div class="h-3 bg-gray-200 rounded-lg w-1/4"></div>
                        <div class="h-3 bg-gray-200 rounded-lg w-1/3"></div>
                    </div>
                </div>
            </template>

            <template v-else-if="tickets.length === 0">
                <div
                    class="bg-white p-12 text-center text-gray-400 text-xs font-bold font-peyda rounded-2xl border border-gray-100">
                    <div class="flex flex-col items-center gap-2">
                        <span>تیکتی با این مشخصات یافت نشد.</span>
                    </div>
                </div>
            </template>

            <template v-else>
                <div v-for="ticket in tickets" :key="'mob-' + ticket.id" @click="$emit('view', ticket.id)"
                    class="bg-white p-5 rounded-2xl border border-gray-100 active:bg-gray-50 transition-colors cursor-pointer space-y-3">
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-bold text-primary-500 tabular-nums font-inter">#{{ ticket.id
                            }}</span>
                        <TicketStatusBadge v-if="ticket.fkStatusId && TICKET_STATUS_MAP[ticket.fkStatusId]"
                            :status="ticket.fkStatusId" :label="ticket.statusTitle" />
                    </div>

                    <h3 class="text-xs font-black text-gray-800 font-peyda-bold line-clamp-2 leading-relaxed">
                        {{ ticket.title }}
                    </h3>

                    <div
                        class="flex justify-between items-center pt-3 border-t border-gray-50 text-[11px] font-bold text-gray-500 font-peyda">
                        <span>{{ ticket.departmentTitle }}</span>
                        <span class="text-[10px] text-gray-400 tabular-nums font-inter">{{
                            ticket.persianModifiedDateTime }}</span>
                    </div>
                </div>
            </template>
        </div>

        <div class="hidden md:block bg-white rounded-3xl border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-right border-collapse">
                    <thead>
                        <tr
                            class="border-b border-gray-100 text-[10px] font-black text-gray-400 uppercase font-peyda-bold">
                            <th class="p-6">شناسه / موضوع تیکت</th>
                            <th class="p-6">دپارتمان</th>
                            <th class="p-6">وضعیت</th>
                            <th class="p-6 text-left">آخرین بروزرسانی</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-50">
                        <template v-if="loading">
                            <tr v-for="i in 3" :key="'skeleton-dt-' + i" class="animate-pulse">
                                <td v-for="j in 4" :key="'cell-' + j" class="p-6">
                                    <div class="h-4 bg-gray-200 rounded-lg w-2/3 my-1"></div>
                                </td>
                            </tr>
                        </template>

                        <template v-else-if="tickets.length === 0">
                            <tr>
                                <td colspan="4" class="p-12 text-center text-gray-400 text-xs font-bold font-peyda">
                                    <div class="flex flex-col items-center gap-2">
                                        <span>تیکتی با این مشخصات یافت نشد.</span>
                                    </div>
                                </td>
                            </tr>
                        </template>

                        <template v-else>
                            <tr v-for="ticket in tickets" :key="ticket.id" @click="$emit('view', ticket.id)"
                                class="group hover:bg-primary-500/2 transition-colors cursor-pointer">
                                <td class="p-6">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-[10px] font-bold text-primary-500 tabular-nums font-inter">
                                            #{{ ticket.id }}
                                        </span>
                                        <span
                                            class="text-xs font-black text-gray-800 group-hover:text-primary-500 transition-colors font-peyda-bold">
                                            {{ ticket.title }}
                                        </span>
                                    </div>
                                </td>

                                <td class="p-6">
                                    <span class="text-[11px] font-bold text-gray-500 font-peyda">
                                        {{ ticket.departmentTitle }}
                                    </span>
                                </td>

                                <td class="p-6">
                                    <div v-if="ticket.fkStatusId && TICKET_STATUS_MAP[ticket.fkStatusId]"
                                        class="flex items-center gap-2">
                                        <TicketStatusBadge :status="ticket.fkStatusId" :label="ticket.statusTitle" />
                                    </div>
                                </td>

                                <td class="p-6 text-left">
                                    <div class="flex flex-col items-end gap-1">
                                        <span class="text-[10px] font-bold text-gray-400 tabular-nums font-inter">
                                            {{ ticket.persianModifiedDateTime }}
                                        </span>
                                        <button @click.stop="$emit('view', ticket.id)"
                                            class="text-[9px] font-black text-primary-500 bg-primary-500/10 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 font-peyda-bold">
                                            مشاهده گفتگو
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TICKET_STATUS_MAP } from '~/constants/ticket';
import type { Ticket } from '~/types/tickets/ticket.type';
import TicketStatusBadge from './TicketStatusBadge.vue';

defineProps<{
    tickets: Ticket[];
    loading: boolean;
}>();

defineEmits<{
    (e: 'view', id: number): void;
}>();
</script>