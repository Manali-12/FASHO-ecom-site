import React from 'react'
import Announcement from '../../Components/Announcement/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import Category from '../../Components/Category/Category';
import Products from '../../Components/Products/Products';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            {/* <Announcement /> */}
            {/* <Navbar /> */}
            <Slider />
            <Category />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default HomePage;
