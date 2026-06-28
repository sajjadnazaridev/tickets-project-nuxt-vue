# Ticket Support Panel — IranPart Frontend Test

پروژه‌ی تست فنی فرانت‌اند، پیاده‌سازی صفحه‌ی «تیکت‌های پشتیبانی» با Nuxt 3 و Tailwind CSS v4.

---

## نصب و اجرا

```bash
# نصب وابستگی‌ها
npm install

# اجرا در محیط development
npm run dev
```

پروژه روی `http://localhost:3000` بالا میاد.

**نسخه‌های مورد نیاز:**

- Node.js: `v18+`
- Nuxt: `v3.x`
- Package Manager: `npm`

---

## ساختار پروژه

```
app/
├── assets/
│   ├── css/
│   │   └── main.css          # تنظیمات Tailwind و فونت‌ها
│   └── fonts/
│       ├── inter/            # فونت Inter برای اعداد و متن لاتین
│       └── payda/            # فونت Peyda برای متن فارسی
│
├── components/
│   ├── shared/
│   │   └── SearchInput.vue   # کامپوننت جستجو با debounce
│   └── tickets/
│       ├── TicketTable.vue       # جدول اصلی نمایش تیکت‌ها
│       ├── TicketStatusBadge.vue # badge وضعیت (reusable)
│       ├── TicketStatusTab.vue   # تب‌های فیلتر وضعیت
│       └── TicketPagination.vue  # پیجینیشن
│
├── composables/
│   └── useTicket.ts          # تمام logic مربوط به تیکت‌ها
│
├── constants/
│   └── ticket.ts             # mapping وضعیت‌ها و label‌ها
│
├── layouts/
│   ├── TheAppLayout.vue      # layout اصلی
│   ├── TheHeader.vue         # هدر
│   └── TheFooter.vue         # فوتر
│
├── pages/
│   ├── index.vue             # صفحه‌ی اصلی
│   └── tickets/
│       └── index.vue         # صفحه‌ی تیکت‌ها
│
├── services/
│   ├── api.ts                # instance اصلی axios
│   └── ticket.service.ts     # سرویس تیکت‌ها
│
└── types/
    └── tickets/
        └── ticket.type.ts    # تمام typeها و interfaceها
```

---

## API و نحوه‌ی فراخوانی

**Base URL:** `http://api.fixent.ir/api`

**Endpoint:** `GET /Ticket/user-tickets`

**پارامترها:**

| پارامتر | نوع | توضیح |
|---|---|---|
| `Page` | number | شماره صفحه (پیش‌فرض: ۱) |
| `PerPage` | number | تعداد آیتم در هر صفحه (پیش‌فرض: ۱۰) |
| `Search` | string (optional) | جستجو در تیکت‌ها |
| `Status` | number (optional) | فیلتر وضعیت: 9، 10، 11، 12 |

**جریان فراخوانی API:**

```
pages/tickets/index.vue
    └── useTicket.ts (composable)
            └── ticket.service.ts (service)
                    └── api.ts (axios instance)
                            └── http://api.fixent.ir/api/Ticket/user-tickets
```

هیچ درخواست مستقیم API‌ای داخل کامپوننت‌ها وجود نداره. همه چیز از طریق service و composable مدیریت میشه.

---

## تصمیمات فنی

**چرا Axios به جای $fetch؟**

از `axios` برای مدیریت درخواست‌ها استفاده شده، چون interceptor نوشتن باهاش راحت‌تره و response transformation رو یه جا مدیریت میکنه. interceptor به شکلی تنظیم شده که فقط `data.data` از response برگردونه و کامپوننت‌ها با raw response سروکار نداشته باشن.

**چرا composable به جای Pinia؟**

داده‌های تیکت‌ها state جهانی نیستن و فقط در یه صفحه استفاده میشن، پس یه `useTicket` composable کافیه و overhead اضافه‌ی Pinia رو نداریم.

**Debounce روی Search**

فیلد جستجو با debounce پیاده‌سازی شده تا به ازای هر کاراکتر درخواست نزنه و فشار روی API کاهش پیدا کنه.

**فونت‌ها داخل assets**

فونت‌های Inter و Peyda داخل `assets/fonts` قرار گرفتن (نه `public`) تا Vite بتونه hash‌گذاری و cache busting رو به صورت خودکار انجام بده.

**Mapping وضعیت‌ها**

وضعیت‌های تیکت (9، 10، 11، 12) در یه constant جداگانه (`constants/ticket.ts`) به label و رنگ map شدن. اینطوری اگه وضعیت جدیدی اضافه بشه، فقط یه جا تغییر میده.

**TypeScript**

تمام typeها و interfaceها داخل `types/tickets/ticket.type.ts` تعریف شدن:
- `Ticket`
- `TicketStatus`
- `PaginationMeta`
- `TicketsResponse`
- `GetTicketsParams`

---

## اگه وقت بیشتری داشتم...

- **Query String Sync:** وضعیت صفحه، جستجو و فیلتر رو با URL sync میکردم تا کاربر بتونه لینک صفحه رو share کنه یا با دکمه back مرورگر به همون state برگرده.
- **Infinite Scroll:** به جای یا کنار pagination، یه گزینه‌ی infinite scroll هم اضافه میکردم برای تجربه‌ی بهتر موبایل.
- **Cache:** نتایج جستجو و صفحات قبلی رو cache میکردم تا دوباره درخواست نزنه.
- **Accessibility:** focus management روی جدول و keyboard navigation رو بهتر میکردم.
- **futurebase folder structure in nuxt:** پروژه رو بر اساس معماری فیچربیس پیاده سازی میکردم چون مناسب پنل هست و انعطاف بالا در توسعه و مدیریت پروژه های پیچیده داره