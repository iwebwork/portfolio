import React from 'react'
import {Img} from 'react-image'

const About = () => {
    return (
        <section name="about">
            <div className="container" style={{marginBottom: '50px'}}>
                <div className="row justify-content-center">
                    <div className="col-1">
                        
                    </div>
                    <div className="col rounded-circle">
                        <MeImage/>
                    </div>
                    <div className="col-1">
                        
                    </div>
                    <div className="col">
                        <div className="h2">
                            Olá, meu nome é Igor Siqueira da Silva, eu tenho 25 anos, sou apaixonado por tecnologia com foco em desenvolvimento back-end, e com objetivo de se tornar full-stack.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeImage = () => {
    return <Img 
                className="img-fluid mx-auto d-block " 
                alt="Responsive image" 
                src="/assets/imgs/eu.png" 
                style={{
                    backgroundImage:'url(/assets/imgs/eu.png',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100%'
                }}
            />
}

export default About