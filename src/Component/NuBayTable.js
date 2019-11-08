import React from 'react'
import ItemCard from './ItemCard'

const NuBayTable = ({items}) =>  

<div className="row ml-3">

{items.map((item) => { 

{return(
	
	<div className="col-12 mh-25 col-md-4 col-lg-3">
	<ItemCard item={item}
/>
	</div>
	)

}})}


</div>

export default NuBayTable