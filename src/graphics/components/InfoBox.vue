<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRunData, useTimer } from '@iss2-layouts/composable';

const props = defineProps({
  double: {
    type: Boolean,
    default: false,
  },
});

const { runTitle, runCategory, runSystem, estimate } = useRunData();

const { time } = useTimer();

const timerMainClass = computed(() => (props.double ? 'timer-top' : 'timer-left'));
const timerSubClass = computed(() => (props.double ? 'timer-bottom' : 'timer-right'));

</script>

<template>
  <div>
    <p class="title">{{ runTitle }}</p>
    <p class="category">{{ runCategory }}</p>
    <p class="platform">{{ runSystem }}</p>
    <div class="timer">
      <div :class="timerMainClass">{{ time }}</div>
      <div :class="timerSubClass">
        <p class="timer-label">予定タイム</p>
        <p class="timer-time">{{ estimate }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .timer-left {
    color: #fff;
    font-family: "Sometype Mono", monospace;
    font-weight: bold;
    font-size: 54px;
  }
  .timer-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
  }

  .timer-top {
    color: #fff;
    font-family: "Sometype Mono", monospace;
    font-weight: bold;
    font-size: 54px;
  }

  .timer-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
