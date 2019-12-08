import React from 'react'
import Constants from '../constants/constants'

const ListingRow = ({item}) => {
    var constants = Constants.getInstance()
    return(
        <div className="my-auto">
            <div className="row">
                <div className ="col-md-3 col-12">
                    <div className="detail-image table-image-width">
                        {item && <img src={item.base64Image.length > 0 ? item.base64Image : ""} className="mx-auto w-100"/>}
                    </div>
                </div>
                <div className="col-md-7 col-12 my-auto">
                    <div className="row">
                        {/*<Link to={`/item-detail/${item.itemId}`}>*/}
                        <div className="col-12">
                            {item && <b className="item-name"> {item.title} </b>}
                        </div>
                        <div className="col-12">
                            {item && <span className="condition-text"> {item.conditionString} • {item.categoryName}</span>}
                        </div>
                        {/*</Link>*/}
                    </div>
                </div>
                <div className="col-md-2 my-auto d-none d-md-block">
                    {item && <b className="price-string"> {constants.getItemPrice(item.value)}
                    </b>}
                </div>
            </div>
            <hr/>
        </div>
    )

}
export default ListingRow