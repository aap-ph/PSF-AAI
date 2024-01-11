<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container d-flex justify-content-center align-items-center">

      <!-- Displayed on larger screens -->
      <ul class="navbar-nav ml-auto d-none d-lg-flex p-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/abouthePSF' }" :class="{ 'active': isActive('/abouthePSF') }">About the PSF</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/ecosystem' }" :class="{ 'active': isActive('/ecosystem') }">The Analytics & AI Ecosystem</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/message' }" :class="{ 'active': isActive('/message') }">Messages</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/technicalguide' }" :class="{ 'active': isActive('/technicalguide') }">Technical Guide</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/testimonial' }" :class="{ 'active': isActive('/testimonial') }">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/acknowledgement' }" :class="{ 'active': isActive('/acknowledgement') }">Acknowledgment</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/revisionlog' }" :class="{ 'active': isActive('/revisionlog') }">Revision Log</router-link>
        </li>
      </ul>

      <!-- Displayed on smaller screens -->
      <div class="d-lg-none">
        <ul class="navbar-nav">
          <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/abouthePSF' }" :class="{ 'active': isActive('/abouthePSF') }">About the PSF</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/taae' }" :class="{ 'active': isActive('/taae') }">The Analytics & AI Ecosystem</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/message' }" :class="{ 'active': isActive('/message') }">Messages</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/technicalguide' }" :class="{ 'active': isActive('/technicalguide') }">Technical Guide</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/testimonial' }" :class="{ 'active': isActive('/testimonial') }">Testimonials</router-link>
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
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.navbar-nav {
  white-space: nowrap;
}

.navbar-nav ul {
  flex-wrap: nowrap !important;
}

.navbar-nav .container {
  height: 100%;
}

.nav-item {
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  text-align: center !important;
  width: 100% !important;
}

.navbar-nav .nav-item .active {
  color: #007bff;
  text-decoration: underline;
}

/* Add any component-specific styles here */
</style>