<script setup>
import Ecosystem from '../components/Ecosystem.vue'
import ContactUsNavBarView from './ContactUsNavBarView.vue';

</script>

<template>
  <div class="w-100 bg-light border border-2 ">
      <div class="d-flex justify-content-center align-items-center">
        <ContactUsNavBarView />
      </div>
  </div>
  <main class="pt-3 w-100 d-flex justify-content-center flex-column align-items-center">
    <div class="d-flex align-items-center">
      <Ecosystem />
    </div>
  </main>
</template>
