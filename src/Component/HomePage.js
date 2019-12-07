import React from 'react'
import HomeSection from './HomeSection'


const HomePage = ({cards, title}) => {
var items = [
                {
                    "itemId": "283545341042",
                    "title": "PUMA Essentials+ Men's V Neck Tee Men Tee Basics",
                    "categoryName": "Clothing, Shoes & Accessories:Men:Men's Clothing:Shirts:T-Shirts",
                    "categoryId": "15687",
                    "imageUrl": [
                        "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/6AEAAOSw6S5dtt58/$_1.JPG?set_id=880000500F"
                    ],
                    "value": "USD 7.99",
                    "quantity": "7705",
                    "ebayUrl": "https://www.ebay.com/itm/PUMA-Essentials-Mens-V-Neck-Tee-Men-Tee-Basics-/283545341042?var=",
                    "shippingCost": "",
                    "sellerId": "officialpumastore",
                    "sellerRating": "98.4",
                    "conditionString": "New with tags",
                    "description": "FAQ Payment & Delivery Men Shoes Sneakers Motorsport Football Golf Sandals Boots Clothing T-Shirts Underwear Shorts & Bermudas Hoodies & Sweats Jerseys Pants Shirts Track Suits Jackets & Coats Swimwear Accessoires Caps & Hats Bags Belts Wallets Bagpacks Other Women Shoes Running Sneakers & Trainers Ballerinas Sandals Golf Sonstige Clothing Tops & Shirts Skirts Jackets Sweatshirts Shorts & Bermudas Pants Other Accessoires Caps & Hats Bags Bagpacks Other Kids Boys Shoes Clothing Accessoires Other Girls Shoes Clothing Accessoires Other THE OFFICIAL PUMA STORE Categories Sporting Goods Clothes, Shoes & Accessories Baby Color Beige Blue Brown Yellow Gold Grau Green Purple Mehrfarbig Nature Orange Pink Red Black Metallic White Information About us Payment & Delivery Returning Items Contact FAQ Imprint Terms & Condition PUMA Essentials+ Men's V Neck Tee Men Tee Basics Schließen Weiter Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück + PUMA Essentials+ Men's V Neck Tee Men Tee Basics Product details PRODUCT STORYPUMA's essentials are designed for your everyday hustle. Whether that's in the gym, on the streets, or kicking back, these classic styles have you covered- with super-soft materials, flexible design, and signature PUMA style.FEATURES + BENEFITSBCI: PUMA partners with Better Cotton Initiative to improve cotton farming globallyDETAILSRegular fitClassic cotton jersey teeV neck closureShort sleeve constructionPUMA No. 1 Logo on upper left chestSales Style Number:US852421 Sales Puma Customer service Information Payment We only accept payments made by PayPal. ",
                    "refundPolicy": "Money Back within 30 Days",
                    "paymentOptions": [
                        "PayPal"
                    ],
                    "location": "Torrance, California"
                },
                {
                    "itemId": "302564369585",
                    "title": "Men Polo Ralph Lauren LONG SLEEVE Crew Neck T Shirt S M L XL XXL - STANDARD FIT",
                    "categoryName": "Clothing, Shoes & Accessories:Men:Men's Clothing:Shirts:T-Shirts",
                    "categoryId": "15687",
                    "imageUrl": [
                        "https://i.ebayimg.com/00/s/MTU5OVgxNTUw/z/LccAAOSwE~1cEIfX/$_57.JPG?set_id=8800005007",
                        "https://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/eXYAAOSwqrVcjdrj/$_57.JPG?set_id=8800005007",
                        "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/4ZQAAOSw0A9aMZSd/$_57.JPG?set_id=8800005007"
                    ],
                    "value": "USD 29.88",
                    "quantity": "3163",
                    "ebayUrl": "https://www.ebay.com/itm/Men-Polo-Ralph-Lauren-LONG-SLEEVE-Crew-Neck-T-Shirt-S-M-L-XL-XXL-STANDARD-FIT-/302564369585?var=",
                    "shippingCost": "",
                    "sellerId": "justinoutlets",
                    "sellerRating": "99.4",
                    "conditionString": "New with tags",
                    "description": "Ralph Lauren Long Sleeve Tee MSRP: $49.50 Fit: Standard Material: 100% Cotton Condition: Brand New with Tag 100% Authentic From Retail Store (USA)long sleeves with ribbed cuffscrew necklinesignature embroidered pony at the left chest Pit-pit S 19.5\"(49.5 cm) M 20.5\"(52 cm) L 22\"(55.5 cm) XL 23.5\"(59.5 cm) XXL 25\"(63.5 cm) LengthS 26\"(66 cm)M 27\"(68.5 cm)L 27.5\"(69.5 cm)XL 28\"(71 cm)XXL 28\"(71 cm) ***Check out our store for more deals*** PLEASE BE 100% CONFIDENT ON WHAT YOU’RE BUYING TO SAVE BOTH PARTIES TIME AND MONEY. BE IT SIZING OR MATERIAL. ",
                    "refundPolicy": "Money Back within 30 Days",
                    "paymentOptions": [
                        "PayPal"
                    ],
                    "location": "Nashua, New Hampshire"
                },
                {
                    "itemId": "302564369585",
                    "title": "Men Polo Ralph Lauren LONG SLEEVE Crew Neck T Shirt S M L XL XXL - STANDARD FIT",
                    "categoryName": "Clothing, Shoes & Accessories:Men:Men's Clothing:Shirts:T-Shirts",
                    "categoryId": "15687",
                    "imageUrl": [
                        "https://i.ebayimg.com/00/s/MTU5OVgxNTUw/z/LccAAOSwE~1cEIfX/$_57.JPG?set_id=8800005007",
                        "https://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/eXYAAOSwqrVcjdrj/$_57.JPG?set_id=8800005007",
                        "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/4ZQAAOSw0A9aMZSd/$_57.JPG?set_id=8800005007"
                    ],
                    "value": "USD 29.88",
                    "quantity": "3163",
                    "ebayUrl": "https://www.ebay.com/itm/Men-Polo-Ralph-Lauren-LONG-SLEEVE-Crew-Neck-T-Shirt-S-M-L-XL-XXL-STANDARD-FIT-/302564369585?var=",
                    "shippingCost": "",
                    "sellerId": "justinoutlets",
                    "sellerRating": "99.4",
                    "conditionString": "New with tags",
                    "description": "Ralph Lauren Long Sleeve Tee MSRP: $49.50 Fit: Standard Material: 100% Cotton Condition: Brand New with Tag 100% Authentic From Retail Store (USA)long sleeves with ribbed cuffscrew necklinesignature embroidered pony at the left chest Pit-pit S 19.5\"(49.5 cm) M 20.5\"(52 cm) L 22\"(55.5 cm) XL 23.5\"(59.5 cm) XXL 25\"(63.5 cm) LengthS 26\"(66 cm)M 27\"(68.5 cm)L 27.5\"(69.5 cm)XL 28\"(71 cm)XXL 28\"(71 cm) ***Check out our store for more deals*** PLEASE BE 100% CONFIDENT ON WHAT YOU’RE BUYING TO SAVE BOTH PARTIES TIME AND MONEY. BE IT SIZING OR MATERIAL. ",
                    "refundPolicy": "Money Back within 30 Days",
                    "paymentOptions": [
                        "PayPal"
                    ],
                    "location": "Nashua, New Hampshire"
                },
                {
                    "itemId": "283545341042",
                    "title": "PUMA Essentials+ Men's V Neck Tee Men Tee Basics",
                    "categoryName": "Clothing, Shoes & Accessories:Men:Men's Clothing:Shirts:T-Shirts",
                    "categoryId": "15687",
                    "imageUrl": [
                        "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/6AEAAOSw6S5dtt58/$_1.JPG?set_id=880000500F"
                    ],
                    "value": "USD 7.99",
                    "quantity": "7705",
                    "ebayUrl": "https://www.ebay.com/itm/PUMA-Essentials-Mens-V-Neck-Tee-Men-Tee-Basics-/283545341042?var=",
                    "shippingCost": "",
                    "sellerId": "officialpumastore",
                    "sellerRating": "98.4",
                    "conditionString": "New with tags",
                    "description": "FAQ Payment & Delivery Men Shoes Sneakers Motorsport Football Golf Sandals Boots Clothing T-Shirts Underwear Shorts & Bermudas Hoodies & Sweats Jerseys Pants Shirts Track Suits Jackets & Coats Swimwear Accessoires Caps & Hats Bags Belts Wallets Bagpacks Other Women Shoes Running Sneakers & Trainers Ballerinas Sandals Golf Sonstige Clothing Tops & Shirts Skirts Jackets Sweatshirts Shorts & Bermudas Pants Other Accessoires Caps & Hats Bags Bagpacks Other Kids Boys Shoes Clothing Accessoires Other Girls Shoes Clothing Accessoires Other THE OFFICIAL PUMA STORE Categories Sporting Goods Clothes, Shoes & Accessories Baby Color Beige Blue Brown Yellow Gold Grau Green Purple Mehrfarbig Nature Orange Pink Red Black Metallic White Information About us Payment & Delivery Returning Items Contact FAQ Imprint Terms & Condition PUMA Essentials+ Men's V Neck Tee Men Tee Basics Schließen Weiter Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück Schließen Weiter Zurück + PUMA Essentials+ Men's V Neck Tee Men Tee Basics Product details PRODUCT STORYPUMA's essentials are designed for your everyday hustle. Whether that's in the gym, on the streets, or kicking back, these classic styles have you covered- with super-soft materials, flexible design, and signature PUMA style.FEATURES + BENEFITSBCI: PUMA partners with Better Cotton Initiative to improve cotton farming globallyDETAILSRegular fitClassic cotton jersey teeV neck closureShort sleeve constructionPUMA No. 1 Logo on upper left chestSales Style Number:US852421 Sales Puma Customer service Information Payment We only accept payments made by PayPal. ",
                    "refundPolicy": "Money Back within 30 Days",
                    "paymentOptions": [
                        "PayPal"
                    ],
                    "location": "Torrance, California"
                },
                {
                    "itemId": "311597410598",
                    "title": "Polo Ralph Lauren Mens T Shirt  Brand New With Tag CREWNECK  Tee S M L XL XXL",
                    "categoryName": "Clothing, Shoes & Accessories:Men:Men's Clothing:Shirts:T-Shirts",
                    "categoryId": "15687",
                    "imageUrl": [
                        "https://i.ebayimg.com/00/s/MTEzMFgxMzYz/z/Y2MAAOSwBKBcgo~1/$_57.JPG?set_id=8800005007",
                        "https://i.ebayimg.com/00/s/MTE1M1gxMzc0/z/kpgAAOSweBhaTsq4/$_57.JPG?set_id=8800005007"
                    ],
                    "value": "USD 22.48",
                    "quantity": "44428",
                    "ebayUrl": "https://www.ebay.com/itm/Polo-Ralph-Lauren-Mens-T-Shirt-Brand-New-Tag-CREWNECK-Tee-S-M-L-XL-XXL-/311597410598?var=",
                    "shippingCost": "",
                    "sellerId": "medcmddrex6gol",
                    "sellerRating": "100.0",
                    "conditionString": "New with tags",
                    "description": "Your new favorite T-shirt is... Just A Mouse Click Away The buyer of this listing will receive authentic, brand new with tags, men's short sleeve CLASSIC CREW-NECK t-shirt(s) designed by Polo Ralph Lauren. ",
                    "refundPolicy": "Money back or replacement (buyer's choice) within 30 Days",
                    "paymentOptions": [
                        "PayPal"
                    ],
                    "location": "Hershey, Pennsylvania"
                }
                ]

return(
<div className="container-fluid h-100">
<div className="row border-bottom mb-2">
<HomeSection title={"Your Bookmarks"}items={items}> </HomeSection>
</div>
<div className="row border-bottom mb-1">
<HomeSection title={"Trending Items At Northeastern"}items={items}> </HomeSection>
</div>
<div className="row border-bottom mb-1">
<HomeSection title={"Trending Services At Northeastern"}items={items}> </HomeSection>
</div>
</div>

)
}
export default HomePage