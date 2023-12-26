import React, { useState } from 'react'
import '../css/Page.css'
import List from './List'
 

export default function Page() {


const [basket, setBasket] = useState ([]) ;




    return (
        <>

         <List  />
   

        </>
    )
}