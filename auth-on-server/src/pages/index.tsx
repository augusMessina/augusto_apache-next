import Head from 'next/head'
import Auth from '@/components/authentication'



export default function Home() {

  return (
    <>
      <Head>
        <title>Next LogIn</title>
      </Head>
      <Auth></Auth>
    </>
  )
}
