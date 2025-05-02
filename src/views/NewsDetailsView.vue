<script setup>
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const selectedNews = computed(() => store.state.selectedNews)

onMounted(() => {
  store.dispatch('fetchNewsByUuid', route.params.uuid)
})

// Function to go back
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="container my-5 mb-5">
    <div v-if="selectedNews">
      <img
        v-if="selectedNews.image_url"
        :src="selectedNews.image_url"
        alt="News Image"
        class="img-fluid mb-3 mt-5"
      />

      <h2 class="mb-3">{{ selectedNews.title }}</h2>
      <p><strong>Published:</strong> {{ selectedNews.published_at }}</p>
      <p><strong>Source:</strong> {{ selectedNews.source }}</p>
      <p class="mt-3">{{ selectedNews.description }}</p>

      <!-- External link -->
      <a
        :href="selectedNews.url"
        target="_blank"
        class="btn btn-secondary mt-4"
      >
        Read Full Article
      </a>

      <!-- 👇 Go Back button at the bottom -->
      <div class="mt-4">
        <button class="btn btn-outline-secondary" @click="goBack">
          ← Go Back
        </button>
      </div>
    </div>

    <div v-else>
      <p>Loading news details...</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  background-color: #343a40; /* Dark background color */
}
</style>