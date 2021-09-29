import React from 'react'
import "../Navbar/Navbar.scss"
import SearchIcon from '@material-ui/icons/Search';
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


export default function Navbar() {
    return (
        <div className="nav-div">
            <div className="nav-wrap">
                {/* <div className="left-wrap">
                    <div className="lang-wrap">
                        <h6>EN</h6>
                    </div>
                    <div className="search-wrap">
                        <input className="input" />
                        <SearchIcon className="search" />
                    </div>
                </div> */}
                <div className="middle-wrap">
                    <h1><a href="/homepage">FASHO</a></h1>
                </div>
                {/* <div className="right-wrap">
                    <h6>REGISTER</h6>
                    <h6>SIGN IN</h6>
                    <Badge badgeContent={5} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>

                </div> */}
            </div>
        </div>
    )
}
