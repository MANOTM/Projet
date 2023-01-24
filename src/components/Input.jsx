import React from 'react'

export default function Input100({item}) {
  const {name , data} = item
  return (
    <div className="form-group">
    <label htmlFor="type">{name}</label>
    <select name="" id="type">
      {
        data.map((one,index) => (
          <option key={index} value="ordinateur">{one}</option>  
        ))
      }
    </select>
  </div>
  )
}
