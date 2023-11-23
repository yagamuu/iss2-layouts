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

const { estimate } = useRunData();

const { time, runState } = useTimer();

const timerMainClass = computed(() => (props.double ? 'timer-top' : 'timer-left'));
const estimateClass = computed(() => (props.double ? 'timer-bottom' : 'timer-right'));

const timerStateClass = computed(() => {
  if (runState.value === 'paused') {
    return 'pause';
  }
  if (runState.value === 'forfeit') {
    return 'forfeit';
  }
  if (runState.value === 'finished') {
    return 'complete';
  }
  return '';
});

</script>

<template>
  <div class="timer">
    <div :class="[timerStateClass, timerMainClass]">{{ time }}</div>
    <div :class="estimateClass">
      <p class="timer-label">予定タイム</p>
      <p class="timer-time">{{ estimate }}</p>
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
