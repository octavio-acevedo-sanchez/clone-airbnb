import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/app/components/navbar/Navbar';
import { RegisterModal } from './components/modals/RegisterModal';
// import { ToasterProvider } from './providers/ToasterProvider';
import { Toaster } from 'react-hot-toast';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Toaster />
				<RegisterModal />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
