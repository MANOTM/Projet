import React, { useState } from 'react'
import { Option } from '../../Data/Icons'
import DetaisNestedRow from './DetaisNestedRow'

export default function NestedRow({item:two,i:index,out}) {

    const [show,setShow] = useState(false)
    const [Nested,setNested] = useState(false)

    return <tr>
        <th className='fw-1'>#{index+1}</th>
        <td className='fw-2 fs-2'>{two.type}</td>
        <td className='fw-2 Quntity'>{two.total} {two.lastAction.Status ? <p className='incre'>+{two.lastAction.Valeur}</p> : <p className='decre'>-{two.lastAction.Valeur}</p>}</td>
        <td className='fw-2'>{two.lastAction.Date}</td>
        <td className='operation'>
            <span onClick={()=>setNested(true)} className='option-icon'><Option /></span>
            {/* <div className={show ? "Edit-block active" : "Edit-block"}>
                <span className='Edit-icon Edit'><Edit /></span>
                <span onClick={()=>setNested(true)}><Delete /></span>
            </div> */}
        </td>
        <span onClick={()=>setNested(false)} className={Nested ? "black-background active":"black-background"}></span>
        <span className={Nested ? "type-popped active":"type-popped"}>
            <table className='table type-table'>
                <tbody>
                    <DetaisNestedRow out={out} type={two.type} item={two.info} />
                </tbody>
            </table>
        </span>
    </tr>
}
