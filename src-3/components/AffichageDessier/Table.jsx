import React from 'react'
import { Search } from '../../Data/Icons'
import Data from "../../Data/data.json"
import Row from './Row'

export default function Table() {
    return <table className='table'>
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
                        <span>Filtre {`>`}</span>
                    </div>
                </td>
            </tr>
            <tr>
                <th>#</th>
                <th>Type</th>
                <th>Quantité</th>
                <th>dernière modification</th>
                <th>-</th>
            </tr>
        </thead>
        <tbody>
            {
                Data.Stock.map( (one,index) => (
                    <Row key={index} item={one} />
                    ) )
            }
        </tbody>
    </table>
}
