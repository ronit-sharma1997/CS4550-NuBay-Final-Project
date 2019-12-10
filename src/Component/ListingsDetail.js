import React from 'react'
import ItemRow from "./ItemRow";
import ListingRow from "./ListingRow";
import NuBayService from "../services/NuBayService";

export default class ListingsDetails extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let componentProps = this.props
        return (
            <div>
                <div className="row align-items-end mt-5">
                    <div className="col-10">
                        <div className="float-left">
                            {this.props.dataExists &&
                            <h3>{this.props.headingTitle} ({this.props.items.length  + this.props.services.length})</h3>}
                        </div>
                    </div>
                    <div className="col-2 d-none d-md-block">
                        Price
                    </div>
                </div>
                <hr className="mt-0"/>
                {this.props.items.length !== 0 && <div className="row align-items-end">
                    <div className="col-10">
                        <div className="float-left">
                            <h4>Northeastern Items</h4>
                        </div>
                    </div>
                </div>}
                {this.props.dataExists && this.props.items.map((item) => {
                        return (

                            <ListingRow
                                item={item}
                                itemType={"northeasternItem"}
                                listingType={"Listing"}
                                viewOnly={componentProps.viewOnly}
                            />

                        )
                })}
                {this.props.services.length !== 0 && <div className="row align-items-end">
                    <div className="col-10">
                        <div className="float-left">
                            <h4>Northeastern Services</h4>
                        </div>
                    </div>
                </div>}
                {this.props.services && this.props.services.map((item) => {
                    return (

                        <ListingRow
                            item={item}
                            itemType={"northeasternService"}
                            listingType={"Listing"}
                            viewOnly={componentProps.viewOnly}
                        />

                    )
                })}
            </div>
        )
    }
}
