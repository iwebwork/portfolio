import React from 'react'
import {containerMarginBotton} from '../constants'


const Skills = () => {
    return (
        <section name="skills" id="skills" style={containerMarginBotton}>
            <div className="container-fluid" style={{marginTop:'190px', marginBottom:'50px', backgroundColor:'rgb(240 240 240)'}}> 
                <div className="row">
                    <div className="col-lg"  style={{marginTop:'10px'}}>
                        <div className="card" style={{border:'6px solid #dee2e6'}}>
                            <div className="card-header text-center">
                                Linguagens
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col">N°</th>
                                            <th scope="col">nome</th>
                                            <th scope="col">nivel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Php</td>
                                            <td>Conhecimento Solido</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>JavaScript</td>
                                            <td>Conhecimento Solido</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Java</td>
                                            <td>Conhecimento Intermediário</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Delphi</td>
                                            <td>Conhecimento Intermediário</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Python</td>
                                            <td>Conhecimento Basico</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>C#</td>
                                            <td>Conhecimento Básico</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>    
                    <div className="col-lg" style={{marginTop:'10px'}}>
                        <div className="card" style={{border:'6px solid #dee2e6'}}>
                            <div className="card-header text-center">
                                Frameworks/Tecnologias
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col">N°</th>
                                            <th scope="col">nome</th>
                                            <th scope="col">nivel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Node</td>
                                            <td>Conhecimento Solido</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>React Native</td>
                                            <td>Conhecimento Solido</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Bootstrap</td>
                                            <td>Conhecimento Solido</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Laravel</td>
                                            <td>Conhecimento Intermediário</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>React</td>
                                            <td>Conhecimento Intermediário</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>        
                    <div className="col-lg" style={{marginTop:'10px'}}>
                        <div className="card" style={{border:'6px solid #dee2e6'}}>
                            <div className="card-header text-center">
                                DataBases
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col">N°</th>
                                            <th scope="col">nome</th>
                                            <th scope="col">nivel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mysql</td>
                                            <td>Conhecimento Solido</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Firebase</td>
                                            <td>Conhecimento Solido</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>PostgreSQL</td>
                                            <td>Conhecimento Intermediário</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>MongoDb</td>
                                            <td>Conhecimento Intermediário</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>       
                </div>   
            </div>
        </section>
    )
}

export default Skills