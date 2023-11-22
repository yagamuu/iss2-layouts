import { useAssetReplicant } from 'nodecg-vue-composable';
import { useRunData } from './runData';
import { computed } from 'vue';

export function usePrLayoutBg() {
  const prLayoutBg = useAssetReplicant('prLayoutBg', 'iss2-layouts');
  const { runDataActiveRun } = useRunData();

  const selectedPrLayoutBgUrl = computed(() => {
    const selectedPrLayoutBg = prLayoutBg?.value.find(
      (asset) => runDataActiveRun?.data?.customData.prLayoutBg === asset.base,
    );
    return selectedPrLayoutBg?.url ?? '';
  });

  return {
    prLayoutBg,
    selectedPrLayoutBgUrl
  }
}