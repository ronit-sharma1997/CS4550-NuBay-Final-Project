import React from 'react'

const ItemCard = (item)  => {
	debugger;
	return (
	<div className="card" styles={{width: '10rem'}}>
	<div className="img_container">
	<img className="card-img-top" 
                     src="https://picsum.photos/300/200"/>
	</div>
	<div className="card-body">
	<div className ="row">
			<h4> {item.item.title} </h4>
		</div>
	<div className ="row justify-content-between">
	<div className="col-5 float-left">
		hello
	</div>
	<div className="col-5 float-right ml-2">
		world
	</div>
	</div>
	</div>
</div>
)
}
export default ItemCard;

