import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCard from './ItemCard'
import { Link } from 'react-router-dom'

const HomeSection = ({ items, title, desc, type }) => {
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
    return (
        <div className="row h-25 w-100 bg-white">
            <div class="container">
                <h1>{title}</h1>
                <p class="lead">{desc}</p>
            </div>

            <div className="col-12 h-100 w-100">
                <Carousel responsive={responsive}>
                    {items.map((item) => {
                        if (item.title.length > 40) {
                            item.title = item.title.substring(0,40) + '...'
                        }
                        return (
                            <div>
                                <ItemCard
                                    item={item}
                                    itemType={type}
                                    sectionName={title}
                                />
                            </div>
                        )
                    }
                    )

                    }
                </Carousel>
            </div>
        </div>


    )
}

export default HomeSection