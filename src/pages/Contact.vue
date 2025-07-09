<template>
  <section class="max-w-2xl mx-auto px-6 py-16 bg-black text-white rounded-lg shadow-lg">
    <h2 class="text-4xl font-extrabold mb-8 text-center">Contact Me</h2>

    <form @submit.prevent="submitForm" class="space-y-6">
      <input
        v-model="name"
        type="text"
        placeholder="Name"
        class="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        v-model="message"
        placeholder="Message"
        rows="5"
        class="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        {{ $t('contact.submit') }}
      </button>

      <p v-if="submitted && isValid" class="text-green-500 text-center mt-4">{{ $t('contact.success') }}</p>
      <p v-if="submitted && !isValid" class="text-red-500 text-center mt-4">{{ $t('contact.error') }}</p>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  },
  computed: {
    isValid() {
      return this.name && this.email && this.message;
    }
  },
  methods: {
    submitForm() {
      this.submitted = true;
    }
  }
};
</script>