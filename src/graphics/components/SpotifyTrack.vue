<!-- eslint-disable max-len -->
<script setup lang="ts">
import { useSpotifyPlayingTrack } from '@iss2-layouts/composable';

const { trackName, artists } = useSpotifyPlayingTrack();
</script>

<template>
  <div class="music">
    <img src="../images/entypo_beamed-note.png" />
    {{ trackName }} - {{ artists }}
  </div>
</template>
