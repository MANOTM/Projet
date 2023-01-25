import React, { useState } from "react";
import Input100 from "./Input";
import Data from "../Data/data.json"

export default function Formajoute() {
  
  const [selected,setSelected] = useState(null)

  return (
    <form className="countainer">
    <div className="form-row">
      <div className="form-group w37">
        <label htmlFor="type">Sélectionner un produit</label>
        <select name="select" id="type" onChange={e => setSelected(e.target.value)}>
          <option value="-" hidden="">Sélectionner Produit</option>
          {Data.Produits.map((item,id) => (
            <option value={item.name} key={id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group w37">
        <label htmlFor="Quntity">Quntité de produit</label>
        <input type="number" name="" min={0} id="Quntity" placeholder="Quntité" />
      </div>
    </div>

<div className="form-row">
    {
      selected && (
        Data.Produits.map(item => {
          if(item.name === selected){
            return(
              item.Info.map((one,index) => (
                <Input100 item={one}  key={index} />
              ))
              )
          }
        })
      )
    }
</div>
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea placeholder="Ajouter une Discription..." name="" id="description" cols={30} rows={10} defaultValue={""} />
    </div>
    <button className="btn bg-primary">Ajouter</button>
  </form> 
  )
}
