import React from 'react'
import NestedRow from './NestedRow'

export default function Row({item : one}) { 
    return <>
        <tr className='TypeTitle tr-title'>
            <td colSpan={9}>
                <span>{`>`} {one.name}</span>
            </td>
        </tr>
        {   
           one.data && one.data.map((two,i) => (
                <NestedRow key={i} out={one.name} item={two} i={i} />
            ))
        }
    </>
}
