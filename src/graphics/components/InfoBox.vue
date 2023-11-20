<!-- eslint-disable max-len -->
<script setup lang="ts">
import { useRunData } from '@iss2-layouts/composable';

const { runTitle, runCategory, runSystem } = useRunData();

</script>

<template>
  <div>
    <p class="title">{{ runTitle }}</p>
    <p class="category">{{ runCategory }}</p>
    <p class="platform">{{ runSystem }}</p>
  </div>
</template>
