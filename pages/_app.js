import React, { useState } from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import "../styles/Navbar.css"
import "../styles/Home.css"
import "../styles/Destination.css"
import "../styles/Crew.css"
import "../styles/Tech.css"

import Navbar from '../components/Navbar/Navbar'



function MyApp({ Component, pageProps }) {
  const [backImg, setBackImg] = useState("home")


  return (
    <div className={`background ${backImg}`}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Space Tourist</title>
      </Head>

      <Navbar backImg={backImg} />
      <Component {...pageProps} setBackImg={setBackImg} />
    </div>

  )
}

export default MyApp
