import { getStats } from '../apis/gameStats';

export const mastermindLoader = async () => {
	let stats = await getStats();
	console.error(stats);

	return stats;
};
