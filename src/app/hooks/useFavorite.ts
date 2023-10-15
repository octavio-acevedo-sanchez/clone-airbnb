import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

import type { SafeUser } from '../types';

import { useLoginModal } from './useLoginModal';

interface IUserFavorite {
	listingId: string;
	currentUser?: SafeUser | null;
}

export const useFavorite = ({ listingId, currentUser }: IUserFavorite) => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const hasFavorited = useMemo(() => {
		const list = currentUser?.favoriteIds ?? [];

		return list.includes(listingId);
	}, [currentUser, listingId]);

	const toggleFavorite = useCallback(
		async (e: React.MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();

			if (!currentUser) {
				loginModal.onOpen();
				return;
			}

			try {
				let request;
				if (hasFavorited) {
					request = async () =>
						await axios.delete(`/api/favorites/${listingId}`);
				} else {
					request = async () => await axios.post(`/api/favorites/${listingId}`);
				}

				await request();
				router.refresh();
				toast.success('Success');
			} catch (error) {
				toast.error('Something went wrong');
			}
		},
		[currentUser, hasFavorited, listingId, loginModal, router]
	);

	return { hasFavorited, toggleFavorite };
};
