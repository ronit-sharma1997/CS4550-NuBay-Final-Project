import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCard from './ItemCard'
import {Link} from 'react-router-dom'

const HomeSection = ({items, title}) => {
var responsive = {
               superLargeDesktop: {
                 // the naming can be any, depends on you.
                 breakpoint: { max: 4000, min: 3000 },
                 items: 5,
               },
               desktop: {
                 breakpoint: { max: 3000, min: 992 },
                 items: 5,
               },
               tablet: {
                 breakpoint: { max: 992, min: 768 },
                 items: 3,
               },
               medium: {
                 breakpoint: { max: 768, min: 576 },
                  items: 3,
                },

               mobile: {
                 breakpoint: { max: 576, min: 0 },
                 items: 2,
               },
             }
return(
    <div className ="row h-25 w-100 bg-white">

                    <div className ="col-8 mt-3 mb-3">
                    <b class="view-related-items-font"> {title} </b>

                    </div>
                    <div className="col-4 mt-3 mb-3">

                   <button type="button" className="btn float-right btn-link my-auto">
                   <span className="see-all-home">
                   See All
                   </span>
                   </button>

                    </div>
                    <div className="col-12 h-100 w-100">
                        <Carousel responsive={responsive}>
                          {items.map((item) => {
                             return(
                                <div>
                                <ItemCard
                                item={item}
                                />
                                </div>
                            ) }
                             )

                          }
                        </Carousel>
                    </div>
                   </div>


)
}

export default HomeSection