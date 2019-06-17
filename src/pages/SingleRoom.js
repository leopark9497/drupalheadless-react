import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'



export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        
        if (!room){
            return (
            <Hero>
                <Banner title="Oops..." subtitle="Room not found">
                    <Link to="/rooms/">
                        <button className="btn-primary">back to rooms</button>
                    </Link>
                </Banner>
            </Hero>)
        }

        const {field_name, field_description, field_capacity, field_size, field_price, extras, field_breakfast, field_pets, images} = room;
        
        const [mainImg,...defaultImg]=images
        return (
            <>
            <StyledHero img={mainImg || defaultBcg}>
                <Banner title={`${field_name} room`}>
                    <Link to="/">
                        <button className="btn-primary">back to rooms</button>
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item,index)=>{
                      return  (<img key={index} src={item} alt="Oh la la"></img>) 
                    })}
                </div>

                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{field_description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price: {field_price}$</h6>
                        <h6>Size: {field_size} square feet</h6>
                        <h6>Maximum Capacity: {field_capacity > 1 ? `${field_capacity} persons`: "1 person"} </h6>
                        <h6>{field_pets?"Allowed pets":"No pets allowed"}</h6>
                        <h6>{field_breakfast && "Free breakfast"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((extra,index)=>{
                            return (<li key={index}>- {extra}</li>)
                        })}
                    </ul>
            </section>

            </>
        )
    }
}
