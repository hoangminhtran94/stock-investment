<script setup lang="ts"></script>

<template>
  <nav class="flex p-3 justify-between items-center">
    <div>
      <NuxtLink to="/home">Home</NuxtLink>
    </div>
    <div class="flex items-center gap-5">
      <Navlink to="/news">News</Navlink>
      <Navlink to="/about">About</Navlink>
      <Navlink to="/auth">Login/Register</Navlink>
    </div>
  </nav>
</template>
