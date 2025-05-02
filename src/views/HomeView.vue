<script setup>
import { ref } from 'vue'
import Header from '@/components/HeaderComponent.vue'
const post = ref({
  id: 1,
  title: 'Daviv',
  body: 'My name is David',
})
</script>

<template>
  <div class="container mt-5 mb-5 vw-100">
    <Header title="Home View" description="welcome to my website!" />
    <h3>{{ post.id }}</h3>
    <h3>{{ post.title }}</h3>
    <h3>{{ post.body }}</h3>

    <input type="text" v-model="post.id" class="form-control" />
    <input type="text" v-model="post.title" class="form-control" />
    <textarea v-model="post.body" cols="30" rows="10" class="form-control"></textarea>
  </div>
</template>
