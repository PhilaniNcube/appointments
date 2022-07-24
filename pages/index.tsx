import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import { Fragment } from 'react'
import Hero from '../components/Homepage/Hero'


const Home: NextPage = () => {



  return (
  <Fragment>
    <Head>
      <title>Home | Appointments</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <Hero />
  </Fragment>
  )
}

export default Home
