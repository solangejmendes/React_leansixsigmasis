import React from 'react'
import { Link } from 'react-router-dom';
import Bimage1 from '../../inc/Bimage1'

export default function ourcompany() {
    return (
        <div>
            <Bimage1 />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>bla bla bla</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
