import React from 'react'

export default function Input100({item,getValues}) {
  const {name , data,type} = item 
  return (
    <div className="form-group">
    <label htmlFor="type">{name}</label>
    <select name={type || name} id="type" onChange={getValues}>
      <option value="" hidden>Sélectionner le {name}</option>
      {
        data.map((one,index) => (
          <option key={index} value={one}>{one}</option>  
        ))
      }
    </select>
  </div>
  )
}
