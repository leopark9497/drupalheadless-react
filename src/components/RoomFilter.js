import React from 'react'
import Title from './Title'
import {useContext} from 'react'
import {RoomContext} from '../context'

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    let types = getUnique(rooms, 'field_type');
    types =['all',...types];
    types = types.map((type,index)=>{
        return (<option value={type} key={index}>{type}</option>)
    })
    let cap = getUnique(rooms, 'field_capacity');
    cap =['all',...cap];
    cap = cap.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>)
    })
    return (
        <section className="filter-container">
           <Title title="Search Room"></Title>
           <form className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type}
                        onChange={handleChange}
                        className="form-control"
                    >
                        {types}
                    </select>
                </div>
                {/* */}
                <div className="form-group">
                    <label htmlFor="capacity">Capacity</label>
                    <select 
                        name="capacity" 
                        id="type" 
                        value={capacity}
                        onChange={handleChange}
                        className="form-control"
                    >
                        {cap}
                    </select>
                </div>
                
                {/* */}
                <div className="form-group">
                    <label htmlFor="price">Maximum Price</label>
                    <input 
                        name="price" 
                        id="type" 
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    >
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="minSize">Minimum Size</label>
                    <input 
                        name="minSize" 
                        id="type" 
                        value={minSize}
                        onChange={handleChange}
                        className="form-control"
                    >
                    </input>
                    <label htmlFor="maxSize">Maximum Size</label>
                    <input 
                        name="maxSize" 
                        id="type" 
                        value={maxSize}
                        onChange={handleChange}
                        className="form-control"
                    >
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="breakfast">Breakfast</label>
                    <input 
                        type="checkbox"
                        name="breakfast" 
                        id="breakfast" 
                        checked={breakfast}
                        onChange={handleChange} 
                    >
                    </input>  
                    <label htmlFor="pets">Allowed pets</label>
                    <input 
                        type="checkbox"
                        name="pets" 
                        id="pets" 
                        checked={pets}
                        onChange={handleChange}
                    >
                    </input>  
                </div>
           </form>
          
        </section>
    )
}
