<template>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between d-flex w-100 p-0">
    <div class="d-flex justify-content-center align-items-center">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/abouthePSF' }" :class="{ 'active': isActive('/abouthePSF') }">About the PSF</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/message' }" :class="{ 'active': isActive('/message') }">Messages</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/technicalguide' }" :class="{ 'active': isActive('/technicalguide') }">Technical Guide</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/acknowledgement' }" :class="{ 'active': isActive('/acknowledgement') }">Acknowledgment</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/revisionlog' }" :class="{ 'active': isActive('/revisionlog') }">Revision Log</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.nav-item {
  margin-left: 30px;
  margin-right: 30px;
}

.navbar-nav .nav-item .active {
  color: #007bff; /* Change to your desired active link color */
  text-decoration: underline; /* Add underline to the active link */
}

/* Add any component-specific styles here */
</style>
