export default class Constants {

    static myInstance = null;

    static getInstance() {
        if (Constants.myInstance == null) {
            Constants.myInstance = new Constants()

        }
        return this.myInstance
    }



    getItemPrice(price) {
        if(price) {
        if (price.includes("USD")) {
            if (price.substring(4) == "0.0") {
                return "Free"
            }
            return "$".concat(price.substring(4));
        } else {
            return price;
        }
        }
        else {
        return ""
        }
    }

getImageSource(item, itemType) {
    if(itemType == "ebay") {
    return item.imageUrl.length > 0 ? item.imageUrl[0] : ""
    }
    else {
        return "data:image/png;base64,".concat(item.image1)
    }

}

getRatingValue(item){
if (item.sellerRating) {
return item.sellerRating / 20
}
else {
    return 4.0

}
}


}