import React from 'react'
import ProfileDetails from "./ProfileDetails";

const ProfileTabs = () => {
    return(

    <div className="container-fluid d-flex min-vh-100 flex-column">
        <div className="row bg-light flex-fill fill d-flex">
            <div className="col-5 border-right" align={"center"}>
                <h1 className="mt-2">Profile</h1>
                <div className="nav flex-column nav-pills w-50 align-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link mt-5 active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                       aria-controls="v-pills-home" aria-selected="true">My Details</a>
                    <a className="nav-link mt-5" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                       aria-controls="v-pills-profile" aria-selected="false">My Listings</a>
                    <a className="nav-link mt-5" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
                       aria-controls="v-pills-messages" aria-selected="false">My Cart</a>
                </div>

                <div className="col-sm-5 mt-5 border-top">
                    <a href="#">
                        <div className="btn-group">
                            <button className="btn">Privacy Policy</button>
                        </div>
                    </a>
                    <button className="w-50 btn align-bottom btn btn-danger btn-block wbdv-button wbdv-logout"
                    >Log Out</button>
                </div>
            </div>
            <div className="col-7 border-left" align={"center"}>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"  aria-labelledby="v-pills-home-tab">
                        <ProfileDetails/>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                         aria-labelledby="v-pills-profile-tab">...
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                         aria-labelledby="v-pills-messages-tab">...
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                         aria-labelledby="v-pills-settings-tab">...
                    </div>
                </div>
            </div>
    </div>
    </div>

    )
}
export default ProfileTabs