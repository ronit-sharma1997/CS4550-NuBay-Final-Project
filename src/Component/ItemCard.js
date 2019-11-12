import React from 'react'

var divStyle = {
	width: '100%',
	height: '15vw',
	'object-fit': 'cover'

}


const ItemCard = ({item, setItemId})  => {

    // console.log(item);
    // console.log(setItemId);

	return (
	<div className="container-fluid">
	<div className="card card-size" styles={divStyle}>
	<div className="img_container card-image">
	<button className="float-right overlay-button ">
      <i className="fa fa-cart-plus fa-2x float-right" style={{"color":'white'}}></i> </button>
    <img 
        className="img-responsive card-img-top mb-0 card-image"
        src={item.galleryURL}
        onClick={() => {setItemId(item.itemId)}}
        />
	</div>
	<div className="card-body mt-0 ml-0 pl-0 mb-0 pt-0">

	<div className ="row ml-1">
        <b 
            className="item-name"
            onClick={() => {setItemId(item.itemId)}}> 
                {item.title} 
            </b>
	</div>

	<div className ="row mt-0 pl-0 ml-1">
	<div className="col-12 card-subtitle mt-0 ml-0 pl-0">
		<span><b className="subTextFont">{item.price} </b> •
		<b className ="subTextFont"> Watch Count: {item.watchCount} </b></span>
	</div>
	</div>
	<div className="row">
	<div className ="col-12 ml-1">
	<span>
		<img src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_50,w_50,f_auto,q_auto:eco/kx4zcwarburlmyywxgmi"/>
	</span>
	</div>
	</div>
	</div>
	</div>
</div>
)
}
export default ItemCard;

