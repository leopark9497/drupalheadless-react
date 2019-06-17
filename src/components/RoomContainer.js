import React, { Component } from 'react'
import RoomFilter from '../components/RoomFilter'
import Roomlist from '../components/Roomlist'
import {RoomConsumer} from '../context'
import Loading from './Loading'
export default class RoomContainer extends Component {
    render() {
        return(
        <RoomConsumer>
            {
                value => {
                    const {loading,sortedRooms,rooms} = value
                    if (loading) {
                        return <Loading></Loading>
                    }       
                    return (
                        <>
                        <RoomFilter rooms={rooms}></RoomFilter>
                        <Roomlist rooms={sortedRooms}></Roomlist>
                        </>
                        );
            }}
        </RoomConsumer>
        )

    }
}
