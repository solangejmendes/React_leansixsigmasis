import React from 'react';
import repair from '../../images/repair.jpg';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={repair} className="w-100 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Bla bla bla
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={repair} className="w-100 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Bla bla bla
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={repair} className="w-100 border-bottom" alt="services" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Bla bla bla
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}
