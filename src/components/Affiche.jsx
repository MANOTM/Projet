import React from 'react'
import { Link } from 'react-router-dom'
import Table from './AffichageDessier/Table'

export default function Affiche() {
    return (
        <section className="countainer affiche-section">
            <div className='form-row space'>
                <div>
                    <h3 className='Title'>Stock <small className='fs-1'>/ 259 item</small></h3>
                    <p className='paragraph'>gérer tout votre stock</p>
                </div>
                <button className='btn bg-primary'><Link to="/ajouter">+ Ajouter Un Article</Link></button>
            </div>
            <Table />
        </section>
    )
}
