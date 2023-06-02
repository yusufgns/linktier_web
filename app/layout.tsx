	'use client'
	import './globals.css'
	import { ReactQueryProvider } from './ReactProvider'


	export default function RootLayout({children}: {children: React.ReactNode}) {
		return (
		<html lang="en">
			<body className='bg-[#191f26]'>
				<ReactQueryProvider>
					{children}
				</ReactQueryProvider>
			</body>
		</html>
		)
	}