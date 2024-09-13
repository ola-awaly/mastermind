import { getCurrentUser } from '../apis/security';

export const appLoader = () => {
	return getCurrentUser();
};
