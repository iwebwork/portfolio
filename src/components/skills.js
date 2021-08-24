import React from 'react'
import {containerMarginBotton} from '../constants'

const Skills = () => {
    return (
        <section name="skills" id="skills" style={containerMarginBotton}>
            <div className="container-fluid" style={{marginTop:'190px', marginBottom:'50px', backgroundColor:'rgb(240 242 243)'}}>
                <div className="row justify-content-center" style={{marginBottom:'50px', marginTop:'50px'}}>
                    <div className="col-sm-3 text-center">
                        Skills
                    </div>
                </div> 
                        
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col">
                                <img src="assets/imgs/JavaScript-logo-600x375.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                            <div className="col">
                                <img src="assets/imgs/php.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                            <div className="col">
                                <img src="assets/imgs/java.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                            <div className="col">
                                <img src="assets/imgs/delphi.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                            <div className="col">
                                <img src="assets/imgs/python.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>                    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="assets/imgs/laravel.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>                      
                            </div>
                            <div className="col">
                                <img src="assets/imgs/react.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                            <div className="col">
                                <img src="assets/imgs/nodejs.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                            <div className="col">
                                <img src="assets/imgs/mysql.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="assets/imgs/postgresql.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>
                            </div>
                            <div className="col">
                                <img src="assets/imgs/firebase.png" className="rounded mx-auto d-block" alt="JavaScript" style={{maxWidth:'90px'}}/>                                                        
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 text-center">
                        <div 
                            className="row" 
                            style={ 
                                {
                                    borderBottom: '1px dotted black', 
                                    paddingBottom: '20px',
                                    marginBottom: '10px'
                                }
                            }
                        >
                            <div className="col-md rounded">
                                <div className="row">
                                    <div className="text-center">
                                        JavaScript <br/> Conhecimento sólido
                                    </div>
                                </div>
                            </div>
                            <div className="col-md text-center">
                                <div className="row">
                                    <div className="text-center">
                                        Php <br/> Conhecimento sólido
                                    </div>
                                </div>    
                            </div>
                            <div className="col-md text-center">
                                <div className="text-center">
                                    Java <br/> Conhecimento Intermediário
                                </div>    
                            </div>
                            <div className="col-md text-center">
                                Delphi <br/> Conhecimento Intermediário
                            </div>
                            <div className="col-md text-center">
                                Python <br/> Conhecimento Básico
                            </div>
                        </div>
                        {/* <div className="row justify-content-center" style={{ marginBottom:'50px'}}>
                            <div className="col-md-3 text-center">
                                Frameworks/Tecnologias
                            </div>
                        </div>   */}
                        <div className="row" style={
                            {
                                borderBottom: '1px dotted black', 
                                paddingBottom: '20px',
                                marginBottom: '10px'
                            }
                        }>
                            <div className="col-md text-center">
                                Laravel <br/> Conhecimento Básico
                            </div>
                            <div className="col-md text-center">
                                React <br/> Conhecimento Intermediário
                            </div>
                            <div className="col-md text-center">
                                React Native <br/> Conhecimento Intermediário
                            </div>
                            <div className="col-md text-center">
                                Nodejs <br/> Conhecimento Sólido
                            </div>
                        </div>
                        
                        {/* <div className="row justify-content-center" style={{ marginBottom:'50px'}}>
                            <div className="col-md-3 text-center">
                                DataBases
                            </div>
                        </div>   */}
                        <div className="row" style={
                            {
                                borderBottom: '1px dotted black', 
                                paddingBottom: '20px',
                                marginBottom: '10px'
                            }
                        }>
                            <div className="col-md text-center">
                                MySql <br/> Conhecimento Sólido
                            </div>
                            <div className="col-md text-center">
                                PostgreSQL <br/> Conhecimento Intermediário
                            </div>
                            <div className="col-md text-center">
                                MongoDb <br/> Conhecimento Básico
                            </div>
                            <div className="col-md text-center">
                                Firebase <br/> Conhecimento Sólido
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Skills