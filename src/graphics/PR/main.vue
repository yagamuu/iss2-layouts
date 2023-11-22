<script setup lang="ts">
import { useTimekeeping, usePrLayoutBg } from '@iss2-layouts/composable';
import { watch, computed } from 'vue';
import { useHead } from '@unhead/vue';
import BaseOverlay from '../components/views/BaseOverlay.vue';

const { time, status } = useTimekeeping();
const { selectedPrLayoutBgUrl } = usePrLayoutBg();

const timerClass = computed(() => {
  if (status.value === 'paused') {
    return 'pause';
  }
  if (time.value === '00:00') {
    return 'complete';
  }
  return '';
});

watch(time, (newTime, oldTime) => {
  if (newTime === '00:00' && oldTime !== '00:00') {
    nodecg.playSound('pr-finish');
  }
});

// Set the title of this page.
useHead({ title: 'PR' });
</script>

<template>
  <BaseOverlay>
    <img src="../images/pr_bg.png" class="main_image" />
    <div class="information">
      <img :src="selectedPrLayoutBgUrl" />
      <div :class="[timerClass, 'time']">{{ time }}</div>
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/pr.css');
</style>
