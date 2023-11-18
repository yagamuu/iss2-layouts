<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import type { RunDataActiveRunSurrounding, RunDataArray } from '@iss2-layouts/types/schemas/speedcontrol';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import UpcomingSchedule from '../components/UpcomingSchedule.vue';

const runDataArray = useReplicant<RunDataArray>(
  'runDataArray',
  'nodecg-speedcontrol',
);

const runDataActiveRunSurrounding = useReplicant<RunDataActiveRunSurrounding>(
  'runDataActiveRunSurrounding',
  'nodecg-speedcontrol',
);

const speedcontrolActiveRunIndex = computed(() => {
  const activeRunIndex = runDataArray?.data?.findIndex(
    (runData) => runData.id === runDataActiveRunSurrounding?.data?.current,
  );
  return activeRunIndex;
});

const upcomingRuns = computed(() => {
  const index = speedcontrolActiveRunIndex.value || 0;
  return runDataArray?.data?.slice(index, index + 3);
});

const upcomingStartIn = computed(() => {
  if (!upcomingRuns.value || !upcomingRuns.value[1]) {
    return [];
  }

  const startInArray = [0];
  const secondRunStartIn = (upcomingRuns.value[0].estimateS || 0)
    + (upcomingRuns.value[1].setupTimeS || 0);
  startInArray.push(secondRunStartIn);

  if (!upcomingRuns.value[2]) {
    return startInArray;
  }

  const thirdRunStartIn = secondRunStartIn
    + (upcomingRuns.value[1].estimateS || 0) + (upcomingRuns.value[2].setupTimeS || 0);
  startInArray.push(thirdRunStartIn);

  return startInArray;
});

// Set the title of this page.
useHead({ title: 'Setup' });
</script>

<template>
  <BaseOverlay>
    <div class="informations">
      <UpcomingSchedule
        v-for="(run, index) in upcomingRuns"
        :key="run.id"
        :run-data="run"
        :upcoming-start-in-seconds="upcomingStartIn[index]"
        :is-upnext="index === 0"
      />
    </div>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/setup.css');
</style>
