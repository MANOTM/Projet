import React, { useState } from 'react'
import { Down, Delete, ArrowDown, ArrowUp } from '../../Data/Icons'

export default function Column({ one, index}) {


    const [showDetais,setShowDetais] = useState(false)
    let QuntiteTotal = 0
    one.historique.map( one => {
        QuntiteTotal = one.quntity + QuntiteTotal
    })
    return (
        <>
        <tr className='type-title-title-type'>
            <td rowSpan={showDetais ? one.historique.length+1 : 1} className='fw-2'>{one.name}</td>
            <th>#{index+1}</th>
            <td className='fw-1'>{QuntiteTotal}</td>
            <td className='fw-1'>{one.historique[one.historique.length - 1].date}</td>
            <td className='DropDown'>
                <p className={showDetais ? "down work" : "down"} onClick={()=>setShowDetais(!showDetais)}><Down /></p>
            </td>
        </tr>
        {showDetais && <>
            {
                one.historique.map((two,i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td className={two.status ? 'mini-Quntity fw-1':'mini-Quntity fw-1 status'}>{two.quntity} { two.status ? <ArrowUp /> : <ArrowDown />}</td>
                        <td>{two.date}</td>
                        <td className='Delete-icon'><Delete /></td>
                    </tr>
                ))
            }
        </>}
        </>
    )
}
