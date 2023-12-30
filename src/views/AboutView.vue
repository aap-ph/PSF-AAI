<script setup>
import AboutPage from '../components/About.vue'
import ContactUsNavBarView from './ContactUsNavBarView.vue';
</script>

<template>
  <main class="w-100 d-flex justify-content-center flex-column align-items-center">
    <div class="bg w-100 align-items-center d-flex justify-content-center border border-2">
      <ContactUsNavBarView />
    </div>
    <main class="w-100 d-flex justify-content-center flex-column align-items-center">
    <div class="d-flex align-items-center">
      <AboutPage />
    </div>
  </main>
  </main>
</template>

<style>
.bg{
  background-color: white;
}

</style>
