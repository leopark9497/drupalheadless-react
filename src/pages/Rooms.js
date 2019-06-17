import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';

import {Link} from "react-router-dom"
import RoomContainer from '../components/RoomContainer'



export default class Rooms extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/">
                        <button className="btn-primary">return home</button>
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer></RoomContainer>
            </>
        )
    }
}
