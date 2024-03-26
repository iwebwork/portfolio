import React from 'react'
import {containerMarginBotton} from '../constants'
import json from './../dados/bd.json';

class Skills extends React.Component {

    componentDidMount() {
        
    }

    getTable(card, body) {
        return(
            <div className="col-lg"  style={{marginTop:'10px'}}>
                <div className="card" style={{border:'0px'}}>
                    <div className="card-header text-center">
                        {card}
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
                                {/* <tr>
                                    <th scope="row">1</th>
                                    <td>Php</td>
                                    <td>Solid Knowledge</td>
                                </tr> */}
                                {body.map((e) => 
                                    <tr>
                                        <th scope="row">{e.Number}</th>
                                        <td>{e.Name}</td>
                                        <td>{e.Level}</td>
                                    </tr>
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    lerLanguage() {
        return this.getTable( "Languages", json.Skills[0].Languages);
    }

    lerFrameworksTechnologies(){
        return this.getTable( "Frameworks and Technologies", json.Skills[1].FrameworksTechnologies);
    }

    lerDataBases(){
        return this.getTable("DataBases", json.Skills[2].DataBases);
    }

    render () {
        return (
            <section name="skills" id="skills" style={containerMarginBotton}>
                <div className="container-fluid" style={{marginTop:'50px', marginBottom:'100px', backgroundColor:'rgb(240 240 240)'}}> 
                    <div className="row">
                        {this.lerLanguage()}
                        {this.lerFrameworksTechnologies()}
                        {this.lerDataBases()}
                    </div>   
                </div>
            </section>
        );
    } 
}

export default Skills