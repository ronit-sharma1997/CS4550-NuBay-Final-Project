import React from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'

const ImageCarosel = ({images}) => {
const [index, setIndex] = React.useState(0)
return(
<Gallery
index={index}
className="h-25 mh-25"
onRequestChange={i => {
    setIndex(i);
    }}

>

{
    images.map((image) => {
         return <GalleryImage objectFit="contain" src={image} className="item-detail-image"  />

    })
    }
    </Gallery>

)}


export default ImageCarosel