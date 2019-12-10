import React from 'react'
import ImageGrid from './ImageGrid'
import PickImageComponent from './PickImageComponent'
import TextField from '@material-ui/core/TextField';
import ItemService from '../services/ItemService';
import ServiceItemService from '../services/ServiceItemService';
import Constants from '../constants/constants';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    overrides: {
        MuiInputLabel: {
            root: {
                color: "black",
                "&$focused": {
                    color: "black"
                }
            }
        },
        MuiInput: {
            underline: {
                '&:hover:not($disabled):after': {
                    borderBottom: `2px solid black`
                },
                '&:hover:not($disabled):before': {
                    borderBottom: `2px solid black`,
                },
                '&:after': {
                    borderBottom: `2px solid black`
                }
            }
        }
    }
});

class ListItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.nuBayService = ItemService.getInstance()
        this.serviceItem = ServiceItemService.getInstance()
        this.constants = Constants.getInstance();
        this.state = { pictures: [],images:[],images2:[],updateMode:false,
        item:{
            title:'',
            description:'',
            value:'',
            quantity:'',
            conditionString:'',
            categoryId:'',
            location:'',
            paymentOptions:'',
            categoryName:'',
            refundPolicy: '',
            image1:'',
            image2:'',
            image3:''
        },
        service: {
            title:'',
            description:'',
            value:'',
            availability:'',
            paymentOptions:'',
            categoryName:'',
            categoryId:'',
            image1:'',
            image2:'',
            image3:''
        }
        };
        this.setItem = this.setItem.bind(this);
        this.setService = this.setService.bind(this);
        if(props.match) {
            if(props.match.params.itemid) {
            this.type = "item"
            this.nuBayService.findItemById(props.match.params.itemid, this.setItem)
            }
            else if(props.match.params.serviceid) {
                this.type ="service"
                this.serviceItem.findServiceItemById(props.match.params.serviceid, this.setService)
            }
           else if(props.match.params.type) {
            this.type = props.match.params.type
            }
      }

        this.convertImagesToArray = this.convertImagesToArray.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
		this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
		this.fileUploadedDone = this.fileUploadedDone.bind(this);
		this.getByteArrayFromImage = this.getByteArrayFromImage.bind(this)
		this.onImageDelete = this.onImageDelete.bind(this);
		this.itemSubmit = this.itemSubmit.bind(this);
		this.renderCondition = this.renderCondition.bind(this);
		this.renderQuantityRefund = this.renderQuantityRefund.bind(this);
		this.updateAvailability = this.updateAvailability.bind(this);


    }


    setService(editService) {
        this.type ="service"
        var newImages = []
        if(editService.image1) {
            newImages.push(editService.image1)
        }
        if(editService.image2) {
            newImages.push(editService.image2)
        }
        if(editService.image3) {
                newImages.push(editService.image3)
            }
        this.setState(prevState => ({
            ...prevState,
            service: editService,
            images:newImages,
            updateMode: true


        }))


    }


    setItem(editItem) {
    debugger;
    this.type ="item"
    var newImages = []
    if(editItem.image1) {
        newImages.push(editItem.image1)
    }
    if(editItem.image2) {
        newImages.push(editItem.image2)
    }
    if(editItem.image3) {
            newImages.push(editItem.image3)
        }
    this.setState(prevState => ({
        ...prevState,
        item: editItem,
        images:newImages,
        updateMode: true


    }))

    }


    onImageDelete(selectedIndex) {
        if(this.type == "item") {
            if(selectedIndex == 0) {
            this.setState(prevState => ({
               ...prevState,
               images: prevState.images.filter((picture, index) => selectedIndex != index),
               item:{
                  ...prevState.item,
                  image1:prevState.item.image2,
                  image2:prevState.item.image3,
                  image3:""

               }

            }))
            }
            else if(selectedIndex == 1) {
             this.setState(prevState => ({
                           ...prevState,
                           images: prevState.images.filter((picture, index) => selectedIndex != index),
                           item:{
                              ...prevState.item,
                              image2:prevState.item.image3,
                              image3:""

                           }

                        }))
            }
            else {
            this.setState(prevState => ({
                ...prevState,
                images: prevState.images.filter((picture, index) => selectedIndex != index),
                 item:{
                  ...prevState.item,
                   image3:""
             }

             }))
            }
        }
    else {
    if(selectedIndex == 0) {
       this.setState(prevState => ({
             ...prevState,
             images: prevState.images.filter((picture, index) => selectedIndex != index),
             service:{
             ...prevState.service,
             image1:prevState.service.image2,
              image2:prevState.service.image3,
              image3:""

              }

         }))
       }
      else if(selectedIndex == 1) {
       this.setState(prevState => ({
           ...prevState,
            images: prevState.images.filter((picture, index) => selectedIndex != index),
            service:{
             ...prevState.service,
              image2:prevState.service.image3,
              image3:""

        }

       }))
     }
      else {
        this.setState(prevState => ({
            ...prevState,
            images: prevState.images.filter((picture, index) => selectedIndex != index),
             service:{
             ...prevState.service,
             image3:""
         }

       }))
                }



    }

    }

callBack(json) {
    alert("Item Posted")
}

itemSubmit() {
    if(!this.state.updateMode) {
    if(this.type == "item") {
    this.nuBayService.createItemForUser(this.props.userId, this.state.item, this.callBack)
    }
    else {
        this.serviceItem.createServiceItemForUser(this.props.userId, this.state.service, this.callBack)
    }
}
    else {
        if(this.type == "item") {
        this.nuBayService.updateItem(this.state.item, this.state.item.itemId, this.callBack)

    }
    else {
            this.serviceItem.updateServiceItem(this.state.service, this.state.service.id, this.callBack)

    }

}
}

renderCondition() {
    if(this.type == "item") {
return(
<div className="row border-bottom mt-2">
              <div className="col-8">
                   <h4> What is the condition of your product? </h4>
                         </div>

                <div className="form-group float-left col-12">
                       {/*<label htmlFor="title" className="col-form-label float-left">*/}
                  {/*    Product Name </label>*/}
               <input className="form-control" id="title"
                   value={this.state.item.conditionString}
                    onChange={this.conditionStringChanged}
                  placeholder="Condition String"/>
                   </div>

               </div>)

}

}


renderQuantityRefund() {
if(this.type == "item") {
return(
<div>
<div className="row mt-2 border-bottom">
           <div className="col-8">
            <h4> Quantity </h4>

             </div>
          <div className="form-group col-12">
          <input className="form-control" id="item-quanity"
           placeholder="4"
           value={this.state.item.quantity}
           onChange={this.quantityChanged}/>
         </div>
        </div>
        <div className="row border-bottom mt-2">
            <div className="col-8">
            <h4> Refund Policy </h4>

             </div>
             <div className="form-group col-12">
                 <textarea className="form-control" id="refund-policy"
              value={this.state.item.refundPolicy}
             onChange={this.refundPolicyChanged}
              placeholder="Describe your refund policy"></textarea>
             </div>
          </div>
        </div>
        )
}
else{
    return(
     <div className="row border-bottom mt-2">
                            <div className="col-8">
                                <h4> When are you available to complete the service? </h4>
                                </div>
                        <div className="form-group float-left col-12">
                            <textarea rows="4" className="form-control" id="service-availibity"
                            value={this.state.service.availability}
                            onChange={this.updateAvailability}
                            placeholder="When can you complete the service"></textarea>
                        </div>
                        </div>


    )

}

}

  convertImagesToArray() {
  var imagesArray = []
    if(this.type == "item") {
     if(this.state.item.image1 != '') {

     }
    }

  }

  deleteItem() {
    this.props.history.push(`/add/${this.type}`)
    if(this.type == "item") {
        this.nuBayService.deleteItemById(this.state.item.itemId);

    }
  }



 fileUploadedDone(fileReader) {

    var fileByteArray = [];
    var image1 = (this.type == "item" ? this.state.item.image1 : this.state.service.image1)
    var image2 = (this.type == "item" ? this.state.item.image2 : this.state.service.image2)
    var image3 = (this.type == "item" ? this.state.item.image3 : this.state.service.image3)
  var arrayBuffer = fileReader.srcElement.result,
            array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < array.length; i++) {
            fileByteArray.push(array[i]);
         }

     if (!image1 || image1 == '') {
     if(this.type == "item") {
    this.setState(prevState => ({
    ...prevState,
        item :{
        ...prevState.item,
        image1: fileByteArray
    }
    }
    ))
    }
    else {
    this.setState(prevState => ({
        ...prevState,
            service :{
            ...prevState.service,
            image1: fileByteArray
        }
        }
        ))

    }
    }
    else if(!image2 || image2 == '') {
     if(this.type == "item") {
        this.setState(prevState => ({
        ...prevState,
            item :{
            ...prevState.item,
            image2: fileByteArray
        }
        }
        ))
        }
        else {
        this.setState(prevState => ({
            ...prevState,
                service :{
                ...prevState.service,
                image2: fileByteArray
            }
            }
            ))

        }

    }
    else if(image3 || image3 == '') {
        if(this.type == "item") {
                this.setState(prevState => ({
                ...prevState,
                    item :{
                    ...prevState.item,
                    image3: fileByteArray
                }
                }
                ))
                }
                else {
                this.setState(prevState => ({
                    ...prevState,
                        service :{
                        ...prevState.service,
                        image3: fileByteArray
                    }
                    }
                    ))

                }


        }

}

 getByteArrayFromImage(file) {
    var fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    fileReader.addEventListener("load",this.fileUploadedDone)
    }


    itemTitleChanged = (event) => {
    event.persist()
    if(this.type == "item") {
  		this.setState(prevState => ({
  		    ...prevState,
  			item: {
            ...prevState.item,
  				title: event.target.value
  			}
  		}))
  		}
    else {
  		this.setState(prevState => ({
  		    ...prevState,
  			service: {
            ...prevState.service,
  				title: event.target.value
  			}
  		}))
  	}
}

conditionStringChanged = (event) => {
    event.persist()
  		this.setState(prevState => ({
  		    ...prevState,
  			item: {
            ...prevState.item,
  				conditionString: event.target.value
  			}
  		}))
}

quantityChanged = (event) => {
    event.persist()
     this.setState(prevState => ({
       ...prevState,
       item: {
       ...prevState.item,
        quantity: event.target.value
     }
    }))
                }


    descriptionChanged = (event) => {
    event.persist()
      if(this.type == "item") {
         this.setState(prevState => ({
           		    ...prevState,
           			item: {
                     ...prevState.item,
           			description: event.target.value
           			}
           		}))
         }
         else {
         this.setState(prevState => ({
           		    ...prevState,
           			service: {
                     ...prevState.service,
           				description: event.target.value
           			}
           		}))
         }
         }

    updateAvailability = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
          service: {
          ...prevState.service,
             availability: event.target.value
             }
          }))
    }

    refundPolicyChanged = (event) => {
    event.persist()
    this.setState(prevState => ({
               		    ...prevState,
               			item: {
                         ...prevState.item,
               			refundPolicy: event.target.value
               			}
               		}))
    }

    pricingChanged = (event) => {
        event.persist()
        if(this.type == "item") {
        this.setState(prevState => ({
                   		    ...prevState,
                   			item: {
                             ...prevState.item,
                   			value: event.target.value
                   			}
                   		}))
        }
        else {
        this.setState(prevState => ({
                   		    ...prevState,
                   			service: {
                             ...prevState.service,
                   				value: event.target.value
                   			}
                   		}))
        }
    }




    paymentMethodAdded = (event, values) => {
        event.persist()
        var paymentMethodString = ""
        values.map((item, index) => {
            if (index != (values.length - 1)) {
               paymentMethodString = paymentMethodString.concat(item["paymentMethod"] + ",")
            }
            else {
           paymentMethodString = paymentMethodString.concat(item["paymentMethod"])
            }
        })
        if(this.type == "item") {
        this.setState(prevState => ({
            ...prevState,
            item :{
                ...prevState.item,
                paymentOptions: paymentMethodString

            }
            }
        ))
        }
        else {
        this.setState(prevState => ({
                    ...prevState,
                    service :{
                        ...prevState.service,
                        paymentOptions: paymentMethodString

                    }
                    }
                ))

        }
    }

    addCategories = (event, value) => {
           event.persist()
            if(this.type == "item") {
             this.setState(prevState => ({
                  ...prevState,
                   item :{
                     ...prevState.item,
                     categoryName: value["categoryName"],
                     categoryId:value["id"]
                                }
                                }
                            ))
                        }
             else {
             this.setState(prevState => ({
                               ...prevState,
                                service :{
                                  ...prevState.service,
                                  categoryName: value["categoryName"],
                                  categoryId:value["id"]
                                             }
                                             }
                                         ))
                                     }

             }



    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps) {
            if(nextProps.match.params.itemid) {
                this.type = "item"
                this.nuBayService.findItemById(nextProps.match.params.itemid, this.setItem)
            }
            else if(nextProps.match.params.serviceid) {
                this.type ="service"
                this.serviceItem.findServiceItemById(nextProps.match.params.serviceid, this.setService)
            }
            else if(nextProps.match.params.type) {
                this.type = nextProps.match.params.type
            }
        }
    }


    fileSelectedHandler = event => {
        event.persist()
        this.getByteArrayFromImage(event.target.files[0])
        debugger;
        this.setState(prevState => ({
                    images: [...prevState.images, URL.createObjectURL(event.target.files[0])],

                }))
    }


    render() {
        return (
            <div>
                <div className="row mt-3 thickBorderBottom">
                    <div className="container">
                        <h2> {this.state.updateMode ? "Update Your " : "List Your New "}
                        {this.type == "service" ? "Service" : "Item"} </h2>
                    </div>
                </div>
                <div className="container mt-4">

                    <form>
                        <div className="row border-bottom mt-2">
                            <div className="col-8">
                                <h4> What is the name of your {this.type}? </h4>
                            </div>

                        <div className="form-group float-left col-12">
                            {/*<label htmlFor="title" className="col-form-label float-left">*/}
                            {/*    Product Name </label>*/}
                            <input className="form-control" id="title"
                            value={this.type == "item" ? this.state.item.title :
                                    this.state.service.title}
                            onChange={this.itemTitleChanged}
                                   placeholder={this.type == "service" ? "Service title" :
                                   "Item title"}/>
                        </div>

                    </div>

                     {this.renderCondition()}

                    <div className="row border-bottom mt-2">
                        <div className="col-8">
                            <h4> Describe Your Product </h4>
                            </div>
                    <div className="form-group float-left col-12">
                        <textarea className="form-control" id="item-description"
                        value={this.type == "item" ? this.state.item.description :
                                this.state.service.description}
                        onChange={this.descriptionChanged}
                        placeholder="Limit to 2 sentences"></textarea>
                    </div>
                    </div>
                        <div className="row border-bottom mt-2">
                            <div className="col-8">
                                <h4> Pricing </h4>

                            </div>
                            <div className="form-group col-12">

                            <label htmlFor="item-cost" className="col-form-label float-left">
                                 Cost </label>
                            <input className="form-control" id="item-cost"
                                   placeholder="$34"
                                   value={this.type == "item" ? this.state.item.value :
                                   this.state.service.value}
                                   onChange={this.pricingChanged}/>


                            </div>

                        <div className="form-group col-12">

                            <Autocomplete
                                multiple
                                onChange={this.paymentMethodAdded}
                                id="payment-options"

                                value={this.type == "item" ?
                                this.constants.getCurrentPaymentMethods(this.state.item.
                                paymentOptions) :
                                this.constants.getCurrentPaymentMethods(this.state.service.paymentOptions) }
                                options={this.constants.getPaymentMethods()}
                                getOptionLabel={option => option.paymentMethod}
                                classes={{input: 'AutoCompleteBlack', inputFocused: 'AutoCompleteBlack'}}
                                renderInput={params => (
                                    <ThemeProvider theme={theme}>
                                    <TextField
                                        {...params}
                                        variant="standard"

                                        label="Available Payment Methods"
                                        placeholder="payment methods"
                                        margin="normal"
                                        fullWidth
                                    />
                                    </ThemeProvider>
                                )}/>

                            </div>
                        </div>
                        <div className="row border-bottom mt-2">
                            <div className="col-8">
                                <h4> Category </h4>

                            </div>

                             <div className="form-group col-12 mt-0">
                            <Autocomplete

                                    id="auto-complete"

                                    includeInputInList
                                    options={this.constants.getAllCategories()}
                                    onChange={this.addCategories}
                                    value={this.type == "item" ?
                                    this.constants.getItemCategory(this.state.item.categoryName)
                                    : this.constants.getItemCategory(this.state.service.categoryName)}
                                    getOptionLabel={option => option.categoryName}
                                    renderInput={params => (
                                      <TextField {...params} label="Category" margin="normal"
                                      fullWidth />
                                    )}
                                  />

                            </div>

                        </div>
                        {this.renderQuantityRefund()}


                        <div className="row">
                            <div className="col-8">

                                <h4> Add Photos </h4>
                            </div>
                            <div className="col-8">
                                <span> Add up to 3 photos of your product </span>
                            </div>
                            <div className="col-12">
                                <ImageGrid images={this.state.images}
                                            onDrop={this.fileSelectedHandler}
                                           onImageDelete={this.onImageDelete}/>
                            </div>
                        </div>
                        <div className="container mt-2 mb-2">
                            <div className="row">
                                <button type="button" onClick = {this.itemSubmit}
                                className="btn btn-success btn">
                                {this.state.updateMode ? "Update Item" : "List Item"}</button>
                                <button type="button" className="ml-2 btn btn-danger btn"
                                onClick={this.deleteItem}>
                                Delete Listing</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}

export default ListItemComponent