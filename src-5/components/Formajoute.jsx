import React, { useEffect, useState } from "react";
import Input100 from "./Input";
import Data from "../Data/data.json" 
import getDate from "../Helper/formattedToday";
import axios  from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
export default function Formajoute() {
  const [selected,setSelected] = useState({})
  const [inputs,setInputs]=useState({})

  const changeSelect =e=>{ 
    const id=parseInt(e.target.value.split('/')[0])
    const name=e.target.value.split('/')[1]  
    setSelected(name) 
    setInputs({id,name}) 
  }
  const getValues =e=>{
    const {name,value}=e.target 
    setInputs({...inputs,[name]:value}) 
  }

  const add =e=>{
    e.preventDefault() 
    if (!(inputs.name)) return toast.warning('tous les champs sont obligatoite')
    if([1,2].find(e=>e===inputs.id) && !(inputs.type && inputs.config))return toast.warning('tous les champs sont obligatoite')
    if([3,4,9].find(e=>e===inputs.id) && !(inputs.type)) return toast.warning('tous les champs sont obligatoite')
    const lastAction={date:getDate(),valeur:inputs.quntity || 0,"status":true}
    

    axios.get(`http://localhost:5000/stock/${inputs.id}`).then((r) => {
      let produit = r.data;   
      console.log(produit);
      let Alldata =produit.data 
      let data
      if(inputs.id===4){
        data= Alldata.find(oo=>{return oo.type==="Capacité"}) 
      }else{
        data= Alldata.find(oo=>{return oo.type===(inputs.type || inputs.name)}) 
      } 

      if(data){ 
        data.total+=parseInt(inputs.quntity)
        data.lastAction=lastAction
        let Info=data.info
        let spicifique=Info.find(cc=> cc.name===(inputs.config || inputs.type || inputs.name) )

        if(spicifique){
          spicifique.historique.push({quntity:inputs.quntity || 0,date:lastAction.date,status:true,description:inputs.description || ''})
          Info.map(zz=>{
            if(zz.name===spicifique.name) zz=spicifique
            return zz
          })
        }else{
          Info.push({name:inputs.config || inputs.type || inputs.name ,historique:[
            {quntity:inputs.quntity ||0,date:lastAction.date,status:true,description:inputs.description ||''}
          ]})
        }

        data.info=Info   
      }else{
        produit.data.push(
          {type:inputs.type||inputs.name  ,total:inputs.quntity,lastAction,info:[
            {name:inputs.config||inputs.type,historique:[
          {date:lastAction.date,quntity:inputs.quntity ||0,status:true,description:inputs.description||''}
        ]}]}) 
      }  
      const newObj={...produit}
      axios.put(`http://localhost:5000/stock/${inputs.id}`,newObj)
      .then(response => toast.success("L'Article a été ajouté "))
      .catch(error => { 
        console.error('There was an error!', error);
        toast.error('il y a un problème')
    });
    });
     
  } 

 
  return (
    <form className="countainer" onSubmit={add}>

    <div className="form-row">
      <div className="form-group  ">
        <label htmlFor="type">Sélectionner un Article</label>
        <select name="name" id="type"   onChange={changeSelect} required>
          <option value="-" hidden>Sélectionner Article</option>
          {Data.Produits.map((item,id) => (
            <option value={`${item.id}/${item.name}`} key={id}  >{item.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group  ">
        <label htmlFor="Quntity">Quntité de Article</label>
        <input type="number" name="quntity" min={0} id="Quntity" placeholder="Quntité" value={inputs.quntity || ''} onChange={getValues} required/>
      </div>
    </div>

<div className="form-row">
    {
      selected && (
        Data.Produits.map(item => {
          if(item.name === selected ){
            if(selected==="Autre"){
              return(
                item.Info.map((one,index) => (
                 <div className="form-group" key={index}>
                  <label htmlFor="q">{one.name}</label>
                  <input type="text" name={one.type} id="q" placeholder={one.name} onChange={getValues} required/>
                 </div>
                ))
              )

            }else if(selected!=="Autre"){
              return(
                item.Info.map((one,index) => (
                  <Input100 item={one}  key={index} getValues={getValues}/>
                ))
              )
            }
          
          }
        })
      )
    }
</div>
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea placeholder="Ajouter Une  Discription..." name="description" value={inputs.description || ''} id="description" cols={30} rows={10} onChange={getValues} />
    </div>
    <button className="btn bg-primary">+ Ajouter</button>
    <ToastContainer/>
  </form> 
  )
}
