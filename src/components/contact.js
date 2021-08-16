import React from 'react'
import moment from 'moment'

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    @ Todos os direito reservados - Igor Siqueira da Silva - {moment().format('DD/MM/YYYY')}
                </div>
            </div>
        </div>
    )
}

export default Contact