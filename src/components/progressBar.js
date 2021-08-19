import React from 'react'

export const Progressbartwo = () => {
    return (
        <div className="col-3">
            <div className="progress yellow">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="inner-circle"></div>
                <div className="progress-value"><span>26</span>%</div>
            </div>
        </div>
    )
}