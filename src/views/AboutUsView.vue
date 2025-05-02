<script setup>
</script>

<template>
  <div class="about-page py-5">
    <div class="container gradient-section py-4 px-3 rounded">
      <h2 class="mb-4 text-center text-success">About NEWSPULSE</h2>

      <p class="lead text-center custom-text">
       Founded in 2023, <strong>PulseNews</strong> was created to deliver fast, accurate, and unbiased news in business, technology, and world events. With a strong zeal for truth, our mission is to inform and empower readers through honest and insightful journalism.

Our vision is to be a trusted voice in digital media, inspiring change and connecting communities. In 2024, we received official recognition from the International Federation of Journalists (IFJ), confirming our status as a professional and ethical news platform.

At PulseNews, we don’t just report the news—we bring it to life.
      </p>

      <hr class="my-5 border-white" />

      <h3 class="text-center mb-4 text-success">Meet Our Team</h3>

      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mb-3 shadow-sm border-0 executive-card">
            <div class="card-body executive-text">
              <h5 class="card-title">Mrs. Anna Esioka</h5>
              <h6 class="card-subtitle mb-2 text-light">Chief Editor</h6>
              <p class="card-text fst-italic">
                Mrs. Anna Esioka leads our editorial team, ensuring the highest standards of journalism and accuracy.
              </p>
            </div>
          </div>

          <div class="card mb-3 shadow-sm border-0 executive-card">
            <div class="card-body executive-text">
              <h5 class="card-title">Ogbu David</h5>
              <h6 class="card-subtitle mb-2 text-light">Senior Correspondent</h6>
              <p class="card-text fst-italic">
                Ogbu David specializes in investigative journalism, delivering in-depth reports on current affairs.
              </p>
            </div>
          </div>

          <div class="card mb-3 shadow-sm border-0 executive-card">
            <div class="card-body executive-text">
              <h5 class="card-title">ENGR. Edwin Edison</h5>
              <h6 class="card-subtitle mb-2 text-light">Technology & Business Writer</h6>
              <p class="card-text fst-italic">
                Edwin Edison provides insightful analyses on the latest trends in technology and business. He is also a professional prompt engineer and senior developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: #ffffff;
}

/* Gradient background from sky blue to white */
.gradient-section {
  background: linear-gradient(to bottom, #87ceeb, #ffffff);
}

/* Text outside the cards */
.custom-text {
  color: #1e90ff; /* Blue color */
  font-family: 'Arial Black', sans-serif;
}

/* Executive card background and text style */
.executive-card {
  background-color: #6ea8dc; /* Light blue */
  border-radius: 12px;
}

/* Text inside executive cards */
.executive-text {
  font-family: 'Arial Black', sans-serif;
  font-size: 1rem;
  color: white;
}
</style>
