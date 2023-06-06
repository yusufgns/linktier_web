	'use client'
	import './globals.css'
	import { ReactQueryProvider } from './ReactProvider'
	import SupabaseProvider from '@/components/providers/supabase-provider'
	import supabase from '@/lib/supabase-client'
	import Cart from '@/components/Cart'

	export default function RootLayout({children}: {children: React.ReactNode}) {
		return (
		<html lang="en">
			<body className='bg-[#191f26]'>
				<SupabaseProvider session={supabase}>
					<ReactQueryProvider>
						{children}
						<Cart />
					</ReactQueryProvider>
				</SupabaseProvider>
			</body>
		</html>
		)
	}