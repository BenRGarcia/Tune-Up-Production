/*
 *  firebase-db contains all code to interact with the database.
**/

const db = {
  // Default values of maintenance intervals
  _defaultMaintenanceInterval: {
    wiperBladesMonths:        6,
    brakeInspectionMonths:   12,
    carInspectionMonths:     12,
    oilChange:             3000,
    tireRotation:          6000
  },
  // Default values of last maintenance performed
  _defaultLastMaintenance: {
    wiperBladesUnixTime:     false,
    brakeInspectionUnixTime: false,
    carInspectionUnixTime:   false,
    oilChange:               false,
    tireRotation:            false
  },
  /**
   *  Create a new car object
  **/
  addNewCar(uid, year, make, model, mileage) {
    // Convert mileage to number type
    let mileageNumber = parseInt(mileage);
    // Get firebase db key for new car object
    let carKey = firebase.database().ref('users').child(uid).push().key;
    // Create empty object
    let newCar = {};
    // Assemble new car object
    newCar[carKey] = {
      year:    year,
      make:    make,
      model:   model,
      mileage: mileageNumber,
      maintenanceInterval: this._defaultMaintenanceInterval,
      lastMaintenance:     this._defaultLastMaintenance
    };
    // Update database with new car object
    return firebase.database().ref('/users/' + uid).update(newCar).then( function() {
      return newCar;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Get the 'last maintenance' object from the db
  **/
  getLastMaintenance(uid, carKey) {
    // Get firebase database 'lastMaintenance' object 
    return firebase.database().ref('/users/' + uid).child(carKey).once('value').then( function(snapshot) {
      return snapshot.val().lastMaintenance;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Get 'maintenance intervals' for a specific vehicle
  **/
  getMaintenanceIntervals(uid, carKey) {
    // Get firebase database 'maintenanceInterval' object 
    return firebase.database().ref('/users/' + uid).child(carKey).once('value').then( function(snapshot) {
      return snapshot.val().maintenanceInterval;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Get an object of all of the user's cars (an object of car objects)
  **/
  getAllUserCars(uid) {
    // Get firebase database object of car objects
    return firebase.database().ref('/users/' + uid).once('value').then( function(snapshot) {
      return snapshot.val();
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Delete a car object
  **/
  deleteCar(uid, carKey) {
    // Create object with null value for car
    let deletedCar = { carKey: null };
    // Set carKey child with null value (deletes object from database)
    return firebase.database().ref('/users/' + uid).child(carKey).set(deletedCar).then( function() {
      return carKey;
    }, function(err) {
      console.log(err)
    });
  },
  /**
   *  Update mileage of a car
  **/
  updateMileage(uid, carKey, newMileage) {
    // Convert mileage to number type
    let mileage = parseInt(newMileage);
    // Create object with new mileage
    let updatedMileage = { mileage: mileage };
    // Update database with new car mileage object
    return firebase.database().ref('/users/' + uid).child(carKey).update(updatedMileage).then( function() {
      return updatedMileage;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update interval for oil changes
  **/
  updateIntervalOilChange(uid, carKey, newIntervalMiles) {
    // Convert newIntervalMiles to number type
    let newInterval = parseInt(newIntervalMiles);
    // Create object with new interval
    let updatedInterval = { oilChange: newInterval };
    // Update database with new interval for oil changes
    return firebase.database().ref('/users/' + uid).child(carKey).child('maintenanceInterval').update(updatedInterval).then( function() {
      return updatedInterval;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update interval for tire rotations
  **/
  updateIntervalTireRotation(uid, carKey, newIntervalMiles) {
    // Convert newIntervalMiles to number type
    let newInterval = parseInt(newIntervalMiles);
    // Create object with new interval
    let updatedInterval = { tireRotation: newInterval };
    // Update database with new interval for oil changes
    return firebase.database().ref('/users/' + uid).child(carKey).child('maintenanceInterval').update(updatedInterval).then( function() {
      return updatedInterval;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update interval for car inspections
  **/
  updateIntervalCarInspection(uid, carKey, newIntervalMonths) {
    // Convert newIntervalMiles to number type
    let newInterval = parseInt(newIntervalMonths);
    // Create object with new interval
    let updatedInterval = { carInspectionMonths: newInterval };
    // Update database with new interval for oil changes
    return firebase.database().ref('/users/' + uid).child(carKey).child('maintenanceInterval').update(updatedInterval).then( function() {
      return updatedInterval;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update interval for wiper blades
  **/
  updateIntervalWiperBlades(uid, carKey, newIntervalMonths) {
    // Convert newIntervalMiles to number type
    let newInterval = parseInt(newIntervalMonths);
    // Create object with new interval
    let updatedInterval = { wiperBladesMonths: newInterval };
    // Update database with new interval for oil changes
    return firebase.database().ref('/users/' + uid).child(carKey).child('maintenanceInterval').update(updatedInterval).then( function() {
      return updatedInterval;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update interval for brake inspections
  **/
  updateIntervalBrakeInspection(uid, carKey, newIntervalMonths) {
    // Convert newIntervalMiles to number type
    let newInterval = parseInt(newIntervalMonths);
    // Create object with new interval
    let updatedInterval = { brakeInspectionMonths: newInterval };
    // Update database with new interval for oil changes
    return firebase.database().ref('/users/' + uid).child(carKey).child('maintenanceInterval').update(updatedInterval).then( function() {
      return updatedInterval;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update mileage of last oil change
  **/
  updateLastOilChange(uid, carKey, newMileage) {
    // Convert newMileage to number type
    let mileage = parseInt(newMileage);
    // Create object with new last mileage
    let updates = { oilChange: mileage };
    // Update database with new last mileage
    return firebase.database().ref('/users/' + uid).child(carKey).child('lastMaintenance').update(updates).then( function() {
      return updates;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update mileage of last tire rotation
  **/
  updateLastTireRotation(uid, carKey, newMileage) {
    // Convert newMileage to number type
    let mileage = parseInt(newMileage);
    // Create object with new last mileage
    let updates = { tireRotation: mileage };
    // Update database with new last mileage
    return firebase.database().ref('/users/' + uid).child(carKey).child('lastMaintenance').update(updates).then( function() {
      return updates;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update Unix time of last car inspection
  **/
  updateLastCarInspection(uid, carKey, dateUnixTime) {
    // Convert dateUnixTime to number type
    let unixTimeNumber = parseInt(dateUnixTime);
    // Create object with new last mileage
    let updates = { carInspectionUnixTime: unixTimeNumber };
    // Update database with new last mileage
    return firebase.database().ref('/users/' + uid).child(carKey).child('lastMaintenance').update(updates).then( function() {
      return updates;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update Unix time of last wiper blades
  **/
  updateLastWiperBlades(uid, carKey, dateUnixTime) {
    // Convert dateUnixTime to number type
    let unixTimeNumber = parseInt(dateUnixTime);
    // Create object with new last mileage
    let updates = { wiperBladesUnixTime: unixTimeNumber };
    // Update database with new last mileage
    return firebase.database().ref('/users/' + uid).child(carKey).child('lastMaintenance').update(updates).then( function() {
      return updates;
    }, function(err) {
      console.log(err);
    });
  },
  /**
   *  Update Unix time of last brake inspection
  **/
  updateLastBrakeInspection(uid, carKey, dateUnixTime) {
    // Convert dateUnixTime to number type
    let unixTimeNumber = parseInt(dateUnixTime);
    // Create object with new last mileage
    let updates = { brakeInspectionUnixTime: unixTimeNumber };
    // Update database with new last mileage
    return firebase.database().ref('/users/' + uid).child(carKey).child('lastMaintenance').update(updates).then( function() {
      return updates;
    }, function(err) {
      console.log(err);
    });
  }
};
