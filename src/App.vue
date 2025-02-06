<template>
  <DashboardHeader
    v-model:selected-date-range="selectedDateRange"
    v-model:selected-region="selectedRegion"
  />

  <PerformanceCardList :filtered-sales-data="filteredSalesData"/>

  <ChartList
    :filtered-sales-data="filteredSalesData"
    :selected-region="selectedRegion"
    :selected-date-range="selectedDateRange"
  />

  <OrdersTable/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<script setup lang="ts">
import '@/assets/tailwind.css';
import {
  ref,
  computed,
} from 'vue';

import DashboardHeader from '@/components/DashboardHeader.vue';
import PerformanceCardList from '@/components/performanceCardList/PerformanceCardList.vue';
import ChartList from '@/components/ChartList.vue';
import OrdersTable from '@/components/OrdersTable.vue';

import { salesData } from '@/mockedAPI';

import { Sales } from '@/types/sales.types';

// Filters
const selectedDateRange = ref<string>('Last 7 Days');
const selectedRegion = ref<string>('North America');

const filteredSalesData = computed<Sales[]>(() => {
  const today: Date = new Date();
  const startDate: Date = new Date();

  switch (selectedDateRange.value) {
    case 'Last 7 Days':
      startDate.setDate(today.getDate() - 7);
      break;
    case 'Last Month':
      startDate.setMonth(today.getMonth() - 1);
      break;
    default:
  }

  return salesData.filter((entry: Sales) => {
    const entryDate: Date = new Date(entry.date);
    const matchesDate: boolean = entryDate >= startDate && entryDate <= today;
    const matchesRegion = selectedRegion.value === 'All' || entry.region === selectedRegion.value;

    return matchesDate && matchesRegion;
  });
});
</script>
