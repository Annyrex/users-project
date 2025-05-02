<script setup>
import { onMounted, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import NewsCard from '../components/NewsCard.vue'

const store = useStore()
const route = useRoute()

const category = computed(() => route.params.name)
const categoryNews = computed(() => store.state.categorizedNews)
const loading = computed(() => store.state.loading)

const fetchCategory = () => {
  store.dispatch('fetchNewsByCategory', category.value)
}

// Fetch on mount
onMounted(fetchCategory)

// Watch for route param change
watch(category, fetchCategory)
</script>


<template>
  <div class="container">
    <h2 class="text-capitalize mb-4">{{ category }} News</h2>

    <div v-if="loading">Loading...</div>
    <div v-else class="row">
      <div class="col-md-4 mb-4" v-for="item in categoryNews" :key="item.uuid">
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
</template>
