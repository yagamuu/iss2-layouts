<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import type { RunData } from '@iss2-layouts/types/schemas/speedcontrol';

const props = defineProps({
  runData: {
    type: Object as () => RunData,
    default: undefined,
  },
  upcomingStartInSeconds: {
    type: Number,
    default: 0,
  },
  isUpnext: {
    type: Boolean,
    default: false,
  },
});

const runners = computed(() => {
  if (!props.runData) {
    return '';
  }
  return props.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join(', ');
});

const hours = computed(() => Math.floor(props.upcomingStartInSeconds / 3600));
const minutes = computed(() => (Math.floor(props.upcomingStartInSeconds / 60) % 60).toString().padStart(2, '0'));

</script>

<template>
  <div>
    <div class="time" v-if="!isUpnext">
      <template v-if="hours > 0">
        {{ hours }}<span>時間</span>
      </template>
      {{ minutes }}<span>分後</span>
    </div>
    <div :class="[isUpnext ? 'title_upnext' : 'title']">
      {{ runData?.game }}
    </div>
    <div :class="[isUpnext ? 'description_upnext' : 'description']">
      {{ runData?.category }} / Runner : {{ runners }}
    </div>
  </div>
</template>
