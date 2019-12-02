import React from 'react'
import ItemCard from './ItemCard'
import ItemRow from './ItemRow'
import NuBayManagerHeaderBar from "./NuBayManagerHeaderBar";
const NuBayTable = ({items, setItemIdFunc, showItemDetail,previousSearchTerm}) =>

<div>
<div className={showItemDetail ? "d-none" : ""}>
                    <NuBayManagerHeaderBar searchResult={previousSearchTerm}/>
                </div>

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

</div>

export default NuBayTable