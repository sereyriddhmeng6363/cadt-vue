<template>
  <section class="max-w-6xl mx-auto px-6 py-16 bg-black text-white">
    <h2 class="text-4xl font-extrabold mb-10 text-center">My Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 hover:scale-[1.03] transition transform duration-300"
      >
        <img
          :src="project.image"
          alt="Project Image"
          class="rounded-lg mb-4 w-full h-48 object-cover"
        />
        <h3 class="text-2xl font-semibold text-blue-400 mb-2">{{ project.title }}</h3>
        <p class="text-gray-300 mb-4">{{ project.description }}</p>
        <router-link
          :to="`/projects/${project.id}`"
          class="inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Read More
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Game Project',
          description: 'My Game Development Project.',
          image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/b52a47185064439.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg'
        },
        {
          id: 2,
          title: 'Mobile App Project',
          description: 'My Mobile App Development Project.',
          image: 'https://vtechpk.com/wp-content/uploads/2022/02/Custom-Mobile-App-Development.jpg'
        },
        {
          id: 3,
          title: 'AI Project',
          description: 'My AI Development Project.',
          image: 'https://cms.rootstack.com/sites/default/files/inline-images/Captura%20de%20pantalla%202023-07-28%20a%20la(s)%2017.22.21.jpg'
        }
      ]
    };
  }
};
</script>