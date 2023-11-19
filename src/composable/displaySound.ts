import { DisplaySound } from '../types/schemas/displaySound';
import { useReplicant } from 'nodecg-vue-composable';

export function useDisplaySound() {
  const displaySound = useReplicant<DisplaySound>('displaySound', 'iss2-layouts');

  return {
    displaySound
  }
}