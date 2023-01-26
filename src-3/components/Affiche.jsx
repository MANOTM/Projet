import React from 'react'
import Table from './AffichageDessier/Table'

export default function Affiche() {
    return (
        <section className="countainer affiche-section">
            <div className='form-row space'>
                <div>
                    <h3 className='Title'>Stock <small className='fs-1'>/ 259 item</small></h3>
                    <p className='paragraph'>gérer tout votre stock</p>
                </div>
                <button className='btn bg-primary'>+ Ajouter</button>
            </div>
            <Table />
        </section>
    )
}
