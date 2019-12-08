import React from 'react'

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
            editingRoleType: ""
        }
    }

    passwordChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextPassword: event.target.value
        }))

    }

    phoneChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextPhone: event.target.value
        }))
    }

    emailChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextEmail: event.target.value
        }))
    }

    roleChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingRoleType: event.target.value
        }))
    }

    render() {
        let listingText = this.props.userInfo.userRole === "SELLER" ?  " Listings •" : "";
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
                            {this.props.dataExists && <span> {this.props.userInfo.userRole === "SELLER" && <b>{this.props.userInfo.items.length}</b>}{this.props.userInfo.userRole === "SELLER" && listingText}<b>{this.props.userInfo.bookmarkedItems.length}</b> Bookmarks</span>}
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
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password" id="password" onChange={this.passwordChangeRegister}
                                   placeholder={this.props.dataExists ? this.props.userInfo.password : ""} value={this.state.editingTextPassword}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">
                            Phone </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control wbdv-field wbdv-phone" id="phone" onChange={this.phoneChangeRegister}
                                   placeholder={this.props.dataExists ? this.props.userInfo.phoneNumber : ""} value={this.state.editingTextPhone}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control wbdv-field wbdv-email" id="email" onChange={this.emailChangeRegister}
                                   placeholder={this.props.dataExists ? this.props.userInfo.email : ""} value={this.state.editingTextEmail}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="custom-select wbdv-field wbdv-role" id="role" onChange={this.roleChangeRegister} placeholder={this.props.dataExists ? this.props.userInfo.userRole : ""}
                                    value={this.state.editingRoleType}>
                                <option value="BUYER">Buyer</option>
                                <option value="SELLER">Seller</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a href="" className="btn btn-success btn-block wbdv-button wbdv-update"
                               role="button">Update</a>
                        </div>
                    </div>

                </form>
        )
    }
}