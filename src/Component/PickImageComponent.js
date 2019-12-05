import React from 'react'

const PickImageComponent = ({image, onImageDelete, onImageSelect, index}) => {
return (
    <div className="w-100 h-100 mh-100 mw-100">

        <i className="fa fa-lg fa-times-circle w-25 mw-100 delete-picture-button"
        onClick={() => onImageDelete(index)}></i>

        <img className="img-responsive mh-100 mw-100"
            src={image}
            onClick={()=> onImageSelect(index)}/>
    </div>

)

}

export default PickImageComponent;