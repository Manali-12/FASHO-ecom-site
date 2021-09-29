import React, { useState } from 'react'
import "../Slider/Slider.scss"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import slideInfo from "../../SlideInfo"
import Products from '../Products/Products';

export default function Slider() {
    const [index, setindex] = useState(0);


    function handleClick(position) {
        if (position == "left") {
            setindex(index > 0 ? index - 1 : 2);
        }
        else {
            setindex(index < 2 ? index + 1 : 0);
        }

    }

    return (
        <div className="slider-div">
            <div className="slider-wrap">
                <div
                    className="arrow-wrap l-arrow"
                    onClick={() => handleClick("left")}>
                    <ArrowLeftIcon
                        className="arrow"
                    />
                </div>

                {slideInfo.map((item) =>
                    <div style={{ backgroundColor: item.bg, transform: `translateX(${index * -100}vw)` }} className="slide-wrap" index={index}>
                        <div className="slide">
                            <div className="image-wrap">
                                <img src={item.src} alt="girl" />
                            </div>
                            <div className="info-wrap">
                                <div className="info">
                                    <div className="heading">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="discription">
                                        <p>{item.disc}</p>
                                    </div>
                                    <button>SHOP NOW</button></div>
                            </div>
                        </div>
                    </div>

                )}

                <div
                    className="arrow-wrap r-arrow"
                    onClick={() => handleClick("right")}
                >
                    <ArrowRightIcon
                        className="arrow "
                    />
                </div>
            </div>
        </div>
    )
}
