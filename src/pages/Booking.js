import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


export const Booking = () => {
    return (
        <>
        <Hero>
            <Banner title="Booking" subtitle="Book your stay with us with the best price available">
                <Link to="/rooms" className="btn-primary">
                    View Rooms
                </Link>
            </Banner>
        </Hero>
        

        <form>
            <label for="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" />
        </form>

        </>
    )
}

export default Booking;