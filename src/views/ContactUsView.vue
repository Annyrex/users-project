<template>
  <div class="container py-5 my-5">
    <h2 class="mb-4 text-center fw-bold display-4">Contact Us</h2>
    <p class="mb-4 text-center fs-4">Have a question or want to advertise with us? Fill out the form below!</p>

    <div v-if="isSubmitted" class="alert alert-success text-center" role="alert">
      ✅ Thank you! Your message has been sent.
    </div>

    <div v-if="hasError" class="alert alert-danger text-center" role="alert">
      ❌ Something went wrong. Please try again.
    </div>

    <form 
      @submit="handleSubmit"
      action="https://formspree.io/f/xdkgargj" 
      method="POST"
      class="shadow-lg p-4 rounded bg-light"
    >
      <div class="mb-3">
        <label for="name" class="form-label fs-5 fw-semibold">Full Name</label>
        <input type="text" class="form-control custom-input" name="name" id="name" required>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label fs-5 fw-semibold">Email address</label>
        <input type="email" class="form-control custom-input" name="_replyto" id="email" required>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label fs-5 fw-semibold">Message</label>
        <textarea class="form-control custom-input" name="message" id="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-lg w-100">Send Message</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitted = ref(false)
const hasError = ref(false)

function handleSubmit(e) {
  e.preventDefault()

  isSubmitted.value = false
  hasError.value = false

  const form = e.target

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        isSubmitted.value = true
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    })
    .catch(() => {
      hasError.value = true
    })
}
</script>

<style scoped>
.custom-input {
  border: 2px solid #87cefa; /* Light blue */
  border-radius: 5px;
  box-shadow: none;
  transition: border-color 0.3s ease-in-out;
}

.custom-input:focus {
  border-color: #00aaff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 170, 255, 0.5);
}

h2 {
  color: #333;
}

p {
  color: #555;
}

button {
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0077cc;
}
</style>
