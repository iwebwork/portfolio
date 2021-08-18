import React from 'react'
import Card from './card'
import {containerMarginBotton} from '../constants'

const profile = () => {
    return (
        <section name="profile" id="profile">
            <div className="container" style={containerMarginBotton}>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <Card title="Titulo" body="Corpo" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                    <Card title="Titulo dois" body="Corpo dois" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                    <Card title="Titulo dois" body="Corpo dois" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                    <Card title="Titulo dois" body="Corpo dois" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                </div>
            </div>
        </section>
    )
}

export default profile