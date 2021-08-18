import React from 'react'
import {containerMarginBotton} from '../constants'
import {Progressbartwo} from './progressBar'

const Skills = () => {
    return (
        <section name="skills" id="skills">
            <div className="container-fluid" style={containerMarginBotton}>
                <div className="row">
                    <Progressbartwo/>
                
                </div>
            </div>
        </section>  
    )
}

export default Skills