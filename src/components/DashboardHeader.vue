<template>
  <v-container>
    <h2 v-once class="text-center font-bold text-2xl mb-4">Sales Dashboard</h2>

    <!-- Filters -->
    <v-row>
      <v-col cols="12" md="6">
        <v-select
          v-model="selectedDateRange"
          :items="dateRanges"
          label="Select Date Range"
          outlined
          dense
        ></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <v-select
          v-model="selectedRegion"
          :items="regions"
          label="Select Sales Region"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  defineModel,
} from 'vue';

// Filters
const dateRanges: string[] = ['Last 7 Days', 'Last Month'];
const selectedDateRange = defineModel<string>('selectedDateRange');

const regions: string[] = ['All', 'North America', 'Europe', 'Asia'];
const selectedRegion = defineModel<string>('selectedRegion');

</script>
