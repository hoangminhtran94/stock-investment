<script setup lang="ts"></script>

<template>
  <nav class="py-2 sticky top-0 shadow-sm border-b text-xs font-semibold">
    <div
      class="aboslute top-0 right-0 left-0 w-full h-full -z-10 blur-md"
    ></div>
    <div class="flex justify-between items-center container mx-auto">
      <div>
        <NuxtLink to="/">Stock.io</NuxtLink>
      </div>
      <div class="flex items-center gap-5">
        <Navlink to="/investments">Investment</Navlink>
        <Navlink to="/news">News</Navlink>
        <Navlink to="/about">About</Navlink>
      </div>
      <Navlink to="/auth">Login/Register</Navlink>
    </div>
  </nav>
</template>
