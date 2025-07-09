<template>
  <section class="p-10">
    <h2 class="text-2xl font-bold mb-4">Project {{ id }}</h2>
    <p>This is a placeholder page for project ID: {{ id }}</p>
  </section>
</template>

<script>
export default {
  props: ['id']
};
</script>