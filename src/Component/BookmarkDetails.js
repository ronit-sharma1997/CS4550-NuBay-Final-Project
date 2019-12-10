import React from 'react'
import ListingRow from "./ListingRow";
import NuBayService from "../services/NuBayService";

export default class BookmarkDetails extends React.Component {
    constructor(props) {
        super(props)
        this.service = NuBayService.getInstance()
        this.renderRow = this.renderRow.bind(this);
        this.addToArray = this.addToArray.bind(this);
        this.state = {
            ebayItemsArray: []
        }

    }

    componentDidMount() {
        this.props.ebayItems.map((item) =>
            this.service.getEbayItemById(parseInt(item), this.addToArray)
        )
    }


    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            nextProps.ebayItems.map((item) =>
                this.service.getEbayItemById(parseInt(item), this.addToArray)
            )
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
                listingType={"Bookmark"}
                viewOnly={"false"}
            />

        )
    }

    render() {

        let ebayArray = this.state.ebayItemsArray.filter((item, index, self) => index=== self.findIndex((i) => (
            i.itemId === item.itemId)))
        console.log(ebayArray)
        return(
            <div>
                <div className="row align-items-end mt-5">
                    <div className="col-10">
                        <div className="float-left">
                            {this.props.dataExists &&
                            <h3>{this.props.headingTitle} ({this.props.items.length  + ebayArray.length})</h3>}
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
                            listingType={"Bookmark"}
                            viewOnly={"false"}
                        />

                    )
                })}
                {ebayArray.length !== 0 && <div className="row align-items-end">
                    <div className="col-10">
                        <div className="float-left">
                            <h4>Ebay Items</h4>
                        </div>
                    </div>
                </div>}
                {ebayArray && ebayArray.map((item) => {
                    return (

                        <ListingRow
                            item={item}
                            itemType={"ebay"}
                            listingType={"Bookmark"}
                            viewOnly={"false"}
                        />

                    )
                })}
            </div>
        )
    }

}