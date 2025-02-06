<template>
  <div class="container mx-auto py-6">
    <!-- Sales Data Table -->
    <div class="overflow-x-auto">
      <v-data-table
        :items="ordersData"
        :items-per-page="itemsPerPage"
        v-model:items-per-page="itemsPerPage"
        :headers="tableHeaders"
        item-key="orderId"
        :pagination="pagination"
        @update:pagination="updatePagination"
        class="rounded-lg shadow-lg"
      >
        <template v-slot:no-data>
          <div class="text-center py-4 text-gray-500">No data available</div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<style lang="scss">
.v-table thead th {
  font-weight: bold !important;
}
</style>

<script setup lang="ts">
import {
  ref
} from 'vue';

import { ordersData } from '@/mockedAPI';

import { Pagination } from '@/types/global.type';

// Orders Table & pagination
const itemsPerPage = ref<number>(5);
const pagination = ref<Pagination>({
  page: 1,
  itemsPerPage: itemsPerPage.value,
  totalItems: ordersData.length
});

const tableHeaders = [
  { title: 'Order ID', align: 'center', key: 'orderId' },
  { title: 'Product Name', align: 'center', key: 'product' },
  { title: 'Quantity Sold', align: 'center', key: 'quantity' },
  { title: 'Total Price', align: 'center', key: 'totalPrice' },
  { title: 'Region', align: 'center', key: 'region' }
];

const updatePagination = (newPagination: Pagination) => {
  pagination.value = newPagination;
};

</script>
