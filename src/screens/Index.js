import React, { Component } from 'react'
import Header from '../components/header'
import About from '../components/about'
import Profile from '../components/profile'
import Skills from '../components/skills'
import Contact from '../components/contact'

export default class Index extends Component {
    render() {
        return (
            <section name="body">
                <div className="container-fluid bg-light backgroundOne">
                    <Header/>
                    <About/>
                </div> 

                <Skills/>
                <Profile/>
                <Contact/>
            </section>
        )
    }

}