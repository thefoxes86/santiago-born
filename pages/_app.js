import '../styles/globals.scss'

import LoadingScreen from '../components/LoadingComponent'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return <>{isLoading ? <LoadingScreen /> : <Component {...pageProps} />}</>
}

export default MyApp
