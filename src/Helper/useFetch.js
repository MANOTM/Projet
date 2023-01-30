
import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [loading,setLoding] = useState(true)
    const [err,setErr] = useState(null)
    const [data,setdata] = useState(null)
  useEffect(()=>{
    fetch(url)
    .then((res)=>{
        if(!res.ok) {
            throw Error('ERROR')
        }
        return res.json()
    })
    .then(data=>{ 
        setdata(data)
        setLoding(false)
    })
    .catch(err=>{
        setErr(err.message)
        setLoding(false)
    })
  },[url])
  return {loading , err , data}
}
