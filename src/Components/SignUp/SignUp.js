import React from 'react'
import "../SignUp/SignUp.scss"


export default function SignUp() {
    return (
        <div className="register-wrap">
            <div className="register-form-wrap">
                <h3>SIGN UP</h3>
                <div className="register-name-wrap">
                    <input placeholder="First name" type="text" />
                    <input placeholder="Last name" type="text" />
                </div>
                <input placeholder="Email Id" type="email" />
                <input placeholder="Password" type="password" />
                <input placeholder="Confirm Password" type="password" />
                <button>SIGN UP</button>
                <button>Demo Sign Up</button>
            </div>
        </div>
    )
}
