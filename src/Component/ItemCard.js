import React from 'react'
import {Link} from 'react-router-dom'
import Constants from '../constants/constants'


var divStyle = {
	width: '100%',
	height: '15vw',
	'object-fit': 'cover'
}

var bookmarkStyle = {
    padding: "0px 5px 0px 0px"
}


const ItemCard = ({item, itemType, sectionName})  => {

   var constants = Constants.getInstance()

   // logic for determining which page to link to goes here
   // in other words, prepending 'i', 's' or 'e' to id depending on type
   // note: use card_type here
   var item_id_for_link = "";

   if (itemType == "northeasternItem") {
       item_id_for_link = "i" + item.itemId;
   }
   else if (itemType == "northeasternService") {
       item_id_for_link = "s" + item.id;
   }
   else {
       item_id_for_link = "e" + item.itemId
   }
   
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
        <div className="col-9 mt-0 ml-0 pl-0">
            <b className="subTextFont">{constants.getItemPrice(item.value)} </b>
        </div>
        <div className="col-3 mt-0 ml-0 pl-0">
            {sectionName == "Trending NEU Items" && item.numBookmarks}
            {sectionName == "Trending NEU Items" && <i className="item-bookmark fa fa-bookmark"></i>} 
        </div>

	</div>
	</div>
	</div>
</div>
)
}
export default ItemCard;

