import React from 'react'
import Announcement from '../../Components/Announcement/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Category from '../../Components/Category/Category';

const HomePage = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Category />
        </div>
    )
}

export default HomePage;
