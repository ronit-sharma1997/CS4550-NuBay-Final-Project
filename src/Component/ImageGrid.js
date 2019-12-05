import React from 'react'

const ImageGrid =({images=[], editingImage, onDrop,renderGrid}) => {
return (
<div className="container justify-content-center w-100">
<div className="row w-100 justify-content-center">
    <div className="big-image-pick-size border border-secondary justify-content-center">
        {editingImage ? <img className="mh-100 mw-100 justify-content-center"
        src={editingImage}/> :
        <div className="justify-content-center h-100 w-100">
        <div className="justify-content-center row mh-100 w-100">
                        <img className="justify-content-center mh-50 h-50 w-50 mw-50"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7pxsU0_SC8
                         _SdScsblgMlxlV6idS-z8U137OPX6WTATnHJVZV">

                        </img>
                        </div>
        <div classname="row w-100 justify-content-center">
        <label className="btn justify-content-center bg-light h-25 w-50 border">

        <span className="text-center w-100">Add Your Photos </span>


         <input type="file" onChange={onDrop} style={{"display":"none"}}/>

          </label>
          </div>
          </div>
}
    </div>
    <div className="col-6">
    <div className="row">
    <div className="border border-secondary mh-100 pick-image-size">
            {renderGrid(0)}
    </div>
    <div className="border pick-image-size border-secondary 0">
          {renderGrid(1)}

        </div>
        </div>
        <div className="row">
        <div className="pick-image-size border border-secondary">

                {renderGrid(2)}

            </div>
            <div className="pick-image-size border border-secondary">

                   {renderGrid(3)}

                </div>
        </div>

</div>
</div>
</div>

)}
export default ImageGrid;
