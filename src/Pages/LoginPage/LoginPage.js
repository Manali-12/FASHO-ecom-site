import React from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import "../LoginPage/LoginPage.scss"
import lp from "../../Images/lp.jpg"

export default function LoginPage() {
    return (
        <div className="login-wrap"
            style={{
                background: `linear-gradient(45deg, rgb(243, 194, 193,0.5) , rgb(214, 255, 229,0.5)), url(${lp})`,
                backgroundSize: "cover"
            }}>
            <SignIn />
        </div>
    )
}
