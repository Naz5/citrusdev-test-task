<template>
  <v-container class="my-8">
    <v-row>
      <!-- Sales Over Time Line Chart -->
      <v-col cols="12" md="6">
        <div class="shadow-lg p-4 rounded-lg">
          <h3 class="text-center font-semibold mb-4">Sales Over Time</h3>
          <canvas ref="salesLineChart"></canvas>
        </div>
      </v-col>

      <!-- Product Performance Bar Chart -->
      <v-col cols="12" md="6">
        <div class="shadow-lg p-4 rounded-lg">
          <h3 class="text-center font-semibold mb-4">Product Performance</h3>
          <canvas ref="productBarChart"></canvas>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  onMounted, defineProps
} from 'vue';

import {
  Chart,
  ChartItem,
} from 'chart.js';

import { Sales } from '@/types/sales.types';

Chart.register();

const props = defineProps< {
  filteredSalesData: Sales[],
  selectedDateRange: string,
  selectedRegion: string
}>();

// Chart refs
const salesLineChart = ref<ChartItem | null>(null);
const productBarChart = ref<ChartItem | null>(null);

let monthSalesChart: Chart | null = null;
let productSalesChart: Chart | null = null;
function updateCharts() {
  if (!salesLineChart.value || !productBarChart.value) return;
  const sales: number[] = props.filteredSalesData.map((entry: Sales) => entry.sales);
  const salesLabels: string[] = props.filteredSalesData.map((entry: Sales) => {
    const date = new Date(entry.date);
    return date.toLocaleString('default', { month: 'long' });
  });

  if (monthSalesChart) {
    monthSalesChart.destroy();
  }

  monthSalesChart = new Chart(salesLineChart.value as ChartItem, {
    type: 'line',
    data: {
      labels: salesLabels,
      datasets: [{
        label: 'Total Sales',
        data: sales,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      }],
    },
    options: {
      responsive: true,
    }
  });

  const productData = props.filteredSalesData.map((entry: Sales) => entry.sales);
  const productLabels = props.filteredSalesData.map((entry: Sales) => entry.product);

  // Product Performance - Bar Chart

  if (productSalesChart) {
    productSalesChart.destroy();
  }

  productSalesChart = new Chart(productBarChart.value as ChartItem, {
    type: 'bar',
    data: {
      labels: productLabels,
      datasets: [{
        label: 'Sales by Product',
        data: productData,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });
}

// Initialize charts on mount
onMounted(updateCharts);

// Update charts
watch([() => props.selectedDateRange, () => props.selectedRegion], updateCharts);

</script>
