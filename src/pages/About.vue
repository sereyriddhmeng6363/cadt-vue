<template>
  <section class="max-w-4xl mx-auto px-6 py-16 bg-black text-white rounded-lg shadow-lg">
    <h2 class="text-4xl font-extrabold mb-6 text-center text-white">About Me</h2>

    <div class="text-lg space-y-4">
      <p>
        {{ $t('about.hi') }} <span class="font-semibold text-blue-400">{{ $t('about.name') }}</span>{{ $t('about.hold') }}<span class="font-semibold text-blue-400">{{ $t('about.degree') }}</span>{{ $t('about.from') }}
        <span class="font-semibold text-blue-400">{{ $t('about.school') }}</span>
      </p>

      <p>
        {{ $t('about.like') }}
      </p>

      <ul class="list-none space-y-2">
        <li class="flex items-center">
          <span class="text-blue-500 mr-2">•</span> Vue.js
        </li>
        <li class="flex items-center">
          <span class="text-blue-500 mr-2">•</span> JavaScript
        </li>
        <li class="flex items-center">
          <span class="text-blue-500 mr-2">•</span> HTML5 & CSS3 / Tailwind CSS
        </li>
        <li class="flex items-center">
          <span class="text-blue-500 mr-2">•</span> Responsive & Mobile-first Design
        </li>
      </ul>
    </div>
  </section>
</template>