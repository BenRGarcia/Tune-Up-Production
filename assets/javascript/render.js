const DOM = {
  renderCars(carsObject) {

    // Empty preexisting list
    $('#js-garage').empty();

    // Ignore empty object
    if (carsObject) {

      // Iterate over car objects
      for (let key in carsObject) {

        // Strip out year, make, model from object
        let year = carsObject[key].year;
        let make = carsObject[key].make;
        let model = carsObject[key].model;

        // Declare carKey variable
        let carKey = key;

        // Assemble nested elements with Materialize classes
        let     li = $('<li>');
        let button = $('<button>');
        let      a = $('<a>');
        let      i = $('<i>');
        // Make new div
        let div = $('<div>');

        li.addClass("collection-item");
        button.addClass("btn-large js-car-in-garage wide mb-1");
        button.text(year + " " + make + " " + model);
        button.attr("data-car-key", carKey);
        a.attr("data-car-key", carKey);
        a.addClass("secondary-content js-delete-car");
        a.attr("href", "#");
        i.addClass("material-icons");
        i.text("delete");

        a.append(i);
        div.append(button);
        div.append(a);
        li.append(div);

        // Append div to car display area
        $('#js-garage').append(div);

      }
      // After all cars rendered
      return carsObject;
    }
    // If car object was empty, make new div
    let div = $('<div>');
    div.text('Click "+" To Add New Car');
    // Append div to car display area
    $('#js-garage').append(div);

    return carsObject;
  },
  renderLastMaintenance(object) {

    console.log(object);

    // Ignore empty object
    if (object) {

      // Convert Unix time to MMDDYYYY format

      // Declare variables
      let oilChange       = object.oilChange;
      let tireRotation    = object.tireRotation;
      let carInspection   = object.carInspectionUnixTime;
      let brakeInspection = object.brakeInspectionUnixTime;
      let wiperBlades     = object.wiperBladesUnixTime;

      // Convert to human readable dates if present
      if (carInspection) {
        carInspection   = dateConverter.unixTimeTommddyyyy(object.carInspectionUnixTime);
      }
      if (brakeInspection) {
        dateConverter.unixTimeTommddyyyy(object.brakeInspectionUnixTime);
      }
      if (wiperBlades) {
        dateConverter.unixTimeTommddyyyy(object.wiperBladesUnixTime);
      }

      // Update DOM
      $('#js-display-last-oil-change').text(oilChange                   || "-");
      $('#js-display-last-tire-rotation').text(tireRotation             || "-");
      $('#js-display-last-car-inspection').text(carInspection           || "-");
      $('#js-display-last-brake-inspection').text(brakeInspection       || "-");
      $('#js-display-last-wiper-blades').text(wiperBlades               || "-");
      

      // After lastMaintenance object rendered
      return object;
    }
    // If maintenance object was empty
    return object;
  },
  renderMaintenanceIntervals(object) {

    // Ignore empty object
    if (object) {

      // Declare variables
      let intOilChange       = object.oilChange + " miles";
      let intTireRotation    = object.tireRotation + " miles";
      let intCarInspection   = object.carInspectionMonths + " months";
      let intBrakeInspection = object.brakeInspectionMonths + " months";
      let intWiperBlades     = object.wiperBladesMonths + " months";

      // Update DOM input placeholder text
      $('#js-update-interval-oil-change').attr("placeholder", intOilChange);
      $('#js-update-interval-tire-rotation').attr("placeholder", intTireRotation);
      $('#js-update-interval-car-inspection').attr("placeholder", intCarInspection);
      $('#js-update-interval-brake-inspection').attr("placeholder", intBrakeInspection);
      $('#js-update-interval-wiper-blades').attr("placeholder", intWiperBlades);

      // After maintenanceInterval object rendered
      return object;
    }
    // If maintenance object was empty
    return object;
  },
  renderDropDownModels(modelArray) {
    // Empty previous models if they exist
    $('#js-add-car-model').empty();
    $('#js-add-car-model').append('<option value="" disabled selected>Choose Model</option>');

    // Ignore empty modelArrays
    if (modelArray) {
      // Iterate over car models in array
      for (let i = 0; i < modelArray.length; i++) {
        // Create new option element
        let option = $('<option>');
        // Add value attribute and inner text
        option.attr("value", modelArray[i]);
        option.text(modelArray[i]);
        // Append to list
        $('#js-add-car-model').append(option);
      }
      // Materialize CSS method to re-render dropdown options
      $('select').material_select();
    }
  },
  renderMileage(carObject) {
    return $('#js-update-mileage').attr("placeholder", carObject.mileage);
  },
  renderTimeline(doIneedAnArgument){
    /*
     *  Melissa: Code to dynamically render timeline details goes here
    **/
  }
};
