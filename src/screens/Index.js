import React, { Component } from 'react'
import Header from '../components/header'
import About from '../components/about'
import Profile from '../components/profile'
import Skills from '../components/skills'
import Contact from '../components/contact'
import {containerMarginBotton} from '../constants'

export default class Index extends Component {
    render() {
        return (
            <section name="body">
                <div className="container-fluid backgroundOne" style={containerMarginBotton}>
                    <Header/>
                    <About/>
                </div>
                
                <section name="skills" id="skills">
                    <div className="container-fluid">
                        <Skills/>
                    </div>
                </section> 
                
                <Profile/>
                <Contact/>
            </section>
        )
    }

}