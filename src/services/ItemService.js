export default class ItemService {
	
    static myInstance = null;

    static getInstance() {
    if (ItemService.myInstance == null) {
        ItemService.myInstance = new ItemService() 
    }
        return this.myInstance
    }

    EbayURL = 'https://nubay-server.herokuapp.com/api/'
    localURL = 'https://localhost:8080/api/'

    // Return array of item objects
	getAllItems(callback) {
        fetch(this.EbayURL + 'items')
        .then(response => response.json())
        .then(allItems => callback(allItems))
    }
    
    // Return one item object
    findItemById(itemId, callback) {
        fetch(this.EbayURL + 'items/' + itemId)
        .then(response => response.json())
        .then(item => callback(item))
    }

    // Return an Item object if successful
    createItemForUser(userId, item, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/items', {
            method: 'post', 
            body: JSON.stringify(item),
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(item => callback(item))
    }

    // Return a list of item objects by keyword
    findItemsByKeyword(keyword, callback) {
        fetch(this.EbayURL + 'searchitems/' + keyword)
        .then(response => response.json())
        .then(itemList => callback(itemList))
    }

    // Delete Item by Id
    // Does not return anything.
    deleteItemById(itemId) {
        fetch(this.EbayURL + 'items/' + itemId, {
            method: 'delete', 
            headers: {
                'content-type': 'application/json'   }
            })
    }

    // Update an item via itemid
    // Return newly updated item object
    updateItem(item, itemId, callback) {
        fetch(this.EbayURL + 'items/' + itemId, {
            method: 'put', 
            body: JSON.stringify(item),
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(item => callback(item))
    }

    //get similar categories
    findSimilarItems(categoryName, callback) {
        fetch(this.EbayURL + "/search/items/category/" + categoryName)
        .then(response => response.json())
        .then(items => callback(items))

    }

    // Find number of bookmarks for a given item
    // Return integer number of bookmarks
    findNumberOfBookmarksForItem(itemId, callback) {
        fetch(this.EbayURL + 'items/' + itemId + '/bookmarks')
        .then(response => console.log("Number of Bookmarks for Item: " + response))
        .then(numberOfBookmarks => callback(numberOfBookmarks))
    }

    findFiveRecentItems(callback) {
        fetch(this.EbayURL + 'recentitems')
        .then(response => response.json())
        .then(items => callback(items))
    }

    findTrendingItems(callback) {
        fetch(this.EbayURL + 'hotitems')
        .then(response => response.json())
        .then(items => callback(items))
    }
}
