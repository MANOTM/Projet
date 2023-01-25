import React from 'react'
import { Search } from '../Data/Icons'

export default function Affiche() {
    return (
        <section className="countainer">
            <div className='form-row space'>
                <h3 className='Title'>Stock</h3>
                <button className='btn bg-primary'>Ajouter</button>
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
                        <td colSpan={1}>
                            <div className="Filter-btn">
                                <span>Filter {`>`}</span>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >1</td>
                        <td>Computer</td>
                        <td>150</td>
                        <td className='operation'>
                            <button className='btn btnDelete bg-danger'>Supprimer</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Computer</td>
                        <td>150</td>
                        <td className='operation'>
                            <button className='btn btnDelete bg-danger'>Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
