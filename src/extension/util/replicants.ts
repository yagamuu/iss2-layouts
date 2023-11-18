/* eslint-disable max-len */

import type { DisplaySound, ExternalTwitchAPIData } from '@iss2-layouts/types/schemas';
import type { RunDataActiveRun } from '@iss2-layouts/types/schemas/speedcontrol';
import type NodeCG from '@nodecg/types';
import { get as nodecg } from './nodecg';

/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */
export const displaySoundReplicant = nodecg().Replicant<DisplaySound>('displaySound', {
  defaultValue: {
    playerId: '',
  },
}) as unknown as NodeCG.ServerReplicantWithSchemaDefault<DisplaySound>;

export const runDataActiveRunReplicant = nodecg().Replicant<RunDataActiveRun>('runDataActiveRun', 'nodecg-speedcontrol') as unknown as NodeCG.ServerReplicantWithSchemaDefault<RunDataActiveRun>;

export const externalTwitchAPIData = nodecg().Replicant<ExternalTwitchAPIData>('externalTwitchAPIData') as unknown as NodeCG.ServerReplicantWithSchemaDefault<ExternalTwitchAPIData>;
