import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div className="info">
                <div className="reviews">
                    <h2>Reviews</h2>
                    <h1>1,281</h1>
                </div>
                <div className="rating">
                    <h2>Average Rating</h2>
                    <h1>4.6</h1>
                </div>
                <div className="analysis">
                    <h2>Sentiment Analysis</h2>
                    <h1>960</h1>
                    <h1>122</h1>
                    <h1>321</h1>
                </div>
            </div>
        )
    }
}
