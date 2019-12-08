import React from 'react'
import ItemRow from './ItemRow'
import NuBayManagerHeaderBar from "./NuBayManagerHeaderBar";
import NuBayService from "../services/NuBayService";

class NuBayTable extends React.Component {
debugger;
    constructor(props) {
        super(props);
        this.nuBayService = NuBayService.getInstance()
        this.setItems = this.setItems.bind(this);
        this.state = {
            items: [],
            initialLoad: false
        }

        if(props.match) {

            this.nuBayService.getEbayItems(props.match.params.searchTerm, this.setItems)
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

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.searchTerm != nextProps.match.params.searchTerm) {
            this.nuBayService.getEbayItems(nextProps.match.params.searchTerm, this.setItems)
        }
    }

    render() {
        let componentProps = this.props;
        return(
        <div>
            <div className={this.props.initialLoad ? "d-none" : ""}>
                <NuBayManagerHeaderBar itemlength={this.state.items.length} searchResult={this.props.match.params.searchTerm}/>
            </div>
            <div className="container" style={{'background-color': 'white'}}>
                {this.state.items.length !== 0 && <div className="row">
                    <div className="container-fluid">
                    <h4>Ebay Items</h4>
                    </div>
                </div>}

                {this.state.items.map( function(item, index) {

                    {
                        return (

                            <ItemRow
                                item={item}
                                index={index}
                                loggedIn={componentProps.loggedIn}
                            />
                        )

                    }
                })}


            </div>
        </div>)
    }
}
export default NuBayTable