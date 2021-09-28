import React from 'react'
import "../SignIn/SignIn.scss"

export default function SignIn() {
    return (
        <div className="signin-div">
            <div className="signin-wrap">
                <h3>SIGN IN</h3>
                <div className="signin-input">
                    <input placeholder="Email Id" type="email" />
                    <input placeholder="Password" type="password" />
                    <button>Sign in</button>
                    <button>Demo Sign in</button>
                </div>

            </div>

        </div>
    )
}
