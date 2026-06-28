// services/ticket.service.ts
import apiClient from "~/services/api";

import type {
  GetTicketsParams,
  TicketsResponse,
} from "~/types/tickets/ticket.type";

export const ticketService = {
  async getTickets(params: GetTicketsParams): Promise<TicketsResponse> {
    return await apiClient.get("/Ticket/user-tickets", { params });
  },
};
