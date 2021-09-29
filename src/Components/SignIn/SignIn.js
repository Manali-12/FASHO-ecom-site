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
                    <button > <a href="/homepage">Demo Sign in</a></button>
                    <div className="new-user">
                        <h6>Don't have an account?</h6>
                        <a href="/register">Create new user</a>
                    </div>
                </div>

            </div>

        </div>
    )
}
