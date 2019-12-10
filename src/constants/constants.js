export default class Constants {

    static myInstance = null;



    static getInstance() {
        if (Constants.myInstance == null) {
            Constants.myInstance = new Constants()

        }
        return this.myInstance
    }

    // https://www.ebay.com/b/Auto-Parts-and-Vehicles/6000/bn_1865334

    // https://www.ebay.com/b/Fashion/bn_7000259856
    // https://www.ebay.com/b/Womens-Clothing/15724/bn_661783
    // https://www.ebay.com/b/Mens-Clothing/1059/bn_696958

    // https://www.ebay.com/b/Books-Movies-Music/bn_7000259849
    // https://www.ebay.com/b/Books/267/bn_1854946
    // https://www.ebay.com/b/DVDs-Movies/11232/bn_1857671

    // https://www.ebay.com/b/Electronics/bn_7000259124
    // https://www.ebay.com/b/Video-Games-Consoles/1249/bn_1850232

    // https://www.ebay.com/b/Collectibles-Art/bn_7000259855

    // https://www.ebay.com/b/Home-Garden/11700/bn_1853126
    // https://www.ebay.com/b/Sporting-Goods/888/bn_1865031
    // https://www.ebay.com/b/Toys-Hobbies/220/bn_1865497
    // https://www.ebay.com/b/Business-Industrial/12576/bn_1853744
    // https://www.ebay.com/b/Health-Beauty/26395/bn_1865479
    getAllCategories() {
        return [
            { "categoryName": "Sports", "id": 1 },
            { "categoryName": "Clothing", "id": 2 },
            { "categoryName": "Service", "id": 3},
            { "categoryName": "Auto Parts and Vehicles", "id": 6000},
            { "categoryName": "Womens Clothing", "id": 15724 },
            { "categoryName": "Mens Clothing", "id": 1059 },
            { "categoryName": "Books", "id": 267 },
            { "categoryName": "DVDs-Movies", "id": 11232 },
            { "categoryName": "Video-Games-Consoles", "id": 1249 },
            { "categoryName": "Home-Garden", "id": 11700 },
            { "categoryName": "Sporting Goods", "id": 888 },
            { "categoryName": "Toys-Hobbies", "id": 220 },
            { "categoryName": "Business-Industrial", "id": 12576 },
            { "categoryName": "Health Beauty", "id": 26395 },
        ]

    }

    itemTypeChar(itemType) {
        if (itemType == "northeasternItem") {
            return "i";
        }
        else if (itemType == "northeasternService") {
            return "s";
        }
        else {
            return "e";
        }

    }

    getItemCategory(categoryName) {
        var getAllCategories = this.getAllCategories();

        for (var i = 0; i < getAllCategories.length; i++) {
            var category = getAllCategories[i]
            if (category["categoryName"] == categoryName) {
                return category;
            }

        }
        return {}


    }


    getCurrentPaymentMethods(paymentMethodString) {
        var paymentValues = paymentMethodString.split(",")
        var allPaymentMethods = this.getPaymentMethods();
        var currPaymentValues = [];
        for (var i = 0; i < allPaymentMethods.length; i++) {
            var paymentMethod = allPaymentMethods[i];
            if (paymentValues.includes(paymentMethod["paymentMethod"])) {
                currPaymentValues.push(paymentMethod)
            }
        }
        return currPaymentValues;

    }


    getPaymentMethods() {
        return [{ "paymentMethod": "Venmo", "id": 1 },
        { "paymentMethod": "PayPal", "id": 2 },
        { "paymentMethod": "CashApp", "id": 3 }]

    }

    getItemPrice(price) {
        if (price) {
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
            return "Free "
        }
    }

    getImageSource(item, itemType) {
        if (itemType == "ebay") {
            return item.imageUrl.length > 0 ? item.imageUrl[0] : ""
        }
        else {

            return item.image1 && "data:image/png;base64,".concat(item.image1)
        }

    }




    getRatingValue(item) {
        if (item.sellerRating) {
            return item.sellerRating / 20
        }
        else {
            return 4.0

        }
    }


}