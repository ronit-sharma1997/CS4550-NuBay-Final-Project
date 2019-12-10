import React, {Fragment} from 'react'

const NuBayManagerHeaderBar = ({itemlength, searchResult}) => {

return(
    <div className="row bg-light">
        <div className="col-12 col-md-12">
            <nav className="navbar navbar-light bg-light d-none d-md-block">
                <div className="container-fluid ">
                    <div className="col-10" style={{"textAlign": "left"}}>
                        <b>{itemlength} results for "{searchResult}"</b>
                    </div>

                </div>
            </nav>
        </div>
    </div> )
}
export default NuBayManagerHeaderBar