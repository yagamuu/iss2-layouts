<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import InfoBox from '../components/InfoBox.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';

const gamePosition = (): Box[] => {
  const x = 530;
  const y = 126;
  const width = 1376;
  const height = 774;
  return [[x, x + width, y, y + height]];
};

const gamePosition3x2 = (): Box[] => {
  const x = 554;
  const y = 13;
  const width = 1341;
  const height = 1006;
  return [[x, x + width, y, y + height]];
};

// eslint-disable-next-line no-restricted-globals
const params = new URLSearchParams(location.search);
const clipPath = computed(() => calculateClipPath(params.get('is3x2') ? gamePosition() : gamePosition3x2()));

// Set the title of this page.
useHead({ title: 'Single' });
</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <div class="image-with-depth">
      <div class="left_container">
        <img
          src="../images/16x9_left1.png"
          style="width: 100%; height: 100%"
        />
        <div class="kirinuki0">
          <InfoBox/>
          <TimerAndEstimate/>
        </div>
      </div>
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/single.css');
</style>
