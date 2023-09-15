<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <div class="container mx-auto">
    <Navbar />
    <slot></slot>
  </div>
</template>
