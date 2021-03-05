export default class UserService {
	
	static myInstance = null;

    static getInstance() {
    if (UserService.myInstance == null) {
        UserService.myInstance = new UserService() 
    }
        return this.myInstance
    }

    EbayURL = 'https://nubay-server.herokuapp.com/api/'
    localURL = 'https://localhost:8080/api/'

    // Return array of user objects
	getAllUsers(callback) {
        fetch(this.EbayURL + 'users')
        .then(response => response.json())
        .then(users => callback(users))
    }
    
    // Return one user object
    findUserById(userId, callback) {
        fetch(this.EbayURL + 'users/' + userId)
        .then(response => response.json())
        .then(callback)
    }

    // Return an integer depending on result
    // -2 = Seller email does not end with correct suffix
    // -1 = Username already exists
    // Other (new user id) = Created user successfully

    // NOTE: Not sure if the .then() clauses are set up correctly
    createUser(user, callback) {
        fetch(this.EbayURL + 'register', {
            method: 'post', 
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(actualResponse => callback(actualResponse))
    }

    // Return an integer depending on result
    // -1 = Incorrect credentials
    // Other (user id) = Correct credentials

    // NOTE: Not sure if the .then() clauses are set up correctly
    loginUser(user, callback) {
        fetch(this.EbayURL + 'login', {
            method: 'post', 
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(result => callback(result))
    }

    // Update a user via user object and user id 
    // NOTE: Technically, userId is not necessary. (should be able to access from user object)
    updateUser(user, userId, callback) {
        console.log("Updating user")
        console.log(user)
        fetch(this.EbayURL + 'users/' + userId, {
            method: 'put', 
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(user => callback(user))
    }

    // Bookmark Item
    // Return 0 if success
    bookmarkItemForUser(userId, itemId, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/bookmarks/' + itemId, {
            method: 'post', 
            body: [],
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(result => callback(result))
    }

    bookmarkEbayItemForUser(userId, itemId, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/ebaybookmarks/' + itemId, {
            method: 'post',
            body: [],
            headers: {
                'content-type': 'application/json'   }
            })
            .then(callback)
        }


    // Get Bookmarked Items
    // Returns List of Bookmarked Items
    getBookmarkedItemsForUser(userId, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/bookmarks')
        .then(response => response.json())
        .then(bookmarkedItemList => callback(bookmarkedItemList))
    }

    getEbayBookmarkedItemsForUser(userId, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/ebaybookmarks')
            .then(response => response.json())
            .then(ebayItems => callback(ebayItems))
    }

    // Delete Bookmarked Items
    // Return 0 if success
    deleteBookmarkedItemForUser(userId, itemId, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/bookmarks/' + itemId, {
            method: 'delete', 
            headers: {
                'content-type': 'application/json'   }
            })
            .then(response => response.json())
            .then(result => callback(result))
    }

    getRecentBookmarkedItemsForUser(userId, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/recentbookmarks')
        .then(response => response.json())
        .then(bookmarkedItemList => callback(bookmarkedItemList))
    }

    deleteEbayBookmarkedItemForUser(userId, itemId, callback) {
        fetch(this.EbayURL + 'users/' + userId + '/ebaybookmarks/' + itemId, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'   }
            })
            .then(callback)
        }
}

