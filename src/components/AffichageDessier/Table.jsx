import React from 'react'
import { Error1, Search } from '../../Data/Icons'
import useFetch from '../../Helper/useFetch'
// import Data from "../../Data/data.json"
import Row from './Row' 
import '../../loading.css' 

export default function Table() {
    const {loading , err , data}=useFetch('http://localhost:5000/stock')
    return( 
        <>
        
        {loading && <div className="loanding"> <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
        {err && <div className='loanding'><Error1/></div>}
        {data && <table className='table'>
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
                data.map( (one,index) => (
                    <Row key={index} item={one} />
                    ) )
            }
        </tbody>
    </table>}
    </>
    )
}
