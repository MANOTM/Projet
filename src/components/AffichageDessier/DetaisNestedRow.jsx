import React from 'react'
import Column from './Column'

export default function DetaisNestedRow({ item, type, out}) {
    return <>
            <tr className='tr-title'>
                <td colSpan={9}>
                    <div className="type-title-article">
                        <span>{`>`} {out} {">"} {type} {">"}</span>
                        <p>{item.length} Articles</p>
                    </div>
                </td>
            </tr>
                {
                 item &&   item.map((one,i) => (
                               one.historique.length>0? <Column key={i} index={i} one={one} type={type} out={out} />:''
                        ))
                }
            </>
}
