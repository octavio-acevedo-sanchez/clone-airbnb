import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillInstagram
} from 'react-icons/ai';
import { Container } from './Container';

export const Footer = () => {
	return (
		<div className='bg-gray-100 text-neutral-500'>
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-2 pt-12 pb-10 border-b-[1px] border-neutral-300'>
					<div>
						<p className='font-bold pb-1'>Support</p>
						<a href='#' className='block pb-1'>
							Help Center
						</a>
						<a href='#' className='block pb-1'>
							AirCover
						</a>
						<a href='#' className='block pb-1'>
							Anti-discrimination
						</a>
						<a href='#' className='block pb-1'>
							Disability support
						</a>
						<a href='#' className='block pb-1'>
							Cancellation options
						</a>
						<a href='#' className='block'>
							Report neighborhood concern
						</a>
					</div>
					<div>
						<p className='font-bold pb-1'>Hosting</p>
						<a href='#' className='block pb-1'>
							Airbnb your home
						</a>
						<a href='#' className='block pb-1'>
							AirCover for Hosts
						</a>
						<a href='#' className='block pb-1'>
							Hosting resources
						</a>
						<a href='#' className='block pb-1'>
							Community forum
						</a>
						<a href='#' className='block pb-1'>
							Hosting responsibly
						</a>
						<a href='#' className='block pb-1'>
							Airbnb-friendly apartments
						</a>
					</div>
					<div>
						<p className='font-bold pb-1'>Airbnb</p>
						<a href='#' className='block pb-1'>
							Newsroom
						</a>
						<a href='#' className='block pb-1'>
							New features
						</a>
						<a href='#' className='block pb-1'>
							Careers
						</a>
						<a href='#' className='block pb-1'>
							Investors
						</a>
						<a href='#' className='block pb-1'>
							Gift cards
						</a>
						<a href='#' className='block pb-1'>
							Airbnb.org emergency stays
						</a>
					</div>
				</div>
				<div className='flex flex-wrap justify-between pt-3 pb-3'>
					<div className='flex gap-3 items-center'>
						<span>© 2023 Airbnb, Inc.</span> <a href='#'>Privacy </a>
						<a href='#'>Terms</a> <a href='#'>Sitemap</a>
						<a href='#'>Your Privacy Choices</a>
					</div>
					<div className='flex gap-2 justify-end items-center'>
						$ COP <AiFillFacebook size={30} /> <AiFillTwitterSquare size={30} />
						<AiFillInstagram size={30} />
					</div>
				</div>
			</Container>
		</div>
	);
};
