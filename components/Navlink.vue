<script setup lang="ts">
import { NuxtLinkProps } from "nuxt/dist/app/components";

const props = defineProps<NuxtLinkProps>();
</script>

<template>
  <NuxtLink
    active-class=" outline outline-1 outline-green-500"
    class="p-2 hover:scale-105 rounded transition-all"
    :to="props.to"
    ><slot></slot
  ></NuxtLink>
</template>
