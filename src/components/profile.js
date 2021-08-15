import React from 'react'
import Card from './card'

const profile = () => {
    return (
        <div className="container" style={{marginBottom: '50px'}}>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <Card title="Titulo" body="Corpo" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                <Card title="Titulo dois" body="Corpo dois" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                <Card title="Titulo dois" body="Corpo dois" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
                <Card title="Titulo dois" body="Corpo dois" img="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
            </div>
        </div>
    )
}

export default profile