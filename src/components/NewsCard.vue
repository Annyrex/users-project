<template>
  <div class="card mb-4">
    <img :src="image_url" class="card-img-top" alt="News Image" v-if="image_url">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="card-text text-muted"><strong>Category:</strong> {{ categories }}</p>
      <router-link :to="`/news/${uuid}`" class="btn btn-primary">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    uuid: {
      type: String,
      required: true
    },
    image_url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    categories: {
      type: String,
      default: 'General'
    }
  }
}
</script>

<style scoped>
.card {
  background: linear-gradient(135deg, #ffffff, #d3d3d3); /* Gradient from white to ash */
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 400px;
  width: 100%;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
