import React from 'react'

const wordWrap = {
    wordWrap: 'break-word'
}

const ProfileDetails = () => {
    return (
        <div>
            <div className="avatar-circle mt-2">
                <span className="initials">RS</span>
            </div>
            <div className="col-12" style={wordWrap}>
                <h1>Ronit Sharmakjdskjfsdjkfsdjkdfskjfsdjkfsd</h1>
            </div>
            <div className="row">
                <div className="col-6" align={"end"}>
                        <div className="btn-group disabled">
                            <button className="btn"><span><b>10</b></span> Listings</button>
                        </div>
                </div>
                <div className="col-6" align={"start"}>
                        <div className="btn-group disabled">
                            <button className="btn"><span><b>10</b></span> Bookmarks</button>
                        </div>
                </div>
            </div>
            <br/>
            <div className="alert alert-success wbdv-message collapse">
                Profile Successfully saved
            </div>
            <form>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username" id="username" placeholder="Alice"
                               readOnly/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="firstname" className="col-sm-2 col-form-label">
                        First Name </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-firstname" id="firstname"
                               placeholder="LastName Ever" readOnly/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastname" className="col-sm-2 col-form-label">
                        Last Name </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username" id="lastname"
                               placeholder="Firstname Greatest" readOnly/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password" id="password"
                               placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">
                        Phone </label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control wbdv-field wbdv-phone" id="phone"
                               placeholder="5551234324"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control wbdv-field wbdv-email" id="email"
                               placeholder="alice@wonderland.com"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="role" className="col-sm-2 col-form-label">
                        Role </label>
                    <div className="col-sm-10">
                        <select className="custom-select wbdv-field wbdv-role" id="role">
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dob" className="col-sm-2 col-form-label">
                        Date of Birth </label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control wbdv-field wbdv-dob" id="dob"
                               placeholder="mm/dd/yyyy"/>
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
        </div>
    )
}
export default ProfileDetails