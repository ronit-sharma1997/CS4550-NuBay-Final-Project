export default class ServiceItemService {
	
	static myInstance = null;

    static getInstance() {
    if (ServiceItemService.myInstance == null) {
        ServiceItemService.myInstance = new ServiceItemService() 
    }
        return this.myInstance
    }

    EbayURL = 'https://nubay-server.herokuapp.com/api/'
    localURL = 'https://localhost:8080/api/'

    // Return array of service item objects
	getAllServiceItems(callback) {
        fetch(this.EbayURL + 'serviceitems')
        .then(response => response.json())
        .then(allServiceItems => callback(allServiceItems))
    }
    
    // Return one service item object
    findServiceItemById(serviceItemId, callback) {
        fetch(this.EbayURL + 'serviceitems/' + serviceItemId)
        .then(response => response.json())
        .then(serviceItem => callback(serviceItem))
    }

    // Return a service item object if successful
    createServiceItemForUser(userId, serviceItem, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/serviceitems', {
            method: 'post', 
            body: JSON.stringify(serviceItem),
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(serviceItem => callback(serviceItem))
    }

    // Return a list of service item objects by keyword
    findServiceItemsByKeyword(keyword, callback) {
        fetch(this.EbayURL + 'searchserviceitems/' + keyword)
        .then(response => response.json())
        .then(serviceItemList => callback(serviceItemList))
    }

    // Delete service item by Id
    // Does not return anything.
    deleteServiceItemById(serviceItemId) {
        fetch(this.EbayURL + 'serviceitems/' + serviceItemId, {
            method: 'delete', 
            headers: {
                'content-type': 'application/json'   }
            })
    }

    // Update a service item via service item id
    // Return newly updated service item object
    updateServiceItem(serviceItem, serviceItemId, callback) {
        fetch(this.EbayURL + 'serviceitems/' + serviceItemId, {
            method: 'put', 
            body: JSON.stringify(serviceItem),
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(serviceItem => callback(serviceItem))
    }

    findFiveRecentServiceItems(callback) {
        fetch(this.EbayURL + 'recentserviceitems')
        .then(response => response.json())
        .then(serviceitems => callback(serviceitems))
    }
}
