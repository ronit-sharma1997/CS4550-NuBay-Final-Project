export default class UserService {
	
	static myInstance = null;

    static getInstance() {
    if (UserService.myInstance == null) {
        UserService.myInstance = new UserService() 
    }
        return this.myInstance
    }

    EbayURL = 'https://peaceful-caverns-80012.herokuapp.com/api/'

	getAllUsers(callback) {
        fetch(this.EbayURL + 'users')
        .then(response => response.json())
        .then(users => callback(users))
    }
    
    findUserById(userId, callback) {
        fetch(this.EbayURL + 'users/' + userId)
        .then(response => response.json())
        .then(user => callback(user))
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
            .then(response => console.log("Create User Result: " + response))
            .then(result => callback(result))
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
            .then(response => console.log("Login User Result: " + response))
            .then(result => callback(result))
    }

    // NOTE: Technically, userId is not necessary.
    updateUser(user, userId, callback) {
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

    // Get Bookmarked Items

    // Delete Bookmarked Items

}

