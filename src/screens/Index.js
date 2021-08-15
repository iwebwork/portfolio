import React, { Component } from 'react'
import Header from '../components/header'
import About from '../components/about'
import Profile from '../components/profile'

export default class Index extends Component {
    render() {
        return (
            <section name="body"> 
                <Header/>
                <About/>
                <Profile/>
            </section>
        )
    }

}