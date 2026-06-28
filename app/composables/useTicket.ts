import { ref } from "vue";
import { ticketService } from "~/services/ticket.service";
import type { Ticket, TicketStatus } from "~/types/tickets/ticket.type";

export function useTickets() {
  const tickets = ref<Ticket[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const page = ref(1);
  const perPage = ref(10);
  const totalPages = ref(1);
  const totalItems = ref(0);

  const searchQuery = ref("");
  const activeStatus = ref<TicketStatus>(null);

  const fetchTickets = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await ticketService.getTickets({
        Page: page.value,
        PerPage: perPage.value,
        Search: searchQuery.value || undefined,
        Status: activeStatus.value ?? undefined,
      });

      tickets.value = response.items || [];
      console.log("tickets updated:", response);
      console.log("tickets updated:", tickets.value.length);

      if (response) {
        page.value = response.page;
        perPage.value = response.perPage;
        totalItems.value = response.total;
        totalPages.value = response.totalPages;
      }
    } catch (err: any) {
      error.value =
        err?.response?._data?.message ||
        err?.message ||
        "خطایی در دریافت اطلاعات رخ داده است";
      tickets.value = [];
      totalItems.value = 0;
      totalPages.value = 1;
    } finally {
      isLoading.value = false;
    }
  };

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages.value) {
      page.value = newPage;
      fetchTickets();
    }
  };

  const changeStatus = (status: TicketStatus) => {
    activeStatus.value = status;
    page.value = 1;
    fetchTickets();
  };

  const changeSearch = (query: string) => {
    searchQuery.value = query;
    page.value = 1;
    fetchTickets();
  };

  return {
    tickets,
    isLoading,
    error,
    page,
    totalPages,
    totalItems,
    searchQuery,
    activeStatus,
    fetchTickets,
    changePage,
    changeStatus,
    changeSearch,
  };
}
