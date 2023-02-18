import './globals.css';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className=" bg-stone-900 lg:px-8 lg:pt-8">
			<head />
			<body>
				{children}
				<Footer />
			</body>
		</html>
	);
}
