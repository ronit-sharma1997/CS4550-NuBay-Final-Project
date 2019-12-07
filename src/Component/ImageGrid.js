import React from 'react'
import PickImageComponent from "./PickImageComponent";

const ImageGrid = ({images = [], onDrop, onImageDelete}) => {
    return (
            <div className="row">
                {images.length != 3 && <div className="col-md-3 col-5">
                    {/*<button type="button" className="pick-image-size btn btn-secondary rounded btn-circle btn-xl" onClick={onDrop}><i className="fa fa-plus fa-2x"></i></button>*/}
                    <label className="btn w-100 text-center pick-image-size bg-light thick-upload-picture-border rounded">

                        <span className="w-100" style={{
                            'vertical-align':'middle'}}><i className="fa fa-plus fa-2x" ></i> </span>


                        <input type="file" onChange={onDrop} style={{"display":"none"}}/>

                    </label>
                </div>}
                <div className="col-md-3 col-5">
                    {images[0] && <div className="w-100 pick-image-size bg-light thick-upload-picture-border rounded">

                        <PickImageComponent image={images[0]}
                                                        index={0}
                                                        onImageDelete={onImageDelete}/>

                    </div>}
                </div>
                <div className="col-md-3 col-5">
                    {images[1] && <div className="w-100 pick-image-size bg-light thick-upload-picture-border rounded">

                        <PickImageComponent image={images[1]}
                                            index={1}
                                            onImageDelete={onImageDelete}/>

                    </div>}
                </div>
                <div className="col-md-3 col-5">
                    {images[2] && <div className="w-100 pick-image-size bg-light thick-upload-picture-border rounded">

                        <PickImageComponent image={images[2]}
                                            index={2}
                                            onImageDelete={onImageDelete}/>

                    </div>}
                </div>
                {/*<div className="col-6">*/}
                {/*    <div className="row">*/}
                {/*        <div className="border border-secondary mh-100 pick-image-size">*/}
                {/*            {renderGrid(0)}*/}
                {/*        </div>*/}
                {/*        <div className="border pick-image-size border-secondary 0">*/}
                {/*            {renderGrid(1)}*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="row">*/}
                {/*        <div className="pick-image-size border border-secondary">*/}

                {/*            {renderGrid(2)}*/}

                {/*        </div>*/}
                {/*        <div className="pick-image-size border border-secondary">*/}

                {/*            {renderGrid(3)}*/}

                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>

    )
}
export default ImageGrid;
