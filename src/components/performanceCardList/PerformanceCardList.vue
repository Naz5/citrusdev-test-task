<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <PerformanceCard color="blue" label="Total Sales" :value="totalSales"/>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <PerformanceCard color="green" label="Orders" :value="totalOrders"/>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <PerformanceCard color="yellow" label="Top Product" :value="topProduct"/>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <PerformanceCard color="red" label="Sales Growth" :value="`${salesGrowth}%`"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps
} from 'vue';

import PerformanceCard from '@/components/performanceCardList/PerformanceCard.vue';

import { Sales } from '@/types/sales.types';

const props = defineProps< {
  filteredSalesData: Sales[]
}>();

// Compute KPIs (Ideally, these calculations should be handled on the server side)
const totalSales = computed<number>(() => {
  return props.filteredSalesData.reduce((sum: number, entry: Sales) => sum + entry.sales, 0);
});

const totalOrders = computed<number>(() => {
  return props.filteredSalesData.reduce((sum: number, entry: Sales) => sum + entry.orders, 0);
});

const topProduct = computed<string>(() => {
  if (!props.filteredSalesData.length) return 'N/A';

  const productSales = props.filteredSalesData.reduce((top: {[key:string]: number}, entry) => {
    top[entry.product] = (top[entry.product] || 0) + entry.sales;
    return top;
  }, {});

  return Object.keys(productSales).reduce((acc, item) => {
    return productSales[acc] > productSales[item] ? acc : item;
  });
});

const salesGrowth = computed<number | string>(() => {
  if (props.filteredSalesData.length < 2) return '0.00';

  const salesValues = props.filteredSalesData.map((entry: Sales) => entry.sales);
  const [prevMonth, lastMonth] = salesValues.slice(-2);

  return prevMonth ? (((lastMonth - prevMonth) / prevMonth) * 100).toFixed(2) : '0.00';
});

</script>
