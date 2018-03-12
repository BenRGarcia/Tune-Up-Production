/***********************************
 *  API DOC's:
 *  https://vpic.nhtsa.dot.gov/api/
 ***********************************/

/* Here's how to use vehicleApi */
/*
// ex. Variables provided by user input:
var year = 2015;
var make = "Honda";

// Call the object method with this template:
vehicleApi.searchModel("2015", "honda").then( response => {
  console.log(response);
}, err => {
  console.log(err);
});
*/
const vehicleApi = {
  // Available Vehicle Makes
  _makes: [
    "Acura","Audi","BMW","Buick","Cadillac","Chevrolet","Chrysler","Dodge",
    "FIAT","Ford","Genesis","GMC","Honda","Hyundai","INFINITI","Jaguar","Jeep",
    "Kia","Land Rover","Lexus","Lincoln","Lotus","Mazda","Mercedes-Benz",
    "MINI","Mitsubishi","Nissan","Porsche","Ram","smart","Subaru","Tesla",
    "Toyota","Volkswagen","Volvo"
  ],
  // Query Parameters
  _url: "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/",
  // Model year
  _year: "/modelyear/",
  // Will return 'Truck' vehicle type
  _truck: "/vehicleType/truck?format=json",
  // Will return 'Car' and 'SUV' vehicle types
  _car: "/vehicleType/passenger?format=json",
  // Return value of last api call
  _modelObjArray: [],
  get makes() {
    return this._makes;
  },
  get models() {
    return this._modelObjArray;
  },
  searchModel(year, make) {
    // Ignore 'falsy' 'make' arg passed
    if (make) {
      // Convert year argument to string (in case passed as type number)
      let stringYear = year.toString();
      // Get query URL for cars and suvs
      let carQueryUrl = this.createCarQueryUrl(year, make);
      // Get query URL for trucks
      let truckQueryUrl = this.createTruckQueryUrl(year, make);
      // Call API with both query URL's
      this._modelObjArray = this.callApi(carQueryUrl, truckQueryUrl);
    }
    return this._modelObjArray;
  },
  createCarQueryUrl(year, make) {
    return this._url + make + this._year + year + this._car;
  },
  createTruckQueryUrl(year, make) {
    return this._url + make + this._year + year + this._truck;
  },
  callApi(carsUrl, trucksUrl) {
    return $.when( 
      // 2 concurrent ajax calls
      $.ajax(carsUrl),
      $.ajax(trucksUrl)
    ).then( (a1, a2) => {
      // Combine 2 response object 'Results' arrays
      let modelObjArray = a1[0].Results.concat(a2[0].Results);
      // Create new array of only model names
      let modelNameArray = modelObjArray.map(obj => obj.Model_Name);
      return modelNameArray;
    }, err => {
      console.log(err);
    });
  }
};
