import React from 'react'
import Card from './card'
import json from './../dados/bd.json';

const profile = () => {
    console.log(json.Profile)
    return (
        <section name="profile" id="profile">
            <div className="container-fluid">
                <div className="row justify-content-sm-center" style={{marginBottom:'50px'}}>
                    {json.Profile.map((e) => 
                        <Card body={e.body} 
                              projectName={e.projectName} 
                              repo={e.repo} 
                              textLink={e.textLink}
                        />
                    
                    )}
                </div>
            </div>
        </section>
    )
}

export default profile

