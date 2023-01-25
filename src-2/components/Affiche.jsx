import React from 'react'
import { Search, Delete } from '../Data/Icons'
import Data from "../Data/data.json"

export default function Affiche() {
    return (
        <section className="countainer affiche-section">
            <div className='form-row space'>
                <div>
                    <h3 className='Title'>Stock <small className='fs-1'>{`(259 item)`}</small></h3>
                    <p className='paragraph'>gérer tout votre stock</p>
                </div>
                <button className='btn bg-primary'>+ Ajouter</button>
            </div>
            <table className='table'>
                <thead>
                    <tr className='Filter-tr'>
                        <td colSpan={3}>
                            <div className="input-search">
                                <Search />
                                <input className='Search fw-2' type="text" placeholder='Search...' />
                            </div>
                        </td>
                        <td colSpan={2}>
                            <div className="Filter-btn">
                                <span>Filter {`>`}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>index</th>
                        <th>Nom de produit</th>
                        <th>Quntité</th>
                        <th>Period</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.Stock.map( (one,index) => (
                            <tr key={index}>
                                <th className='fw'>{index+1}</th>
                                <td className='fw-2 fs-2'>{one.type}</td>
                                <td className='fw-2'>{one.Quntité}</td>
                                <td className='fw-2'>{one.Date}</td>
                                <td className='operation'>
                                    <Delete />
                                </td>
                            </tr>
                        ) )
                    }
                </tbody>
            </table>
        </section>
    )
}
