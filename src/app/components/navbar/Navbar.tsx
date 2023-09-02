'use client';

import { Container } from '@/app/components/Container';
import { Categories, Logo, Search, UserMenu } from '.';
import { SafeUser } from '@/app/types';

interface NavbarProps {
	currentUser?: SafeUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	return (
		<div className='fixed w-full bg-white z-10 showdow-sm'>
			<div className='py-4 border-b-[1px]'>
				<Container>
					<div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
			<Categories />
		</div>
	);
};