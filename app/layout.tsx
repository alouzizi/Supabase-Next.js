import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SignOut from '@/component/SingOut'
import { createSupabaseForServerComponent } from '@/lib/supabase.server'
// import { createSupabaseForServerComponent } from '@/lib/supabase.server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const supabase = createSupabaseForServerComponent();

	const {
		data: { user },
	} = await supabase.auth.getUser();

  <SignOut />
  // console.log("user", user);
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      {/* {user && <div className='bg-red bg-blend-color-burn'></div>} */}
      </body>
    </html>
  )
}


