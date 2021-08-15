import React from 'react'
import {Img} from 'react-image'

const card = (props) => {
    return (
        <div className="col">
            <div className="card">
                <Img src={props.img} className="card-img-top" alt="Exemplo"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                </div>
                <div className="card-rodape d-flex justify-content-around" style={{marginBottom: '10px'}}>
                    <button className="btn btn-primary">Repositório</button>
                </div>
            </div>
        </div>
    )
}

export default card