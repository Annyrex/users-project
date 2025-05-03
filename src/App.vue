<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <NavBar />

    <main class="flex-grow-1">
      <div class="container mt-4">
        <router-view />
      </div>
    </main>

    <Footer />

    <!-- Back-to-top Button -->
    <button
      v-if="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  min-height: 100%;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, skyblue, white);
  background-size: 100% 100%;
  background-attachment: fixed;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.back-to-top:hover {
  background-color: rgba(0, 123, 255, 0.1);
}
</style>
