<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isNavbarVisible = ref(true) // State to track navbar visibility

// Function to handle scroll events
const handleScroll = () => {
  if (window.scrollY > 50) {
    isNavbarVisible.value = false; // Hide navbar when scrolling down
  } else {
    isNavbarVisible.value = true; // Show navbar when at the top of the page
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll) // Attach scroll event listener
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll) // Clean up event listener
})
</script>

<template>
  <nav :class="['navbar', 'navbar-expand-lg', 'navbar-light', 'mb-4', 'fixed-top', { 'd-none': !isNavbarVisible }]">
    <div class="container-fluid ">
      <router-link class="navbar-brand" to="/">
        📰 NewSphere
      </router-link>
      <p class="navbar-motto">Capturing the heartbeat of the latest news !!!🔥</p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-home"></i> <!-- Home Icon -->
              <span>Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category/business">
              <i class="fas fa-briefcase"></i> <!-- Business Icon -->
              <span>Business</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category/technology">
              <i class="fas fa-laptop"></i> <!-- Technology Icon -->
              <span>Technology</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="fas fa-users"></i> <!-- About Us Icon -->
              <span>About Us</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              <i class="fas fa-phone"></i> <!-- Contact Us Icon -->
              <span>Contact Us</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Make the navbar fixed at the top */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s ease; /* Smooth transition when hiding/showing */
}

/* Add padding to the body to prevent content being hidden under the fixed navbar */
body {
  padding-top: 80px; /* Adjust this value based on the height of your navbar */
}

/* Navbar background color */
.navbar-light {
  background-color: #ffffff; /* White background */
  color: #003366; /* Dark blue text */
}

/* Navbar text and link color */
.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: #003366; /* Dark blue */
}

/* Styling for the motto below the navbar brand */
.navbar-motto {
  color: #003366; /* Dark blue color */
  font-size: 1rem;
  margin: 0;
  padding-top: 5px;
  font-style: italic;
  display: inline-block; /* Keep the motto in a single line */
}

/* Center the nav items */
.navbar-nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* Navbar item styles */
.nav-item {
  margin-left: 20px;
  text-align: center;
}

/* Icon styling */
.nav-item i {
  font-size: 24px; /* Size of the icon */
  display: block;
  margin-bottom: 5px; /* Space between the icon and text */
}

/* Span styling for text */
.nav-item span {
  display: block;
  font-size: 14px; /* Size of the text */
  color: #003366; /* Dark blue text */
}

/* Link styling */
.nav-link {
  color: #003366 !important; /* Ensure the text color is dark blue */
  text-decoration: none;
}

/* Hover effect on links */
.nav-link:hover {
  color: #f1f1f1; /* Light color on hover */
}

/* Hover effect on navbar items */
.nav-item:hover {
  background-color: rgba(0, 51, 102, 0.2); /* Light blue hover effect */
}

/* When navbar is hidden, apply display none */
.d-none {
  display: none;
}
</style>
