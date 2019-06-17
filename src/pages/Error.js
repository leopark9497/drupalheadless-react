import React from 'react'
import Hero from '../components/Hero'
import {Link} from "react-router-dom"
import Banner from '../components/Banner';

export default function Home() {
    return (
        <Hero>
            <Banner title="404" subtitle="Page not found">
                <Link to="/">
                    <button className="btn-primary">return home</button>
                </Link>
            </Banner>
        </Hero>
    )
}
