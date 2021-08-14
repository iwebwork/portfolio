import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <section className="header">
            <div className="container-fluid" style={{marginBottom: '50px'}}>
                <div className="row">
                    <div className="col-2">
                        <nav className="navbar position-absolute">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <FontAwesomeIcon icon={faAlignJustify} size={'lg'} />
                                </button>
                            </div>
                            <div className="collapse" id="navbarToggleExternalContent">
                                <div className="p-4">
                                    <h5 className="text-dark h4" style={{cursor: 'context-menu', marginBottom: '15px'}}>About</h5>
                                    <h5 className="text-dark h4" style={{cursor: 'context-menu', marginBottom: '15px'}}>Skils</h5>
                                    <h5 className="text-dark h4" style={{cursor: 'context-menu', marginBottom: '15px'}}>Profile</h5>
                                    <h5 className="text-dark h4" style={{cursor: 'context-menu'}}>Contact</h5>
                                    {/* <span className="text-muted">Toggleable via the navbar brand.</span> */}
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-10 float-right">
                        <div className="container-fluid">
                            <div className="row justify-content-end">
                                <div className="col-3">
                                    <a className="text-dark h5 p2">linkedIn</a>
                                </div>
                                <div className="col-2">
                                    <a className="text-dark h5 p2">github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 float-right">
                        
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </section>
    );
}

export default Header;