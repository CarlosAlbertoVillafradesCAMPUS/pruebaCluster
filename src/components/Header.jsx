import React from 'react'

export default function Header() {
    const send = async() =>{
        let dat = await(await fetch("http://127.0.19.94:5099/user")).json() 
        console.log(dat);
    }
    send();
  return (
    <div>Header</div>
  )
}
