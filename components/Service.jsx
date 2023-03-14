import React from 'react'
import { Link } from "react-router-dom"

function Service() {
    return (
        <>

            <div className='links'>
                <nav>
                    <div className='home'>
                        <Link to="/">Home</Link> <br />
                    </div>
                    <div className='about'>
                        <Link to="/about">About</Link> <br />
                    </div>
                    <div className='service'>
                        <Link to="/service">Service</Link> <br />
                    </div>
                    <div className='career'>
                        <Link to="/career">Career</Link> <br />
                    </div>
                </nav>
            </div>
            
            <div> this is Service page </div>
            <ul className=''>
                <li className='a'>Software and IT solution</li>
                <li className='b'>training and certification</li>
                <li className='c'>Yoga classes</li>
                <li className='d'>Grocery store</li>
            </ul>

        </>
    )
}

export default Service