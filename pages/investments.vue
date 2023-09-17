<script setup lang="ts">
import { Line } from "vue-chartjs";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40, 12, -10, -50, 20, -60],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div class="h-[500px]">
    <Line :data="data" :options="options" />
  </div>
</template>
