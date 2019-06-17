import React, { Component } from 'react'
import {RoomContext} from "../context"
import Title from "../components/Title"
import Loading from "./Loading"
import Room from "./Room"

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms : rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.field_slug} room={room}></Room>
        })
        
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"></Title>
                <div className="featured-rooms-center">
                    {loading?<Loading></Loading>:rooms}
                </div>
            </section>
        )
    }
}
