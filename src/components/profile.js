import React from 'react'
import Card from './card'
import {containerMarginBotton} from '../constants'

const profile = () => {
    return (
        <section name="profile" id="profile">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-3 text-center">Projetos</div>
                </div>
                <div className="row justify-content-sm-center" style={{marginBottom:'50px'}}>
                    <Card body={"Um clone do instagram, aplicativo mobile criado para servir de aprendizado. Foi utilizado o framework React-Native como base de desenvolvimento, e o Firebase como banco de dados."} 
                        projectName="Projeto Lambe lambe" repo="https://github.com/iwebwork/projectLambe"/>
                    <Card body={"Uma lista de tarefas, aplicativo mobile criado para servir de aprendizado. Foi utilizado o framework React-Native como base de desenvolvimento e o Postgresql como base de dados."} 
                        projectName="Projeto Tasks" repo="https://github.com/iwebwork/iwebwork-TasksWithReactNative"/>
                    <Card body={"Projeto criado em grupo, e foi usado como apresentação escolar. Foi utilizado Php no back-end, html, css e javaScript no front-end em conjunto com MySql como banco de dados."} 
                        projectName="Doe Fácil" repo="https://github.com/iwebwork/pi2019PrimeiroSemestre"/>
                </div>
            </div>
        </section>
    )
}

export default profile