import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'


export default function Room({room}) {
    const {field_name,field_slug,images,field_price} = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt=" single room"></img>
                <div className="price-top">
                    <h6>${field_price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${field_slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{field_name}</p>
        </article>
    )
}
