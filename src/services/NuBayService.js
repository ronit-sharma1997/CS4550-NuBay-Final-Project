export default class NuBayService {
	
	static myInstance = null;

		static getInstance() {
        if(NuBayService.myInstance == null) {
            NuBayService.myInstance = new NuBayService()
            
        }
        return this.myInstance
    }

	getEbayItems(text,callback) {
        let ebayUrl = `https://nubay-server.herokuapp.com/api/ebayItems/${text}`
        fetch(ebayUrl).then(response => response.json()).then(callback)
	}

	getEbayItemById(id,callback) {
	let ebayUrl = `https://nubay-server.herokuapp.com/api/ebayItem/${id}`
	fetch(ebayUrl).then(response => response.json()).then(callback)
	}


	getEbayItemByCategory(id, callback) {
	let ebayUrl = `https://nubay-server.herokuapp.com/api/ebayCategories/${id}`
	fetch(ebayUrl).then(response => response.json()).then(callback)

	}

	getTrendingEbayItems(callback) {
		let ebayUrl=`https://nubay-server.herokuapp.com/api/ebayItems/trending`
		fetch(ebayUrl).then(response => response.json()).then(callback)
	}

}

