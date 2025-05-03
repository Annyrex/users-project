<template>
  <div>
    <!-- Headline Section -->
    <div v-if="headlineNews" class="headline-section mb-5">
      <img :src="headlineNews.image_url" alt="Headline Image" class="headline-image" />
      <div class="headline-content text-center">
        <h1 class="headline-title mb-2">{{ headlineNews.title }}</h1>

        <!-- Subheading-style Category -->
        <div
          class="headline-category"
          v-if="headlineNews.categories && headlineNews.categories.length"
        >
          {{ formatCategory(headlineNews.categories[0]) }}
        </div>

        <p class="headline-description mt-3">{{ headlineNews.description }}</p>
      </div>
    </div>

    <!-- Latest News Section -->
    <div class="container">
      <h2 class="mb-4">Latest News</h2>

      <!-- Search Input -->
      <div class="mb-4">
        <input
          type="text"
          class="form-control"
          v-model="searchTerm"
          placeholder="Search news by title or keyword..."
        />
      </div>

      <div v-if="filteredNews.length === 0">
        <p class="text-muted">No news found matching your search.</p>
      </div>

      <div class="row" v-else>
        <div class="col-md-4 mb-4" v-for="item in filteredNews" :key="item.uuid">
          <NewsCard
            :uuid="item.uuid"
            :image_url="item.image_url"
            :title="item.title"
            :description="item.description"
            :categories="item.categories"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import NewsCard from '../components/NewsCard.vue'

const store = useStore()
const searchTerm = ref('')

const allNews = computed(() => store.state.allNews)
const headlineNews = computed(() => store.state.headlineNews)

// Filtered news based on search term
const filteredNews = computed(() => {
  if (!searchTerm.value.trim()) {
    return allNews.value
  }
  return allNews.value.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.value.toLowerCase()),
  )
})

const formatCategory = (category) => {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

onMounted(() => {
  store.dispatch('fetchAllNews')
  store.dispatch('fetchHeadlineNews')
})
</script>

<style scoped>
/* Headline Section */
.headline-section {
  width: 100%;
  background: linear-gradient(to bottom, white, skyblue);
  padding: 80px 20px 40px;
  margin-top: 80px;
  border-radius: 0 0 20px 20px;
}

.headline-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
}

.headline-content {
  color: #003366;
}

.headline-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.headline-category {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.headline-description {
  font-size: 1.1rem;
  color: #444;
}
</style>
