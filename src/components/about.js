import React from 'react'
import eu from './img/eu.png';

const About = () => {
    const idade = () => {
        var dataNasc = '08/01/1996'
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var anoNascParts = dataNasc.split('/');
        var diaNasc = anoNascParts[0];
        var mesNasc = anoNascParts[1];
        var anoNasc = anoNascParts[2];
        var idade = anoAtual - anoNasc;
        var mesAtual = dataAtual.getMonth() + 1; 
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if(mesAtual < mesNasc){
            idade--; 
        } else {
            //Se estiver no mes do nascimento, verificar o dia
            if(mesAtual === mesNasc){ 
                if(new Date().getDate() < diaNasc ){ 
                    //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                    idade--; 
                }
            }
        } 
        return idade; 
    }

    return (
        <section name="about" id="about">
            <div className="container-fluid">
                
                <div className="row justify-content-center">
                    <div className="col-sm-7 style-about">
                        <div className="h4">
                            Hello, my name is Igor Siqueira de Souza, 
                            I am {idade()} years old, 
                            I am passionate about technology with a focus on back-end development,
                            and aiming to become full-stack.
                        </div>
                    </div>
                    
                    <div className="row" style={{marginBottom:'40px'}}>
                        <MeImage/>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeImage = () => {
    return( <img className="mx-auto d-block rounded-circle" 
                style={{
                    maxHeight:'800px',
                    maxWidth:'800px',
                    marginTop:'-10px'       
                }} 
                alt='Eu'
                src={eu}
            />)
}

export default About