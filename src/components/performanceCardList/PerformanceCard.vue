<template>
  <v-card :class="`p-4 rounded-2xl shadow-lg bg-${props.color}-100`">
    <v-card-title :class="`font-semibold text-${color}-900`">{{ props.label }}</v-card-title>
    <v-card-text :class="`text-2xl font-bold text-${color}-700`">${{ props.value }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {
  defineProps
} from 'vue';

const props = defineProps< {
  label: string,
  value: number | string,
  color: string
}>();

</script>
