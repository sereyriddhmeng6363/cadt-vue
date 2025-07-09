<template>
  <header class="p-4 bg-black text-white flex justify-between items-center">
    <h1 class="text-xl font-bold">My Portfolio</h1>

    <nav class="space-x-4">
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/about">{{ $t('nav.about') }}</router-link>
      <router-link to="/projects">{{ $t('nav.projects') }}</router-link>
      <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
    </nav>

    <div class="space-x-2">
      <button @click="$i18n.locale = 'en'" class="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">EN</button>
      <button @click="$i18n.locale = 'km'" class="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">KM</button>
    </div>
  </header>
</template>