import React from 'react'
import ItemCard from './ItemCard'
import ItemRow from './ItemRow'

const NuBayTable = ({items, setItemIdFunc}) =>  

<div className="row ml-3">

{items.map((item) => { 

{return(
	
	<table className ="table row col-12">
    <tbody className="col-12">
    <ItemRow
        item={item}
        />
    </tbody>
	</table>
	)

}})}


</div>

export default NuBayTable