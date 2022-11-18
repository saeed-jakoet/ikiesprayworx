import Head from 'next/head';
import Hero from '../components/Hero'
import { SliderData } from '../components/SliderData'
import Slider from '../components/Slider'
import Instagram from '../components/instagram'
import Work from '../pages/work'
import Contact from '../pages/contact'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Captured Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Captured Photography' message='In photography there is a reality so subtle that it becomes more real than reality' />
      <Slider slides={SliderData} />
      <Instagram />
      <Work />
      <Contact />
    </div>
  )
}