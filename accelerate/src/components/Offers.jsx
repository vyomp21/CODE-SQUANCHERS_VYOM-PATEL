
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react'
import Offer from "./Offer.jsx"
import "../styles/Offers.css"

const Offers = ({offer}) => {
    return (
        <div className="offers"> 
        {offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} description={item.description} title={item.title} wiki={item.wiki} />
        ))}
    </div>
    )
}

export default Offers