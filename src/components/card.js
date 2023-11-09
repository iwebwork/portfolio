import React from 'react'
import {Img} from 'react-image'

const card = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card" style={{border:'0px '}}>
                <div className="card-header text-center">
                    {props.img 
                    ?
                        <Img src={props.img} className="card-img-top center" alt="Exemplo" style={{maxHeight:'200px', maxWidth:'200px'}}/>
                    :
                        <div>{props.projectName}</div>
                    }
                </div>
                <div className="card-body">
                    {
                        props.body
                        ? props.body
                        : () => {return(props.table)}
                    }
                    
                </div>
                <div className="card-rodape d-flex justify-content-around">
                    <div className="container align-items-center">
                        <div className="row btn-card-style">
                            {
                                props.repo
                                ?
                                <a  class="btn btn-warning" target="_blank" className="text-center" href={props.repo} style={{textDecoration: 'none'}}>
                                    <button className="col-sm btnCard h5 btn btn-warning " style={{color:'#000000'}}>
                                        {props.textLink}
                                    </button>

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