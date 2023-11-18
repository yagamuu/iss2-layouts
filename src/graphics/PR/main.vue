<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { computed, watch } from 'vue';
import { useHead } from '@unhead/vue';
import type { Timekeeping } from '@iss2-layouts/types/schemas/nodecgTimekeeper';
import BaseOverlay from '../components/views/BaseOverlay.vue';

const timekeeping = useReplicant<Timekeeping>(
  'timekeeping',
  'nodecg-timekeeper',
);
const time = computed(() => {
  if (!timekeeping?.data) {
    return '00:00';
  }
  if (timekeeping.data.time.rawInSecond <= 0) {
    return '00:00';
  }
  return timekeeping.data.time.display;
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
      <img src="../images/pr-test.png" />
      <!-- ↑ここの画像をpr画像として指定してください -->
      <div class="time">{{ time }}</div>
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/pr.css');
</style>
