'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterModal } from '@/app/hooks/useRegisterModal';
import { useLoginModal } from '@/app/hooks/useLoginModal';
import { useRentModal } from '@/app/hooks/useRentModal';
import type { SafeUser } from '@/app/types';
import { Avatar } from '../Avatar';
import { MenuItem } from './';

import { signOut } from 'next-auth/react';
import { AiOutlineMenu } from 'react-icons/ai';

interface UserMenuProps {
	currentUser?: SafeUser | null;
}

export const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const router = useRouter();
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const rentModal = useRentModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen(value => !value);
	}, []);

	const onRent = useCallback(() => {
		if (!currentUser) {
			loginModal.onOpen();
			return;
		}

		rentModal.onOpen();
	}, [rentModal, currentUser, loginModal]);

	const logout = async () => {
		await signOut();
	};

	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={onRent}
					className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					Airbn your home
				</div>
				<div
					onClick={toggleOpen}
					className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shador-md transition'
				>
					<AiOutlineMenu />
					<div className='hidden md:block'>
						<Avatar src={currentUser?.image} />
					</div>
				</div>
			</div>

			{isOpen && (
				<div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
					<div className='flex flex-col cursor-pointer'>
						{currentUser ? (
							<>
								<MenuItem
									onClick={() => {
										router.push('/trips');
									}}
									label='My trips'
								/>
								<MenuItem
									onClick={() => {
										router.push('/favorites');
									}}
									label='My favorites'
								/>
								<MenuItem
									onClick={() => {
										router.push('/reservations');
									}}
									label='My reservations'
								/>
								<MenuItem
									onClick={() => {
										router.push('/properties');
									}}
									label='My properties'
								/>
								<MenuItem onClick={rentModal.onOpen} label='Airbnb my home' />
								<hr></hr>
								<MenuItem
									onClick={() => {
										void logout();
									}}
									label='Logout'
								/>
							</>
						) : (
							<>
								<MenuItem onClick={loginModal.onOpen} label='Login' />
								<MenuItem onClick={registerModal.onOpen} label='Sing up' />
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
