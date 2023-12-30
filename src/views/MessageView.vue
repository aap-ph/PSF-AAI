<script setup>
import Message from '../components/Message.vue'
import ContactUsNavBarView from './ContactUsNavBarView.vue';

</script>

<template>
  <div class="w-100 bg-light border border-2 ">
      <div class="d-flex justify-content-center align-items-center">
        <ContactUsNavBarView />
      </div>
  </div>
  <main class="message pt-3 w-100 d-flex justify-content-center flex-column align-items-start">
    <div class="d-flex align-items-center">
      <Message />
    </div>
  </main>
</template>

<style scoped>
.message{
  padding-left: 180px;
}
</style>
