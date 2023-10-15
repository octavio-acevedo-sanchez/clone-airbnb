'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Logo = () => {
	const router = useRouter();

	return (
		<Image
			onClick={() => {
				router.push('/');
			}}
			alt='Logo'
			className='hidden md:block curson-pointer'
			height='31'
			width='100'
			src='/images/logo.png'
			priority
		/>
	);
};
