import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LoadingComponent from '../components/LoadingComponent'
import RotateScreen from '../components/RotateScreen'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="container">
      <Head>
        <title>Sono Santiago e ho bisogno di voi.</title>
        <meta
          name="description"
          content="Richiesta di aiuto, genitori inaffidabili"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center align-middle items-center w-screen h-screen flex-col container_born">
        <div className="lineTop"></div>
        <div className="boxText">
          <h1 className=" text-5xl flex">Ciao sono Santiago,</h1>
          <p className=" text-md flex mt-3">
            siccome ho già capito che<br></br> i miei genitori sono poco
            affidabili,<br></br> conto su di voi...<br></br>
          </p>
          <h1 className=" text-5xl flex mt-10">Come?</h1>
          <p className=" text-md flex mt-3">Con una piccola donazione.</p>
          <p className=" text-md flex mt-3">Nessuna lista.</p>
          <p className=" text-md flex">Vedrò poi, giorno dopo giorno,</p>
          <p className=" text-md flex">di cosa avrò davvero bisogno.</p>
          <p className=" text-md flex mt-10">
            Intestatari: Zamberoni Selene, Volpi Nicola
          </p>
          <p className="text-md flex">Causale: Regalo di nascita</p>
          <p className=" text-md flex">IBAN: IT76D0306924888100000012156</p>
        </div>
        <div className="lineBottom"></div>
        {isLoading ? <LoadingComponent /> : ''}
        <RotateScreen />
      </main>

      <footer></footer>
    </div>
  )
}
