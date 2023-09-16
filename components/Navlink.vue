<script setup lang="ts">
import { NuxtLinkProps } from "nuxt/dist/app/components";

const props = defineProps<NuxtLinkProps>();
</script>

<template>
  <NuxtLink
    active-class=" text-green-600 "
    class="p-2 hover:scale-105 rounded transition-all h-fit"
    :to="props.to"
    ><slot></slot
  ></NuxtLink>
</template>
