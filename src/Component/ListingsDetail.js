import React from 'react'
import ItemRow from "./ItemRow";
import ListingRow from "./ListingRow";
import NuBayService from "../services/NuBayService";

export default class ListingsDetails extends React.Component {
    constructor(props) {
        super(props)
        this.service = NuBayService.getInstance()
        this.renderRow = this.renderRow.bind(this);
        this.addToArray = this.addToArray.bind(this);
        this.state = {
            ebayItemsArray: [],
            count: 0
        }
    }


    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            if(nextProps.headingTitle.includes("Listing")) {
                this.setState(prevState => ({
                    ...prevState,
                    ebayItemsArray: []
                }))
            } else {
                nextProps.ebayItems.map((item) =>
                    this.service.getEbayItemById(parseInt(item), this.addToArray)
                )
            }
        }
    }

    addToArray(rowItem) {
        this.setState(prevState => ({
            ...prevState,
            ebayItemsArray: [...prevState.ebayItemsArray, rowItem],
            count: prevState.count + 1
        }))
    }

    renderRow(rowItem) {
        return (

            <ListingRow
                item={rowItem}
                itemType={"ebay"}
            />

        )
    }

    render() {
        console.log(this.state.ebayItemsArray)
        let ebayArray = this.state.ebayItemsArray.filter((item, index, self) => index=== self.findIndex((i) => (
            i.itemId === item.itemId)))
        return (
            <div>
                <div className="row align-items-end mt-5">
                    <div className="col-10">
                        <div className="float-left">
                            {this.props.dataExists &&
                            <h3>{this.props.headingTitle} ({this.props.items.length + this.props.ebayItems.length + this.props.services.length})</h3>}
                        </div>
                    </div>
                    <div className="col-2 d-none d-md-block">
                        Price
                    </div>
                </div>
                <hr className="mt-0"/>
                <h4>Northeastern Items</h4>
                {this.props.dataExists && this.props.items.map((item) => {
                        return (

                            <ListingRow
                                item={item}
                                itemType={"northeasternItem"}
                            />

                        )
                })}
                <h4>Ebay Items</h4>
                {ebayArray && ebayArray.map((item) => {
                    return (

                        <ListingRow
                            item={item}
                            itemType={"ebay"}
                        />

                    )
                })}
                <h4>Services</h4>
                {this.props.services && this.props.services.map((item) => {
                    return (

                        <ListingRow
                            item={item}
                            itemType={"northeasternItem"}
                        />

                    )
                })}
            </div>
        )
    }
}
