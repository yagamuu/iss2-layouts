<script setup lang="ts">
import { useReplicant } from 'nodecg-vue-composable';
import { ref, computed, watchEffect } from 'vue';
import { RunDataActiveRun } from '@iss2-layouts/types/schemas/speedcontrol/RunData';
import { DisplaySound } from '@iss2-layouts/types/schemas/displaySound';
import { useHead } from '@unhead/vue';

// Set the title of this page.
useHead({ title: 'Display Sound' });

const runDataActiveRun = useReplicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol');
const displaySound = useReplicant<DisplaySound>('displaySound', 'iss2-layouts');

const selected = ref(displaySound?.data?.playerId || 'null');
const players = computed(() => {
  if (!runDataActiveRun?.data) {
    return [];
  }

  return runDataActiveRun?.data?.teams.flatMap((team) => team.players);
});

watchEffect(() => {
  selected.value = displaySound?.data?.playerId || '';
});

const changeDisplaySound = () => {
  if (!displaySound) return;

  displaySound.data = {
    playerId: selected.value,
  };
  displaySound.save();
};

</script>

<template>
  <div class="q-pa-md">
    <QRadio
      v-for="(player) in players"
      :label="player.name"
      :key="player.id"
      :val="player.id"
      v-model="selected"
      @update:model-value="changeDisplaySound" />
  </div>
</template>
