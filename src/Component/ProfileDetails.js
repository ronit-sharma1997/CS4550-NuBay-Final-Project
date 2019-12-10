import React from 'react'
import UserService from "../services/UserService";

const wordWrap = {
    wordWrap: 'break-word'
}

export default class ProfileDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editingTextPassword: "",
            editingTextPhone: "",
            editingTextEmail: "",
            displayUpdateButton: false
        }
        this.userService = UserService.getInstance();
        this.updateUser = this.updateUser.bind(this)
        this.setNewUserState = this.setNewUserState.bind(this)
    }


    passwordChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextPassword: event.target.value,
            displayUpdateButton: true
        }))

    }

    phoneChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextPhone: event.target.value,
            displayUpdateButton: true
        }))
    }

    emailChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextEmail: event.target.value,
            displayUpdateButton: true
        }))
    }



    fieldsChanged() {
        return (this.state.editingTextPassword !== this.props.userInfo.password && this.state.editingTextPassword !== "")
            || (this.state.editingTextPhone !== this.props.userInfo.phoneNumber && this.state.editingTextPhone !== "")
            || (this.state.editingTextEmail !== this.props.userInfo.email && this.state.editingTextEmail !== "")
    }

    updateUser() {
        let componentState = this.state
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phoneno = /^\d{10}$/;
        if (!re.test(componentState.editingTextEmail) && componentState.editingTextEmail !== "") {
            alert("Please input a valid email")
        } else if (this.props.userInfo.userRole === "SELLER" && (componentState.editingTextEmail !== "" && !componentState.editingTextEmail.endsWith("@husky.neu.edu"))) {
            alert("As a seller you must provide a valid Northeastern email(@husky.neu.edu)")
        } else if (!componentState.editingTextPhone.match(phoneno) && componentState.editingTextPhone !== "") {
            alert("Please provide valid phone number")
        } else {
            console.log(this.props.userInfo.id)
            this.userService.updateUser({
                "id": this.props.userInfo.id,
                "firstName": this.props.userInfo.firstName,
                "lastName": this.props.userInfo.lastName,
                "username": this.props.userInfo.username,
                "password": componentState.editingTextPassword === "" ? this.props.userInfo.password : componentState.editingTextPassword,
                "email": componentState.editingTextEmail === "" ? this.props.userInfo.email : componentState.editingTextEmail,
                "phoneNumber": componentState.editingTextPhone === "" ? this.props.userInfo.phoneNumber : componentState.editingTextPhone,
                "userRole": this.props.userInfo.userRole,
                "items": this.props.userInfo.items,
                "serviceItems": this.props.userInfo.serviceItems,
                "bookmarkedItems": this.props.userInfo.bookmarkedItems,
                "bookmarkedEbayItems" : this.props.userInfo.bookmarkedEbayItems
            }, this.props.userInfo.id, this.setNewUserState)
        }
    }

    setNewUserState(user) {
        this.props.setLoggedInUser(user.id)
    }

    render() {
        console.log(this.props)
        let listingText = this.props.userInfo === undefined ? "" : this.props.userInfo.userRole === "SELLER" ?  " Listings • " : "";
        return (
                <form className="container">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                        <div className="avatar-circle mt-2">
                            {this.props.dataExists && <span
                                className="initials">{this.props.userInfo.firstName.substr(0, 1) + this.props.userInfo.lastName.substr(0, 1)}</span>}
                        </div>
                        </div>
                    </div>
                    <div className="form-group row mb-0">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10"  style={wordWrap}>
                            {this.props.dataExists && <h1>{this.props.userInfo.firstName + " " + this.props.userInfo.lastName}</h1>}
                        </div>
                    </div>
                    <div className="form-group row mt-0">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10" >
                            {this.props.dataExists && this.props.viewOnly && <span><b>{this.props.userInfo.items.length + this.props.userInfo.serviceItems.length}</b> Listings</span>}
                            {this.props.dataExists && !this.props.viewOnly && <span> {this.props.userInfo.userRole === "SELLER" && <b>{this.props.userInfo.items.length + this.props.userInfo.serviceItems.length}</b>}{this.props.userInfo.userRole === "SELLER" && listingText}<b>{this.props.userInfo.bookmarkedItems.length + (this.props.userInfo.bookmarkedEbayItems === "" || this.props.userInfo.bookmarkedEbayItems === null ? 0 : this.props.userInfo.bookmarkedEbayItems.split(",").length)}</b> Bookmarks</span>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username" id="username"
                                   placeholder={this.props.dataExists ? this.props.userInfo.username : ""}
                                   readOnly/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="firstname" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-firstname" id="firstname"
                                   placeholder={this.props.dataExists ? this.props.userInfo.firstName : ""} readOnly/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastname" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username" id="lastname"
                                   placeholder={this.props.dataExists ? this.props.userInfo.lastName : ""} readOnly/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-role" id="role"
                                    placeholder={this.props.dataExists ? this.props.userInfo.userRole : ""} readOnly>
                            </input>
                        </div>
                    </div>
                    {!this.props.viewOnly && <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password" id="password" onChange={this.passwordChangeRegister}
                                   placeholder={this.props.dataExists ? this.props.userInfo.password : ""} value={this.state.editingTextPassword}/>
                        </div>
                    </div>}
                    {this.props.loggedIn && <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">
                            Phone </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control wbdv-field wbdv-phone" id="phone" onChange={this.phoneChangeRegister}
                                   placeholder={this.props.dataExists ? this.props.userInfo.phoneNumber : ""} value={this.state.editingTextPhone} readOnly={this.props.viewOnly}/>
                        </div>
                    </div>}
                    {this.props.loggedIn && <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control wbdv-field wbdv-email" id="email" onChange={this.emailChangeRegister}
                                   placeholder={this.props.dataExists ? this.props.userInfo.email : ""} value={this.state.editingTextEmail} readOnly={this.props.viewOnly}/>
                        </div>
                    </div>}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            {this.props.userInfo && this.fieldsChanged() && <button className="btn btn-success btn-block wbdv-button wbdv-update"
                               type="button" onClick={this.updateUser}>Update</button>}
                        </div>
                    </div>

                </form>
        )
    }
}