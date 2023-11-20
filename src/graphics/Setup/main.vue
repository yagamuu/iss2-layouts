<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { useRunData } from '@iss2-layouts/composable';
import BaseOverlay from '../components/views/BaseOverlay.vue';
import UpcomingSchedule from '../components/UpcomingSchedule.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';

const { upcomingRuns, upcomingStartIn } = useRunData();

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
    <SpotifyTrack/>
  </BaseOverlay>
</template>

<style>
  @import url('../css/reset.css');
  @import url('../css/setup.css');
</style>
