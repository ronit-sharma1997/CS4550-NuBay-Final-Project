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
        this.deleteBookmark = this.deleteBookmark.bind(this);
        this.editItem = this.editItem.bind(this);
        this.editService = this.editService.bind(this);
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

    deleteBookmark(itemId) {
        console.log("deleting bookmark")
        if(this.props.itemType == "ebay") {
            this.userService.deleteEbayBookmarkedItemForUser(this.props.userId,
                itemId, this.setNewUserState)
        }
        else if(this.props.itemType == "northeasternItem") {
            this.userService.deleteBookmarkedItemForUser(this.props.userId,
                itemId, this.setNewUserState)
        }
    }

    editItem(itemId) {
        this.props.history.push(`/editItem/${itemId}`)
    }

    editService(serviceId) {
        this.props.history.push(`/editService/${serviceId}`)
    }

    setNewUserState(responseCode) {
        console.log(responseCode)
        if(this.props.itemType == "northeasternItem") {
            if(responseCode === 0) {
                this.props.setLoggedInUser(this.props.userId)
            } else {
                alert("Error adding/deleting bookmarked item")
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
        console.log(componentProps.userId)
        let component = this;
        let headingText = this.props.itemType === "northeasternItem" ? "Northeastern Items" : this.props.itemType === "ebay"?  "Ebay Items" : "Northeastern Services"
        return(
        <div>
            <div className={this.props.initialLoad ? "d-none" : "container-fluid"}>
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
                                userId={componentProps.userId}
                                bookmarkIds={componentProps.bookmarkIds}
                                addBookmark={component.addBookmark}
                                deleteBookmark={component.deleteBookmark}
                                editItem={component.editItem}
                                editService={component.editService}
                            />
                        )

                    }
                })}


            </div>
        </div>)
    }
}
export default NuBayTable