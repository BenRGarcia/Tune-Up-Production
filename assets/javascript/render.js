const DOM = {
  renderCars(carsObject) {
    // Make new div
    let div = $('<div>');

    // Ignore empty object
    if (carsObject) {

      // Iterate over car objects
      for (let key in carsObject) {

        // Declare carKey variable
        let carKey = key;

        // Strip out year, make, model from object
        let year = carsObject[key].year;
        let make = carsObject[key].make;
        let model = carsObject[key].model;

        // Add attributes and text
        div.data("car-key", carKey);
        div.addClass("js-display-car-details");
        div.text(year, make, model);

        // Append div to car display area
        $('.js-display-car-details').append(div);
      }
      // After all cars rendered
      return carsObject;
    }

    // If car object was empty
    div.text('Click "+" To Add New Car');
    // Append div to car display area
    $('#js-garage').append(div);

    return carsObject;
  },
  renderLastMaintenance(object) {

    // Ignore empty object
    if (object) {

      // Convert Unix time to MMDDYYYY format
      /* 
       *  Call dateConverter's unixTimeTommddyyyy() method 
       *
       *  In need of conversion: 
       *    1) carInpectionUnixTime
       *    2) brakeInspectionUnixTime
       *    3) wiperBladesUnixTime
       * 
      **/
     let inspectionDate = $('#js-last-inspection-date').val();
     let brakeDate = $('#js-last-brake-date').val();
     let wiperBladeDate = $('#js-last-wiper-date').val();

     let carInpectionUnixTime = dateConverter.unixTimeTommddyyyy(inspectionDate);
     let brakeInpectionUnixTime = dateConverter.unixTimeTommddyyyy(brakeDate);
     let wiperBladesUnixTime = dateConverter.unixTimeTommddyyyy(wiperBladeDate);

     let carInspectionTimeline = carInpectionUnixTime.data("date");
     let brakeInspectionTimeline = brakeInpectionUnixTime.data("date");
     let wiperBladeTimeline = wiperBladesUnixTime.data("date");

      // Declare variables
      let lastOilChange       = object.oilChange;
      let lastTireRotation    = object.tireRotation;
      let lastCarInspection   = object.carInpectionUnixTime;
      let lastBrakeInspection = object.brakeInspectionUnixTime;
      let lastWiperBlades     = object.wiperBladesUnixTime;

      // Update DOM
      $('#js-display-last-oil-change').text(lastOilChange                   || "-");
      $('#js-display-last-tire-rotation').text(lastTireRotation             || "-");
      $('#js-display-last-car-inspection').text(lastCarInspection           || "-");
      $('#js-display-last-brake-inspection').text(lastBrakeInspection       || "-");
      $('#js-display-last-wiper-blades').text(lastWiperBlades               || "-");
      $('.events').append(carInspectionTimeline).text("CAR ISNPECTION"      || "-");
      $('.events').append(brakeInspectionTimeline).text("BRAKE INSPECTION"  || "-");
      $('.events').append(wiperBladeTimeline).text("CHECK WIPER BLADE"      || "-");
      


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
      let intOilChange       = object.oilChange;
      let intTireRotation    = object.tireRotation;
      let intCarInspection   = object.carInspectionMonths;
      let intBrakeInspection = object.brakeInspectionMonths;
      let intWiperBlades     = object.wiperBladesMonths;

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
    // Ignore empty modelArrays
    if (modelArray) {
      console.log(`if statement`);
      // Iterate over car models in array
      for (let i = 0; i < modelArray.length; i++) {
        console.log(modelArray[i]);
        // Create new option element
        let option = $('<option>');
        // Add value attribute and inner text
        option.attr("value", modelArray[i]);
        option.text(modelArray[i]);
        // Append to list
        $('#js-add-car-model').append(option);
      }
      $('select').material_select();
    }
  }
};
