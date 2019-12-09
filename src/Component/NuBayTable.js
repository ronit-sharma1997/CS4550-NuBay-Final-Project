import React from 'react'
import ItemRow from './ItemRow'
import ItemService from '../services/ItemService'
import NuBayManagerHeaderBar from "./NuBayManagerHeaderBar";
import NuBayService from "../services/NuBayService";
import UserService from "../services/UserService";

class NuBayTable extends React.Component {

    constructor(props) {
        super(props);
        this.nuBayService = NuBayService.getInstance()
        this.itemService = ItemService.getInstance()
        this.userService = UserService.getInstance()
        this.setItems = this.setItems.bind(this);
        this.addBookmark = this.addBookmark.bind(this);
        this.setNewUserState = this.setNewUserState.bind(this);
        this.state = {
            items: [],
            initialLoad: false
        }

        if(props.match) {
            if(props.itemType == "ebay") {
            this.nuBayService.getEbayItems(props.match.params.searchTerm,
            this.setItems)
       }
        else if(props.itemType == "northeasternItem") {
            this.itemService.findItemsByKeyword(props.match.params.searchTerm,
            this.setItems)
        }
        }
        console.log(this.props)
    }

    setItems(items) {
        debugger;
        this.setState(prevState => ({
            ...prevState,
            items: items,
            initialLoad: true
        }))
    }

    addBookmark(itemId) {
        console.log("adding bookmark")
        if(this.props.itemType == "ebay") {
            this.userService.bookmarkEbayItemForUser(this.props.userId,
                itemId, this.setNewUserState)
        }
        else if(this.props.itemType == "northeasternItem") {
            this.userService.bookmarkItemForUser(this.props.userId,
                itemId, this.setNewUserState)
        }
    }

    setNewUserState(responseCode) {
        console.log(responseCode)
        if(this.props.itemType == "northeasternItem") {
            if(responseCode === 0) {
                this.props.setLoggedInUser(this.props.userId)
            } else {
                alert("Error adding bookmarked item")
            }
        } else {
            this.props.setLoggedInUser(this.props.userId)
        }

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.searchTerm != nextProps.match.params.searchTerm) {
            if(nextProps.itemType === "northeasternItem") {
                this.itemService.findItemsByKeyword(nextProps.match.params.searchTerm, this.setItems)
            } else if (nextProps.itemType === "ebay") {
                this.nuBayService.getEbayItems(nextProps.match.params.searchTerm, this.setItems)
            }
        }
    }

    render() {
        let componentProps = this.props;
        let component = this;
        let headingText = this.props.itemType === "northeasternItem" ? "Northeastern Items" : "Ebay Items"
        return(
        <div>
            <div className={this.props.initialLoad ? "d-none" : ""}>
                <NuBayManagerHeaderBar itemlength={this.state.items.length} searchResult={this.props.match.params.searchTerm}/>
            </div>
            <div className="container" style={{'background-color': 'white'}}>
                {this.state.items.length !== 0 && <div className="row">
                    <div className="container-fluid">
                    <h4>{headingText}</h4>
                    </div>
                </div>}

                {this.state.items.map( function(item, index) {

                    {
                        return (

                            <ItemRow
                                item={item}
                                itemType={componentProps.itemType}
                                index={index}
                                loggedIn={componentProps.loggedIn}
                                bookmarkIds={componentProps.bookmarkIds}
                                addBookmark={component.addBookmark}
                            />
                        )

                    }
                })}


            </div>
        </div>)
    }
}
export default NuBayTable