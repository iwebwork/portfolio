import React from 'react'

const Progressbar = (props) => {
    
    const texto = (str) => {

        if(str <= 25)
            return 'Conhecimento básico'
        else if(str >= 26 && str <= 50)
            return 'Conhecimento intermediário'
        else if(str >= 51 && str <= 99)
            return 'Sólido conhecimento'
        else
            return 'Domínio total'
        
    }

    return (
        <div className="progressbar" style={{ marginBottom:'10px', marginTop:'10px'}}>
            <label className="">{props.title}</label>
            <div className="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" aria-valuenow={props.width} aria-valuemin="0" aria-valuemax="100" 
                style={{"width":props.width+"%"}}>
                    {
                        texto(props.width)
                    }
            </div>
        </div>
    )
}

export default Progressbar