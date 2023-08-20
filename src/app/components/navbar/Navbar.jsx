'use client';

import { Container } from '@/app/components/Container';
import { Logo, Search, UserMenu } from './';

export const Navbar = () => {
	return (
		<div className='fixed w-full bg-white z-10 showdow-sm'>
			<div className='py-4 border-b-[1px]'>
				<Container>
					<div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
						<Logo />
						<Search />
						<UserMenu />
					</div>
				</Container>
			</div>
		</div>
	);
};
