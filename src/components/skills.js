import React from 'react'
import {containerMarginBotton} from '../constants'


const Skills = () => {
    return (
        <section name="skills" id="skills" style={containerMarginBotton}>
            <div className="container-fluid" style={{marginTop:'50px', marginBottom:'100px', backgroundColor:'rgb(240 240 240)'}}> 
                <div className="row">
                    <div className="col-lg"  style={{marginTop:'10px'}}>
                        <div className="card" style={{border:'0px'}}>
                            <div className="card-header text-center">
                                Languages
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
                                            <td>Solid Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>JavaScript</td>
                                            <td>Solid Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Delphi</td>
                                            <td>Intermediate Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Python</td>
                                            <td>Basic Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>C#</td>
                                            <td>Basic Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Java</td>
                                            <td>Basic Knowledge</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>    
                    <div className="col-lg" style={{marginTop:'10px'}}>
                        <div className="card" style={{border:'0px'}}>
                            <div className="card-header text-center">
                                Frameworks/Technologies
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
                                            <td>Solid Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>React Native</td>
                                            <td>Solid Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Bootstrap</td>
                                            <td>Solid Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Laravel</td>
                                            <td>Intermediate Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>React</td>
                                            <td>Intermediate Knowledge</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>        
                    <div className="col-lg" style={{marginTop:'10px'}}>
                        <div className="card" style={{border:'0px'}}>
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
                                            <td>Solid Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Firebase</td>
                                            <td>Solid Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>PostgreSQL</td>
                                            <td>Intermediate Knowledge</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>MongoDb</td>
                                            <td>Intermediate Knowledge</td>
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