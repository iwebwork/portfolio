import React from 'react'
import {Img} from 'react-image'

const card = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card" style={{border:'6px solid #dee2e6'}}>
                <div className="card-header text-center">
                    {props.img 
                    ?
                        <Img src={props.img} className="card-img-top center" alt="Exemplo" style={{maxHeight:'200px', maxWidth:'200px'}}/>
                    :
                        <div>{props.projectName}</div>
                    }
                </div>
                <div className="card-body">
                    {props.body}
                    
                </div>
                <div className="card-rodape d-flex justify-content-around">
                    <div className="container">
                        <div className="row justify-content-center btn-card-style">
                            {
                                props.repo
                                ?
                                    <a target="_blank" className="text-center" href={props.repo} style={{textDecoration: 'none'}}>
                                        <div className="col-sm btnCard h5" style={{color:'#000000'}}>
                                            Git
                                        </div>
                                    </a>
                                : null
                                    
                            }
                            
                            {
                                props.video
                                ?
                                <div className="col-sm">
                                    video
                                </div>
                                :null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card