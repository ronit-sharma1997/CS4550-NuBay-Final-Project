export default class Constants {

    static myInstance = null;



    static getInstance() {
        if (Constants.myInstance == null) {
            Constants.myInstance = new Constants()

        }
        return this.myInstance
    }


    getAllCategories(){
    return [{"categoryName": "Sports", "id": 1},
            {"categoryName": "Clothing", "id": 2},
            {"categoryName": "Clothing123", "id": 3}]

    }

    itemTypeChar(itemType) {
    if(itemType == "northeasternItem") {
        return "i";
    }
    else if(itemType == "northeasternService") {
        return "s";
    }
    else{
        return "e";
    }

    }

    getItemCategory(categoryName) {
       var getAllCategories = this.getAllCategories();

       for(var i = 0; i < getAllCategories.length; i++) {
           var category = getAllCategories[i]
           if(category["categoryName"] == categoryName) {
                return category;
           }

       }
       return {}


    }


    getCurrentPaymentMethods(paymentMethodString){
        var paymentValues = paymentMethodString.split(",")
        var allPaymentMethods = this.getPaymentMethods();
        var currPaymentValues = [];
        for(var i = 0; i < allPaymentMethods.length; i ++){
            var paymentMethod = allPaymentMethods[i];
            if(paymentValues.includes(paymentMethod["paymentMethod"])) {
                currPaymentValues.push(paymentMethod)
            }
        }
        return currPaymentValues;

    }


    getPaymentMethods() {
        return [{"paymentMethod": "Venmo", "id": 1},
                {"paymentMethod": "PayPal", "id": 2},
                {"paymentMethod": "CashApp", "id": 3}]

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