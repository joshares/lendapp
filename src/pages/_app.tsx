import Navbar from 'component/components/Navbar'
import Sidebar from 'component/components/Sidebar'
import 'component/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from 'component/context/context'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps,router }: AppProps) {
    const isLoginPage = router.pathname === "/login" || router.pathname === '/register';

  return (
    <SessionProvider session={pageProps.session}>
    <ContextProvider>
    {!isLoginPage && <Navbar/>}
    {!isLoginPage && <Sidebar/>}
    <Component {...pageProps} />
    </ContextProvider>
    </SessionProvider>
  )
}
