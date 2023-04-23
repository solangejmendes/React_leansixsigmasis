import React from 'react';
import Cardshorizontal from '../inc/Cardshorizontal';


export default function Productos() {
    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Productos 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                            Tenemos varios paquetes estandar disponibles para utulización inmediata. 
                            Los paquetes pueden ser ajustados de acuerdo a las necesidades de cada empresa.   
                        </h6>
                        <div className='Bkground3'>
                            <Cardshorizontal />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
