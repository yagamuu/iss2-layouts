<!-- eslint-disable max-len -->
<script setup lang="ts">
import { useSpotifyPlayingTrack } from '@iss2-layouts/composable';

const { trackName, artists } = useSpotifyPlayingTrack();
</script>

<template>
  <div class="music">
    <img src="../images/entypo_beamed-note.svg" alt="音楽アイコン" />
    {{ trackName }} - {{ artists }}
  </div>
</template>
