<template>
  <section class="text-center p-10">
    <img
      src="/src/assets/profile.jpg"
      alt="Profile"
      class="mx-auto rounded-full w-32 h-32 mb-4"
    />
    <h2 class="text-3xl font-bold">{{ $t('home.welcome') }}</h2>
    <p class="mt-2 text-lg">{{ $t('home.intro') }}</p>
    <router-link
      to="/projects"
      class="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded"
    >
      View Projects
    </router-link>
    <br>
<a
  href="https://github.com/sereyriddhmeng6363/cadt-vue"
  target="_blank"
  rel="noopener noreferrer"
  class="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded"
>
  View scource code
</a>
  </section>
</template>