'use client';

interface HeadingProps {
	title: string;
	subtitle: string;
	center?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
	title,
	subtitle,
	center
}) => {
	return (
		<div className={center ? 'text-center' : 'text-start'}>
			<div className='test-2xml font-bold'>{title}</div>
			<div className='font-lignt text-neutral-500 mt-2'>{subtitle}</div>
		</div>
	);
};
