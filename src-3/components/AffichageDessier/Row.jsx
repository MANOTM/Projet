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
            one.data.map((two,i) => (
                <NestedRow one={one} item={two} i={i} />
            ))
        }
    </>
}
