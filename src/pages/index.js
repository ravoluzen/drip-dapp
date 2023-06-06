import { useContext } from 'react'
import { useRouter } from 'next/router'
import { LoginButton } from '@/components/login/LoginButton'
import { Inter } from 'next/font/google'
import AuthContext from '@/context/AuthContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { setAuthorized, setAccountDetails } = useContext(AuthContext);
  const router = useRouter();

  //handles login, sets authorized state and handles routing to details page
  const handleWalletConnect = async () => {
    const provider = window.drip;

    if(provider) {
      const accounts = await provider.request({ method: "eth_requestAccounts" });
  
      if(accounts) {
          setAuthorized(true)
          setAccountDetails(accounts)
          router.push('/details');
          console.log('account details', accounts);
      }
    } else {
        toast.error('Wallet extension might not be installed.', {
          position: toast.POSITION.TOP_CENTER,
        })
    }

  };

  return (
    <main
      className={`bg-gradient-to-tr from-black via-purple-700 via-50% to-black flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className='-mt-16 m-4 w-full text-center font-bold text-xl md:text-4xl bg-clip-text p-2 bg-gradient-to-b from-purple-400 to-white text-transparent drop-shadow-md'>Enter a new realm of possibilities, with <span className='text-blue-400'>Drip!</span></h1>
      <LoginButton handleLogin={handleWalletConnect}/>
    </main>
  )
}