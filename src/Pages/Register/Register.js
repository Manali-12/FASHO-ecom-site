import React from 'react'
import SignUp from '../../Components/SignUp/SignUp'
import "../Register/Register.scss";
import rp from "../../Images/rp.jpg"

export default function Register() {
    return (
        <div className="register-div"
            style={{
                background: `linear-gradient(45deg, rgb(243, 194, 193,0.5) , rgb(214, 255, 229,0.5)), url(${rp})`,
                backgroundSize: "cover"
            }}>
            <SignUp />
        </div>
    )
}
