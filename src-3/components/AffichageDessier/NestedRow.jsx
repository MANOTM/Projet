import React, { useState } from 'react'
import { Option, Delete, Edit, Close } from '../../Data/Icons'

export default function NestedRow({item:two,one,i:index}) {

    const [show,setShow] = useState(false)
    const [Nested,setNested] = useState(false)

    return <tr>
        <th className='fw-1'>#{index+1}</th>
        <td className='fw-2 fs-2'>{two.type ? two.type : one.name}</td>
        <td className='fw-2 Quntity'>{two.Quntité.total} {two.Quntité.status ? <p className='incre'>+{two.Quntité.Nb}</p> : <p className='decre'>-{two.Quntité.Nb}</p>}</td>
        <td className='fw-2'>{two.Date}</td>
        <td className='operation'>
            <span onClick={()=>setShow(!show)} className='option-icon'><Option /></span>
            <div className={show ? "Edit-block active" : "Edit-block"}>
                <span className='Edit-icon Edit'><Edit /></span>
                <span onClick={()=>setNested(true)}><Delete /></span>
            </div>
        </td>
        <span onClick={()=>setNested(false)} className={Nested ? "black-background active":"black-background"}></span>
        <span className={Nested ? "delete-popped active":"delete-popped"}>
            <b  onClick={()=>setNested(false)}><Close /></b>
            <span>Are you sure ?</span>
            <div>
                <button onClick={()=>setNested(false)} className='btn bg-primary'>Cancel</button>
                <button className='btn delete-btn'>Supprimer</button>
            </div>
        </span>
    </tr>
}
