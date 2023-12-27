<script setup>
import { useRouter, RouterLink, RouterView } from 'vue-router';
import NavBarView from './views/NavBarView.vue';
</script>


<template>
  <div class="header">
    <img src="/DICT Logo.png" alt="DICT Logo" class="logo" />
    
    <img src="/IIDB Logo.png" alt="IIDB Logo" class="logo" />
    <img src="/Bagong Pilipinas Logo.jpg" alt="Bagong Pilipinas Logo" class="logo" />
    <div class="text-after-images">
      <p>THE PHILIPPINES SKILLS FRAMEWORK FOR ANALYTICS & ARTIFICIAL INTELLIGENCE</p>
    </div>
    <img src="/AAP Logo.png" alt="AAP Logo" class="logo" />
  </div>
  <div class="nav bg-light w-100 d-flex justify-content-center border border-2">
  <div class="d-flex justify-content-between">
      <NavBarView />
  </div>
  </div>
  <RouterView />
</template>

<style scoped>

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  height: 50px; /* Set the height as per your requirement */
  margin-right: 15px; /* Adjust margin between logos if needed */
  margin-left: 15px;
}

.text-after-images {
  text-align: center;
  margin-top: 20px; /* Adjust margin as needed */
  margin-right: 25px;
  margin-left: 25px;
}

.text-after-images p{
  font-weight:600;
  font-size: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
