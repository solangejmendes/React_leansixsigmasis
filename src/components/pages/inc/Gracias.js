import React from 'react';
import { Link } from 'react-router-dom';

export default function Gracias() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Gracias</h3>
                            <div className="underline mx-auto"></div>
                            <p>Gracias por ponerse en contacto con nosotros. Analizaremos su solucitud y le contestaremos con la mayor brevidad posible.</p>
                            <Link to="/">
                                    <button className="btn btn-primary shadow">
                                        Volver
                                    </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    )
}
