import React, { Component } from 'react'
import Header from '../components/header'
import About from '../components/about'

export default class Index extends Component {

    render() {
        return (
            <section name="body"> 
                <Header/>

                <About/>
            </section>
        )
    }

}