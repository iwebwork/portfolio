import React from 'react'
import {Img} from 'react-image'

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
                            Olá, meu nome é Igor Siqueira da Silva, 
                            eu tenho {idade()} anos, 
                            sou apaixonado por tecnologia com foco em desenvolvimento back-end,
                            e com objetivo de se tornar full-stack.
                        </div>
                    </div>
                    
                    <div className="row">
                        <MeImage/>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeImage = () => {
    return <Img 
                className="mx-auto d-block rounded-circle" 
                alt="Responsive image" 
                src="/assets/imgs/euV3.png" 
                style={{
                    backgroundRepeat:'no-repeat',
                    maxWidth:'400px',
                    maxHeight:'480px',
                    marginTop:'-140px',
                }}
            />
}

export default About