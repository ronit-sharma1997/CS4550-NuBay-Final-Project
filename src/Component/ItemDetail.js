import React, { Fragment } from 'react'

class ItemDetail extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        console.log(this.props)

        let item;
        if (this.props.item.length < 3) {
            item = this.props.item[0];
        }
        else {
            item = this.props.item[1];
        }
        console.log(item);

        let itemName = "";
        let itemLink = "";
        let imageSource = "";
        let itemPrice = "";
        let itemLocation = "";
        let itemSeller = "";
        let itemSellerRating = "";
        let itemCategory = "";
        let itemCondition = "";

        if (item) {
            itemName = item.title;
            itemLink = item.viewItemURL;
            imageSource = item.galleryURL;
            itemPrice = item.price;
            itemLocation = item.location;
            itemSeller = item.seller;
            itemSellerRating = item.sellerRating;
            itemCategory = item.categoryName;
            itemCondition = item.conditionType;
        }

        return (
            <Fragment>
                <div className="row">
                    <button
                        className="btn btn-secondary"
                        onClick={() => { this.props.setItemIdFunc(0) }}
                    >
                        Back to List
                        </button>
                    <h1 className="item-detail-name">{itemName}</h1>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img
                            src={imageSource}
                            className="item-detail-image"
                        />
                    </div>
                    <div className="col-6">
                        <div className="item-detail-next-to-image">
                            <h4 className="item-detail-next-to-image-category">Category</h4>
                            <h6>{itemCategory}</h6>
                        </div>
                        <div className="item-detail-next-to-image">
                            <h4 className="item-detail-next-to-image-category">Condition</h4>
                            <h6>{itemCondition}</h6>
                        </div>
                        <div className="item-detail-next-to-image">
                            <h4 className="item-detail-next-to-image-category">Location</h4>
                            <h6>{itemLocation}</h6>
                        </div>
                        <div className="item-detail-next-to-image">
                            <h4 className="item-detail-next-to-image-category">Price</h4>
                            <h6>{itemPrice}</h6>
                        </div>
                        <div className="item-detail-next-to-image">
                            <h4 className="item-detail-next-to-image-category">Seller (Rating)</h4>
                            <h6>{itemSeller} ({itemSellerRating})</h6>
                        </div>
                    </div>

                </div>

                <a className="item-detail-description" href={itemLink}>Link to item on Ebay</a>
            </Fragment>
        )
    }
}

export default ItemDetail