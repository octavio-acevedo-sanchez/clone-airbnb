'use client';

import type { IconType } from 'react-icons';

interface ListingCategoryProps {
	icon: IconType;
	label: string;
	description: string;
}

export const ListingCategory: React.FC<ListingCategoryProps> = ({
	icon: Icon,
	label,
	description
}) => {
	return (
		<div className='fle flex-col gap-6'>
			<div className='flex flex-ro items-center gap-4'>
				<Icon size={40} className='text-neutral-600' />
				<div className='flex flex-col'>
					<div className='text-lg font-semibold'>{label}</div>
					<div className='text-neutral-500 font-light'>{description}</div>
				</div>
			</div>
		</div>
	);
};
