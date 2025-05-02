<template>
  <div>
    <NavBar />
   
    <div class="container mt-4">

      <router-view />
    </div>

    <!-- Back-to-top Button -->
    <button
      v-if="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
    >
      ↑
    </button>
  </div>
    <div>
     <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  if (window.scrollY > 300) {
    showBackToTop.value = true
  } else {
    showBackToTop.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Global styles for the whole app */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  min-height: 100%;  
  background: linear-gradient(to bottom, skyblue, white);
  background-size: 100% 100%;
  background-attachment: fixed; 
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1; 
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 20px;  /* Adjust this to set the vertical position */
  left: 50%;     /* Center horizontally */
  transform: translateX(-50%);  /* Correct for the 50% offset */
  font-size: 3rem;  /* 3 times the original size */
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
