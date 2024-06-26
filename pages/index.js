import Head from 'next/head';
import Hero from '../components/Hero'
import ServicesSection from "../components/services";
import Work from '../pages/work'
import Contact from '../pages/contact'


export default function Home() {
    return (
        <div>
            <Head>
                <title>SprayWorx</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/logo.svg" type="image/svg+xml"/>
            </Head>
            <Hero heading='Ikies SprayWorx' message='Top quality craftsmanship with hands on care.'/>
            <ServicesSection/>
            <Work/>
            <Contact/>

        </div>
    )
}
