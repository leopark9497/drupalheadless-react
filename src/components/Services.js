import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"
import Title from "./Title"

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"free cocktails",
                info:"Ullamco cupidatat consectetur anim consequat esse culpa aliquip."
            },
            {
                icon:<FaHiking></FaHiking>,
                title:"hinking",
                info:"Ullamco cupidatat consectetur anim consequat esse culpa aliquip."
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"free shuttle",
                info:"Ullamco cupidatat consectetur anim consequat esse culpa aliquip."
            },
            {
                icon:<FaBeer></FaBeer>,
                title:"Strongest Beer",
                info:"Ullamco cupidatat consectetur anim consequat esse culpa aliquip."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return (
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    )
                })}
                </div>
            </section>
        )
    }
}



