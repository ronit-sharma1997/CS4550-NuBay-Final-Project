import React from 'react'
import ImageGrid from './ImageGrid'
import PickImageComponent from './PickImageComponent'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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
        this.state = { pictures: [],images:[],images2:[]};
		this.onDrop = this.onDrop.bind(this);
		this.getBaseUrlFromImage = this.getBaseUrlFromImage.bind(this)
		this.onImageDelete = this.onImageDelete.bind(this);
		this.onImageSelected = this.onImageSelected.bind(this);
		this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
		this.renderGrid = this.renderGrid.bind(this);

 }
 onImageDelete(selectedIndex) {
 debugger;
    this.setState(prevState => ({
        ...prevState,
        editingPhoto: prevState.editingPhoto == prevState.images[this.selectedIndex] ? null :
        prevState.editingPhoto,
        pictures: prevState.pictures.filter((picture,index) => selectedIndex != index),
        images: prevState.images.filter((picture,index) => selectedIndex != index)


    }))

 }

 onImageSelected(index) {
 var result = "https://www.nba.com/images/cms/2019-12/GettyImages-1186307216.jpg?cw=2090&w=2241&x=0&ch=1176&h=1494&y=74"
 debugger;
   result = this.getBaseUrlFromImage((this.state.pictures[0]))
    this.setState(prevState => ({
        ...prevState,
        editingPhoto:result

    }))

 }


 getBaseUrlFromImage(file) {
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener("load",function() {
     debugger;
         return fileReader.result

        })
    }




 onDrop(pictureFiles) {

 		this.setState(prevState => ({
             pictures: this.state.pictures.concat(pictureFiles),
             images: [...prevState.images,URL.createObjectURL(pictureFiles[pictureFiles.length - 1])],
             editingPhoto: prevState.images.length == 0 ? URL.createObjectURL(pictureFiles[0])
              : prevState.editingPhoto
         }));
 	}
fileSelectedHandler = event => {

event.persist()
this.setState(prevState => ({
pictures:[...prevState.pictures,event.target.files[0]],
images :  [...prevState.images,URL.createObjectURL(event.target.files[0])],
editingPhoto: prevState.images.length == 0 ? URL.createObjectURL(event.target.files[0])
              : prevState.editingPhoto

}))}


 renderGrid(index) {
 if(index < this.state.images.length) {
 return (
    <PickImageComponent image={this.state.images[index]}
    index={index}
    onImageDelete={this.onImageDelete}
     onImageSelect={this.onImageSelected}/>)
 }
 if(index != 0 && index == this.state.images.length) {
    return(
    <div className="mh-100 h-100 w-100 mw-100">
    <label className="btn justify-content-center w-100">

    <i className="fa fa-4x justify-content-center fa-plus"></i>
    <input type="file" onChange={this.fileSelectedHandler} style={{"display":"none"}}/>
    </label>
    </div>
    )
 }
 else {
    return <div> </div>
 }

 }
 render() {
    return(
    <div className="container-fluid mt-3">
    <div className="container mt-2">
    <div className="row">
        <h2> List Your New Item </h2>
    </div>
    </div>
    <div className="container border-bottom mt-2">
    <div className="row">
        <div className="col-8">
            <h4> What is the name of your product? </h4>

        </div>
        </div>

        <div className="form-group float-left col-12">
                   <label htmlFor="title" className="col-form-label float-left">
                            Product Name </label>
                    <input className="form-control" id="title"
                    placeholder="Product Title"/>
              </div>

    </div>
    <div className="container mt-2">
    <div className="row">
            <div className="col-8 border-bottom">
                <h4> Describe Your Product </h4>

            </div>
            </div>
            <div className="form-group col-12">
                               <label for="item-description"
                               className="float-left">
                                        Product Description </label>
                                <textarea className="form-control" id="item-description"
                                placeholder="Limit to 2 sentences"> </textarea>
                          </div>

    </div>
    <div className="container mt-2 top-border">
        <div className="row">
                <div className="col-8 border-bottom">
                    <h4> Pricing </h4>

                </div>
        this.state = {pictures: [], images: [], images2: []};
        this.onDrop = this.onDrop.bind(this);
        this.onImageDelete = this.onImageDelete.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        // this.renderGrid = this.renderGrid.bind(this);

    }

    onImageDelete(selectedIndex) {
        debugger;
        this.setState(prevState => ({
            ...prevState,
            pictures: prevState.pictures.filter((picture, index) => selectedIndex != index),
            images: prevState.images.filter((picture, index) => selectedIndex != index)
        }))

    }

    onDrop(pictureFiles) {

        this.setState(prevState => ({
            pictures: this.state.pictures.concat(pictureFiles),
            images: [...prevState.images, URL.createObjectURL(pictureFiles[pictureFiles.length - 1])],
        }));
    }

    fileSelectedHandler = event => {

        event.persist()
        this.setState(prevState => ({
            pictures: [...prevState.pictures, event.target.files[0]],
            images: [...prevState.images, URL.createObjectURL(event.target.files[0])],

        }))
    }



    render() {
        return (
            <div>
            <div className="row mt-3 thickBorderBottom">
                <div className="container">
            <h2> List Your New Item </h2>
                </div>
            </div>
            <div className="container mt-4">

                <form>
                    <div className="row border-bottom mt-2">
                        <div className="col-8">
                            <h4> What is the name of your product? </h4>
                        </div>

                        <div className="form-group float-left col-12">
                            {/*<label htmlFor="title" className="col-form-label float-left">*/}
                            {/*    Product Name </label>*/}
                            <input className="form-control" id="title"
                                   placeholder="Product Title"/>
                        </div>

                    </div>
                    <div className="row border-bottom mt-2">
                        <div className="col-8">
                            <h4> Describe Your Product </h4>

                        </div>
                    <div className="form-group float-left col-12">
                        {/*<label htmlFor="item-description"*/}
                        {/*       className="col-form-label float-left">*/}
                        {/*    Product Description </label>*/}
                        <textarea className="form-control" id="item-description" placeholder="Limit to 2 sentences"></textarea>
                    </div>
                    </div>
                        <div className="row border-bottom mt-2">
                            <div className="col-8">
                                <h4> Pricing </h4>

                            </div>
                        <div className="form-group col-12">

                            <label htmlFor="item-cost" className="col-form-label float-left">
                                Item Cost </label>
                            <input className="form-control" id="item-cost"
                                   placeholder="$34"/>

                        </div>
                        <div className="form-group col-12">

                            <label htmlFor="shipping-cost" className="col-form-label float-left">
                                Shipping Cost </label>
                            <input className="form-control" id="shipping-cost"
                                   placeholder="$4"/>

                        </div>
                        <div className="form-group col-12">

                            <Autocomplete
                                multiple
                                id="payment-options"
                                options={[{"paymentMethod": "Venmo", "id": 1},
                                    {"paymentMethod": "PayPal", "id": 2},
                                    {"paymentMethod": "CashApp", "id": 3}]}
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
                                <h4> Categories </h4>

                            </div>
                        <div className="form-group col-12 mt-0">
                            <Autocomplete
                                className="w-100 mt-0"
                                multiple
                                id="category-selector"
                                options={[{"categoryName": "Sports", "id": 1},
                                    {"categoryName": "Clothing", "id": 2},
                                    {"categoryName": "Clothing123", "id": 3}]}
                                getOptionLabel={option => option.categoryName}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Categories"
                                        placeholder="categories"
                                        margin="normal"
                                        fullWidth
                                    />
                                )}/>
                        </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-8">
                                <h4> Refund Policy </h4>

                            </div>

                        <div className="form-group col-12">
                            <textarea className="form-control" id="refund-policy" placeholder="Describe your refund policy"></textarea>
                        </div>
                        </div>

                        <div className="row">
                            <div className="col-8">

                                <h4> Add Photos </h4>
                            </div>
                            <div className="col-8">
                                <span> Add up to 3 photos of your product </span>
                            </div>
                            <div className="col-12">
                            <ImageGrid images={this.state.images} onDrop={this.fileSelectedHandler}
                                       onImageDelete={this.onImageDelete}/>
                            </div>
                        </div>
                    <div className="container mt-2 mb-2">
                        <div className="row">
                            <button type="button" className="btn btn-success btn">List Item</button>
                            <button type="button" className="ml-2 btn btn-danger btn">Delete Listing</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default ListItemComponent