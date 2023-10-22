import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/app/components/navbar/Navbar';
import { RegisterModal } from './components/modals/RegisterModal';
import { LoginModal } from './components/modals/LoginModal';
import { RentModal } from './components/modals/RentModal';
import { SearchModal } from './components/modals/SearchModal';
import { Footer } from './components/Footer';
// import { ToasterProvider } from './providers/ToasterProvider';
import { Toaster } from 'react-hot-toast';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone'
};

export default async function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang='en'>
			<body className={font.className}>
				<Toaster />
				<RentModal />
				<RegisterModal />
				<SearchModal />
				<LoginModal />
				<Navbar currentUser={currentUser} />
				<div className='pb-20 pt-28'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
