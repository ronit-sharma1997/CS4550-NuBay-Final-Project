export default class NuBayService {
	
	static myInstance = null;

		static getInstance() {
        if(NuBayService.myInstance == null) {
            NuBayService.myInstance = new NuBayService()
            
        }
        return this.myInstance
    }

	getEbayItems(text, callback) {
		let ebayUrl = 
		`https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-NAME=FindingService&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=RonitSha-NuBay-PRD-4b31d5c2d-dcfa3e9a&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=harry%20potter%20phoenix`
       debugger;
        fetch(ebayUrl)     
            .then(response => response.json()).then(callback).
            catch(error => console.log('An error occured ', error))

	}


}