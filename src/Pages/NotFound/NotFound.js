import React from 'react'
import "../NotFound/NotFound.scss"
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import Navbar from '../../Components/Navbar/Navbar';

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="notfound-div">

                <h1>4<SentimentDissatisfiedIcon style={{
                    fontSize: "150px",
                    color: "gray",
                }} />4</h1>
                <h2>Page Not Found</h2>
            </div>
        </div>
    )
}
