/*========================
  | Ben's test code area |
  ========================*/

/**
 *  jQuery's on 'ready' shorthand
 */
$( function() {

  /**
   *  Ignore that all method calls are inside an "on click" function,
   *  that was just for testing purposes on my part (Ben). 
   *  The code blocks will show how to call on db methods.
   */

  /******************************************
   * What to do when user creates a new car *
   ******************************************/
  $('#js-new-car-add').on("click", function() {

    // Get user input
    let    year = $('#js-new-car-year').val();
    let    make = $('#js-new-car-make').val();
    let   model = $('#js-new-car-model').val();
    let mileage = $('#js-new-car-mileage').val();

    // Ignore incomplete form submissions
    if (year && make && model && mileage) {

      // Reset form inputs to empty strings
      $('#js-new-car-year').val("");
      $('#js-new-car-make').val("");
      $('#js-new-car-model').val("");
      $('#js-new-car-mileage').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Call db object's method to post new car to firebase database
      db.addNewCar(uid, year, make, model, mileage).then( function(response) {
        console.log(response); // 'response' will be the new car object created
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /********************************************
   * How to retrieve a car's last maintenance *
   ********************************************/
  $('#js-last-maintenance').on("click", function() {

    // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
    var uid = userAuth.getUid;

    // Get car's 'carKey'
    let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

    // Call db object's method to return 'lastMaintenance' object
    db.getLastMaintenance(uid, carKey).then( function(response) {
      console.log(response); // 'response' will be the 'lastMaintenance' object // 'response' will be the 'lastMaintenance' object
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  });
  /*************************************************
   * How to retrieve a car's maintenance intervals *
   *************************************************/
  $('#js-last-maintenance-interval').on("click", function() {

    // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
    var uid = userAuth.getUid;

    // Get car's 'carKey'
    let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

    // Call db object's method to return 'maintenanceInterval' object
    db.getMaintenanceIntervals(uid, carKey).then( function(response) {
      console.log(response); // 'response' will be the 'maintenanceInterval' object
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  });
  /***************************************
   * How to retrieve all cars a user has *
   ***************************************/
  $('#js-get-all-cars').on("click", function() {

    // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
    var uid = userAuth.getUid;

    // Call db object's method to return an object of all of user's car objects
    db.getAllUserCars(uid).then( function(response) {
      console.log(response); // 'response' will be an object of car objects
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  });
  /******************************
   * How to delete a user's car *
   ******************************/
  $('#js-delete-car').on("click", function() {
    // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
    var uid = userAuth.getUid;

    // Get car's 'carKey'
    let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"
    
    // Call db object's method to delete a car
    db.deleteCar(uid, carKey).then( function(response) {
      console.log(response); // 'response' is the deleted car's carKey
    }, function(err) {
      console.log(err); // Errors are logged in the console
    });
  });
  /*********************************
   * How to update a car's mileage *
   *********************************/
  $('#js-update-mileage').on("click", function() {

    // Get user input
    let newMileage = $('#js-updated-mileage').val();

    // Ignore empty inputs
    if (newMileage) {

      // Reset form input to empty string
      $('#js-updated-mileage').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the mileage of a car
      db.updateMileage(uid, carKey, newMileage).then( function(response) {
        console.log(response); // 'response' is an object of updated mileage
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /******************************************************
   * How to update a car's maintenance interval for oil *
   ******************************************************/
  $('#js-update-interval-oil').on("click", function() {

    // Get user input
    let newInterval = $('#js-updated-interval-oil').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-updated-interval-oil').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the maintenance interval for oil
      db.updateIntervalOilChange(uid, carKey, newInterval).then( function(response) {
        console.log(response); // 'response' is an object of updated interval for oil
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /*****************************************************************
   * How to update a car's maintenance interval for tire rotations *
   *****************************************************************/
  $('#js-update-interval-tire').on("click", function() {
    // Get user input
    let newInterval = $('#js-updated-interval-tire').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-updated-interval-tire').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the maintenance interval for oil
      db.updateIntervalTireRotation(uid, carKey, newInterval).then( function(response) {
        console.log(response); // 'response' is an object of updated interval for oil
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /******************************************************************
   * How to update a car's maintenance interval for car inspections *
   ******************************************************************/
  $('#js-update-interval-inspection').on("click", function() {

    // Get user input
    let newInterval = $('#js-updated-interval-inspection').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-updated-interval-inspection').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the maintenance interval for car inspection
      db.updateIntervalCarInspection(uid, carKey, newInterval).then( function(response) {
        console.log(response); // 'response' is an object of updated interval for car inspection months
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /***************************************************************
   * How to update a car's maintenance interval for wiper blades *
   ***************************************************************/
  $('#js-update-interval-wipers').on("click", function() {

    // Get user input
    let newInterval = $('#js-updated-interval-wipers').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-updated-interval-wipers').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the maintenance interval for wiper blades
      db.updateIntervalWiperBlades(uid, carKey, newInterval).then( function(response) {
        console.log(response); // 'response' is an object of updated interval for wiper blades
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /***************************************************************
   * How to update a car's maintenance interval for wiper blades *
   ***************************************************************/
  $('#js-update-interval-brakes').on("click", function() {

    // Get user input
    let newInterval = $('#js-updated-interval-brakes').val();

    // Ignore empty inputs
    if (newInterval) {

      // Reset form input to empty string
      $('#js-updated-interval-brakes').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the maintenance interval for brake inspections
      db.updateIntervalBrakeInspection(uid, carKey, newInterval).then( function(response) {
        console.log(response); // 'response' is an object of updated interval for brake inspection
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /**************************************************
   * How to update a car's last maintenance for oil *
   **************************************************/
  $('#js-last-oil').on("click", function() {

    // Get user input
    let mileage = $('#js-last-oil-mileage').val();

    // Ignore empty inputs
    if (mileage) {

      // Reset form input to empty string      
      $('#js-last-oil-mileage').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the last maintenance of oil
      db.updateLastOilChange(uid, carKey, mileage).then( function(response) {
        console.log(response); // 'response' is an object of last maintenance of oil
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /************************************************************
   * How to update a car's last maintenance for tire rotation *
   ************************************************************/
  $('#js-last-tire').on("click", function() {

    // Get user input
    let mileage = $('#js-last-tire-mileage').val();

    // Ignore empty input
    if (mileage) {

      // Reset form input to empty string   
      $('#js-last-tire-mileage').val("");

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the last maintenance of tire rotation
      db.updateLastTireRotation(uid, carKey, mileage).then( function(response) {
        console.log(response); // 'response' is an object of last maintenance of tire rotation
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /*************************************************************
   * How to update a car's last maintenance for car inspection *
   *************************************************************/
  $('#js-last-inspection').on("click", function() {

    // Get user input
    let date = $('#js-last-inspection-date').val();

    // Ignore empty inputs
    if (date) {

      // Reset form input to empty string
      $('#js-last-inspection-date').val("");

      // Use moment.js to convert to Unix Time
      let unixDate; // = 'date' converted to a unix date with moment.js

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the last maintenance of car inspection
      db.updateLastCarInspection(uid, carKey, unixDate).then( function(response) {
        console.log(response); // 'response' is an object of last maintenance of car inspection
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /***********************************************************
   * How to update a car's last maintenance for wiper blades *
   ***********************************************************/
  $('#js-last-wiper').on("click", function() {

    // Get user input
    let date = $('#js-last-wiper-date').val();

    // Ignore empty input
    if (date) {

      // Reset form input to empty string
      $('#js-last-wiper-date').val("");

      // Use moment.js to convert to Unix Time
      let unixDate; // = 'date' converted to a unix date with moment.js

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the last maintenance of wiper blades
      db.updateLastWiperBlades(uid, carKey, unixDate).then( function(response) {
        console.log(response); // 'response' is an object of last maintenance of wiper blades
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
  /***************************************************************
   * How to update a car's last maintenance for brake inspection *
   ***************************************************************/
  $('#js-last-brake').on("click", function() {

    // Get user input
    let date = $('#js-last-brake-date').val();

    // Ignore empty input
    if (date) {

      // Reset form input to empty string
      $('#js-last-brake-date').val("");

      // Use moment.js to convert to Unix Time
      let unixDate; // = 'date' converted to a unix date with moment.js

      // Get uid, looks something like "I9QtY5OfJLdgqLuzD6QWBcKH..."
      var uid = userAuth.getUid;

      // Get car's 'carKey'
      let carKey; // set equal to car key, looks something like "-L7A7Ce9TWt-nfaa1gCv"

      // Call db object's method to update the last maintenance of brake inspection
      db.updateLastBrakeInspection(uid, carKey, unixDate).then( function(response) {
        console.log(response); // 'response' is an object of last maintenance of brake inspection
      }, function(err) {
        console.log(err); // Errors are logged in the console
      });
    }
  });
});