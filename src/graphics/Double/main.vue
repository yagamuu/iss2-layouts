<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { Box, calculateClipPath } from '../util/clipPathCalculator';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import InfoBox from '../components/InfoBox.vue';
import TimerAndEstimate from '../components/TimerAndEstimate.vue';
import RunnerNameplate from '../components/RunnerNameplate.vue';

const player1GamePosition = (): Box[] => {
  const x = 34;
  const y = 175;
  const width = 914;
  const height = 514;
  return [[x, x + width, y, y + height]];
};

const player2GamePosition = (): Box[] => {
  const x = 972;
  const y = 175;
  const width = 914;
  const height = 514;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath([...player1GamePosition(), ...player2GamePosition()]));

// Set the title of this page.
useHead({ title: 'Double' });
</script>

<template>
  <BaseOverlay :clip-path="clipPath">
    <div class="image-with-depth">
      <div class="main_container">
        <RunnerNameplate innerClass="left" :index="0"/>
        <RunnerNameplate innerClass="right" :index="1"/>
      </div>
      <InfoBox class="kirinuki3"/>
      <TimerAndEstimate double/>
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/double.css');
</style>
