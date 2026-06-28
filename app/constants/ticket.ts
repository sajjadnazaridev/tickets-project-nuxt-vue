export const TICKET_STATUS_MAP = {
  9: {
    label: "در انتظار پاسخ",
    colorClass: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
    textClass: "text-amber-600 dark:text-amber-400",
  },
  10: {
    label: "در حال بررسی",
    colorClass: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]",
    textClass: "text-blue-600 dark:text-blue-400",
  },
  11: {
    label: "پاسخ داده شده",
    colorClass: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
    textClass: "text-emerald-600 dark:text-emerald-400",
  },
  12: {
    label: "بسته شده",
    colorClass: "bg-gray-400 shadow-[0_0_8px_rgba(156,163,175,0.5)]",
    textClass: "text-gray-500 dark:text-gray-400",
  },
} as const;
