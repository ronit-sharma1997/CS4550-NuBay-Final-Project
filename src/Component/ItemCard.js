import React from 'react'
import {Link} from 'react-router-dom'
import Constants from '../constants/constants'


var divStyle = {
	width: '100%',
	height: '15vw',
	'object-fit': 'cover'

}


const ItemCard = ({item, itemType})  => {
    // console.log(item)
    // console.log(card_type)
   // <div className="img_container card-image">
       //     {item.imageUrl &&
       // <img
         //   className="img-responsive card-img-top mb-0 card-image"
         //   src={item.imageUrl.length > 0 ? item.imageUrl[0] : ""}
          //  />
   console.log("BOOGA")
   var constants = Constants.getInstance()

   // logic for determining which page to link to goes here
   // in other words, prepending 'i', 's' or 'e' to id depending on type
   // note: use card_type here
   var item_id_for_link = "";
   // if (card_type == "ITEM_TYPE") {
   //     item_id_for_link = "i" + item.itemId;
   // }
   // else if (card_type == "SERVICE_TYPE") {
   //     item_id_for_link = "s" + item.itemId;
   // }
   
	return (
	<div className="container-fluid">
	<div className="card card-size" styles={divStyle}>
	<div className="img_container card-image">

    <img
        className="img-responsive card-img-top mb-0 card-image"
        src={constants.getImageSource(item, itemType)}
        />

	</div>
	<div className="card-body mt-0 ml-0 pl-0 mb-0 pt-0">

	<div className ="row ml-1">
            <Link to={`/details/${item_id_for_link}`}>
               <b className="card-item-title">
                {item.title}
                </b>
            </Link>
	</div>

	<div className ="row mt-0 pl-0 ml-1">
	<div className="col-12 mt-0 ml-0 pl-0">
		<b className="subTextFont">{constants.getItemPrice(item.value)} </b>
	</div>

	</div>
	</div>
	</div>
</div>
)
}
export default ItemCard;

