<script setup>
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const selectedNews = computed(() => store.state.selectedNews)
const loading = computed(() => store.state.loading)

onMounted(() => {
  store.dispatch('fetchNewsByUuid', route.params.uuid)
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="container my-5 mb-5">
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else-if="selectedNews">
      <img
        v-if="selectedNews.image_url"
        :src="selectedNews.image_url"
        alt="News Image"
        class="img-fluid mb-3 mt-3"
      />

      <h2 class="mb-3">{{ selectedNews.title }}</h2>
      <p><strong>Published:</strong> {{ selectedNews.published_at }}</p>
      <p><strong>Source:</strong> {{ selectedNews.source }}</p>
      <p class="mt-3">{{ selectedNews.description }}</p>

      <a :href="selectedNews.url" target="_blank" class="btn btn-secondary mt-4">
        Read Full Article
      </a>

      <div class="mt-4">
        <button class="btn btn-outline-secondary" @click="goBack">← Go Back</button>
      </div>
    </div>

    <div v-else class="text-center my-5">
      <p>News details could not be loaded. Please try again.</p>
      <button class="btn btn-outline-secondary" @click="goBack">← Back to News</button>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 10px;
  max-height: 500px;
  object-fit: cover;
  width: 100%;
}
</style>
