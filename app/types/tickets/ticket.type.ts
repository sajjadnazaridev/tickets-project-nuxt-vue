export type TicketStatus = 9 | 10 | 11 | 12 | null;

export type PaginationMeta = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};

export interface TicketMessage {
  id: number;
  [key: string]: any;
}

export interface Ticket {
  id: number;
  title: string;
  description: string;

  fkDepartmentId: number;
  departmentTitle: string;

  fkStatusId: TicketStatus;
  statusTitle: string;

  fkOrderId: number | null;
  fkPriorityId: number;
  fkRegisterPersonId: number;

  isActive: boolean;
  isTrashed: boolean;

  messages: TicketMessage[];

  createDateTime: string;
  persianCreateDate: string;
  modifiedDateTime: string;
  persianModifiedDateTime: string;
}

export type GetTicketsParams = {
  Page: number;
  PerPage: number;
  Search?: string;
  Status?: TicketStatus;
};

export type TicketsResponse = {
  items: Ticket[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};

export interface TicketStatusInfo {
  status: TicketStatus;
  label: string;
  color: string;
}
