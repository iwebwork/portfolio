import React from 'react'
import {Img} from 'react-image'
import {containerMarginBotton} from '../constants'
import moment from 'moment'

const About = () => {
    const idade = () => {
        var dataNasc = '08/01/1996'
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var anoNascParts = dataNasc.split('/');
        var diaNasc =anoNascParts[0];
        var mesNasc =anoNascParts[1];
        var anoNasc =anoNascParts[2];
        var idade = anoAtual - anoNasc;
        var mesAtual = dataAtual.getMonth() + 1; 
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if(mesAtual < mesNasc){
            idade--; 
        } else {
            //Se estiver no mes do nascimento, verificar o dia
            if(mesAtual == mesNasc){ 
                if(new Date().getDate() < diaNasc ){ 
                    //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                    idade--; 
                }
            }
        } 
        return idade; 
    }

    return (
        <section name="about">
            <div className="container" style={containerMarginBotton}>
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
                            Olá, meu nome é Igor Siqueira da Silva, 
                            eu tenho {idade()} anos, 
                            sou apaixonado por tecnologia com foco em desenvolvimento back-end,
                            e com objetivo de se tornar full-stack.
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