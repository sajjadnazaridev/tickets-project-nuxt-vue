<template>
    <header class="w-full bg-white border-b border-gray-100 sticky top-0 z-50">

        <div class="flex items-center justify-between px-6 py-3 gap-4">

            <div class="flex items-center gap-3">
                <button
                    class="flex items-center gap-2 text-sm font-black text-gray-700 hover:text-primary-500 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span class="font-peyda-bold">مگا منو</span>
                </button>
            </div>

            <div class="flex items-center gap-2">
                <div
                    class="flex items-center gap-1 bg-gray-100 rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                    <span class="text-xs font-black text-gray-700 font-peyda-bold">آرشیو محصولات</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </div>

            <div class="flex-1 max-w-xl">
                <div class="flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-2.5">
                    <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="جستجوی سراسری در محصولات ..."
                        class="bg-transparent w-full text-xs font-bold text-gray-700 placeholder:text-gray-400 outline-none font-peyda text-right" />
                </div>
            </div>

            <div class="flex items-center gap-3">
                <button
                    class="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>

                <button
                    class="flex items-center gap-2 text-xs font-black text-gray-700 hover:text-primary-500 transition-colors font-peyda-bold">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    ورود/ثبت‌نام
                </button>
            </div>

            <div class="flex items-center">
                <div class="w-16 h-10 flex items-center justify-center">
                    <span class="text-xl font-black text-primary-500 font-inter tracking-tight">MANA</span>
                </div>
            </div>

        </div>

        <div class="flex items-center justify-between px-6 py-2.5 border-t border-gray-50">

            <div class="flex items-center gap-1 text-xs text-gray-500 font-peyda">
                <svg class="w-3.5 h-3.5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.318a6.75 6.75 0 00-13.5 0c0 3.621 1.555 6.315 3.5 8.318a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd" />
                </svg>
                <span>ارسال به:</span>
                <span class="font-black text-gray-700 font-peyda-bold">تهران</span>
            </div>

            <nav class="flex items-center gap-6">
                <a href="#"
                    class="text-xs font-black text-gray-700 hover:text-primary-500 transition-colors font-peyda-bold">مگا
                    منو</a>

                <div class="flex items-center gap-1 cursor-pointer group">
                    <a href="#"
                        class="text-xs font-black text-gray-700 group-hover:text-primary-500 transition-colors font-peyda-bold">مگا
                        منو</a>
                    <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div class="flex items-center gap-1 cursor-pointer group">
                    <a href="#"
                        class="text-xs font-black text-gray-700 group-hover:text-primary-500 transition-colors font-peyda-bold">منوی
                        آبشاری</a>
                    <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <a href="#"
                        class="text-xs font-black text-gray-700 hover:text-primary-500 transition-colors font-peyda-bold">شگفت‌انگیزها</a>
                </div>

                <a href="#"
                    class="text-xs font-black text-gray-700 hover:text-primary-500 transition-colors font-peyda-bold">پرفروش‌ترین‌ها</a>

                <a href="#"
                    class="text-xs font-black text-gray-700 hover:text-primary-500 transition-colors font-peyda-bold">وبلاگ</a>
            </nav>

        </div>
    </header>
</template>

<script setup lang="ts">
</script>