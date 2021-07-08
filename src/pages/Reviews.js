import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export const Reviews = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="Reviews">
                <Link to="/" className="btn-primary">
                    Return home     
                </Link>
            </Banner>
        </Hero>
    )
}

export default Reviews;