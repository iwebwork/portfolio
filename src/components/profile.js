import React from 'react'
import Card from './card'

const profile = () => {
    return (
        <section name="profile" id="profile">
            <div className="container-fluid">
                <div className="row justify-content-sm-center" style={{marginBottom:'50px'}}>
                    <Card body={"A clone of instagram, a mobile application created to serve as a learning experience. The React-Native framework was used as the development base, and Firebase as the database."} 
                        projectName="Project Lambe lambe" repo="https://github.com/iwebwork/projectLambe" textLink="Git"/>
                    <Card body={"A to-do list, a mobile app created to serve as a learning experience. The React-Native framework was used as the development base and Postgresql as the database."} 
                        projectName="Project Tasks" repo="https://github.com/iwebwork/iwebwork-TasksWithReactNative" textLink="Git"/>
                    <Card body={"Project created in group, and was used as a school presentation. Php was used in the back-end, html, css and javaScript in the front-end together with MySql as a database."} 
                        projectName="Doe Fácil" repo="https://github.com/iwebwork/pi2019PrimeiroSemestre" textLink="Git"/>
                    <Card body={"Pesquisa desenvolvida em grupo, foi aprovada pela Atena Editora (Especializada na publicação de livros e coletâneas de artigos científicos.)"} 
                        textLink="Link"
                        projectName="Artificial intelligence for identifies the use of masks in the prevention of COVID-19" repo="https://www.atenaeditora.com.br/post-artigo/52691"/>
                </div>
            </div>
        </section>
    )
}

export default profile

//INTELIGÊNCIA ARTIFICIAL PARA
// IDENTIFICAR O USO DE MÁSCARA NA PREVENÇÃO DA COVID-19