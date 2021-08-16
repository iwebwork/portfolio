import React from 'react'
import {containerMarginBotton} from '../constants'
import Progressbar from './progressBar'

const Skills = () => {
    return (
        <div className="container" style={containerMarginBotton}>
            <div className="row">
                <div className="col-4" style={{backgroundColor:'#1234'}}>
                    <div className="row">
                        <Progressbar title="JavaScript" width="55"/>
                    </div>
                    <div className="row">
                        <Progressbar title="PHP" width="99"/>
                    </div>
                </div>
                <div className="col-4">
                    
                </div>
            </div>
        </div>  
    )
}

export default Skills