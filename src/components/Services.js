import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: "We offer free cock tails"
            }, 
            {
                icon: <FaHiking />,
                title: "Free hiking services",
                info: "Our resort is surrounded by mountain ranges that are suitable for hiking"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle van",
                info: "We offer free shuttle van transportation service from the resort to the airport"
            },
            {
                icon: <FaBeer />,
                title: "Free beer",
                info: "We offer free flow beer every weekend night"
            }
        ]
    }


    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                        <span>
                            {item.icon}
                        </span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
