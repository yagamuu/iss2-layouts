<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRunData, useDisplaySound, useTimer } from '@iss2-layouts/composable';
import * as util from '@iss2-layouts/composable/util/format';

interface Props {
  index: number;
  innerClass?: string;
}

const props = defineProps<Props>();

const { runDataActiveRun } = useRunData();
const { displaySound } = useDisplaySound();
const { timer } = useTimer();

const name = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  return runDataActiveRun?.data.teams[props.index].players[0].name;
});

const finishTime = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  const teamId = runDataActiveRun?.data.teams[props.index].id;
  if (!timer?.data?.teamFinishTimes[teamId]) {
    return '';
  }
  const finish = timer?.data?.teamFinishTimes[teamId];
  if (finish.state === 'forfeit') {
    return 'リタイア';
  }
  if (finish.state === 'completed') {
    return util.formatSeconds(Math.trunc(finish.milliseconds / 1000));
  }
  return '';
});

const isActive = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return false;
  }
  return runDataActiveRun?.data.teams[props.index].players[0].id
    === displaySound?.data?.playerId;
});

</script>

<template>
  <div class="image-with-depth">
    <div :class="['name-box', props.innerClass]">
      {{ name }}
      <img
        class="speaker-icon"
        src="../images/speaker.png"
        v-if="isActive"
      />
    </div>
    <div :class="['time-mini', props.innerClass]" v-if="finishTime">
      <img class="flag-icon" src="../images/flag-rounded.png" />
      {{ finishTime }}
    </div>
  </div>
</template>
