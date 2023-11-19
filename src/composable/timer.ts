import { computed } from 'vue'
import { Timer } from '../types/schemas/speedcontrol';
import { useReplicant } from 'nodecg-vue-composable';
import * as util from './util/format';

export function useTimer() {
  const timer = useReplicant<Timer>(
    'timer',
    'nodecg-speedcontrol',
  );

  const time = computed(() => {
    if (!timer?.data) {
      return 0;
    }
    const { milliseconds } = timer.data;
    return util.formatSeconds(Math.trunc(milliseconds / 1000));
  });

  const runState = computed(() => {
    if (!timer?.data) {
      return 0;
    }

    const { state } = timer.data;
    return state === 'finished' ? 'clear' : '';
  });

  return {
    timer,
    time,
    runState,
  }
}