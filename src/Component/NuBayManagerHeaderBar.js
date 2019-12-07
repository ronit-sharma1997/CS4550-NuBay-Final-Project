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
                    <div className="col-2 pl-2 justify-content-end">
                        <select className="custom-select" defaultValue="Sort by: ">
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="Name: A to Z">Name: A to Z</option>
                            <option value="Name: Z to A">Name: Z to A</option>
                        </select>

                    </div>

                </div>
            </nav>
        </div>
    </div> )
}
export default NuBayManagerHeaderBar