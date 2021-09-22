import React from 'react'
import "../NewsLetter/NewsLetter.scss"
import SendIcon from '@material-ui/icons/Send';

export default function NewsLetter() {
    return (
        <div className="newsletter-wrap">
            <div className="newsletter-head">
                <h2>Newsletter</h2>
                <h3>Get timely updates from your favorite products</h3>

            </div>
            <div className="newsletter-input">
                <input placeholder="Your Email" />
                <button><SendIcon /></button>
            </div>
        </div>
    )
}
