import React from 'react'
import ItemRow from "./ItemRow";
import ListingRow from "./ListingRow";

const ListingsDetails = ({items, headingTitle}) => {
    return(
        <div>
            <div className="row align-items-end mt-5">
                <div className="col-10">
                    <div className="float-left">
                        <h3>{headingTitle} ({items.length})</h3>
                    </div>
                </div>
                <div className="col-2 d-none d-md-block">
                    Price
                </div>
            </div>
            <hr className="mt-0"/>
            {items.map((item) => {

                {return(

                    <ListingRow
                        item={item}
                    />

                )

                }})}
        </div>
    )
}
export default ListingsDetails