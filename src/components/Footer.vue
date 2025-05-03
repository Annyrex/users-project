<template>
  <footer class="bg-dark text-light py-4 mt-auto">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 mb-3">
          <h5>{{ appName }}</h5>
          <p>
            Your trusted source for the latest news across the globe. Stay informed with headlines,
            tech, business, and more.
          </p>
        </div>
        <div class="col-md-4 mb-3">
          <h6>Quick Links</h6>
          <ul class="list-unstyled">
            <li><RouterLink class="text-light text-decoration-none" to="/">Home</RouterLink></li>
            <li>
              <RouterLink class="text-light text-decoration-none" to="/news/category/business"
                >Business</RouterLink
              >
            </li>
            <li>
              <RouterLink class="text-light text-decoration-none" to="/news/category/technology"
                >Technology</RouterLink
              >
            </li>
            <li>
              <RouterLink class="text-light text-decoration-none" to="/about">About Us</RouterLink>
            </li>
            <li>
              <RouterLink class="text-light text-decoration-none" to="/contact"
                >Contact Us</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-3">
          <h6>Connect With Us</h6>
          <p>
            <a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-light me-3"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-light"><i class="bi bi-instagram"></i></a>
          </p>
          <p class="small">&copy; {{ currentYear }} {{ appName }}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer-',
  data() {
    return {
      appName: 'NewsSphere',
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
footer a:hover {
  text-decoration: underline;
}
</style>
