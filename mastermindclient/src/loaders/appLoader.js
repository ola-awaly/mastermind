import { getCurrentUser } from '../apis/security';

export const appLoader = async () => {
	const user = await getCurrentUser();

	return user;
};
