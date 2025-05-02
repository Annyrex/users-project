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

<template>
  <div class="container mt-5 mb-5">
    <h2>Contact Us</h2>
    <p>Have a question or want to advertise with us? Fill out the form below!</p>

    <div v-if="isSubmitted" class="alert alert-success" role="alert">
      ✅ Thank you! Your message has been sent.
    </div>

    <div v-if="hasError" class="alert alert-danger" role="alert">
      ❌ Something went wrong. Please try again.
    </div>

    <form 
      @submit="handleSubmit"
      action="https://formspree.io/f/xdkgargj" 
      method="POST"
    >
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" class="form-control" name="name" id="name" required>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" name="_replyto" id="email" required>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" name="message" id="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>
